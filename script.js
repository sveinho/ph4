document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const resetBtn = document.getElementById('resetSearchBtn');
  const articlesContainer = document.getElementById('articlesContainer');
  const searchCounter = document.getElementById('searchCounter');
  const noResults = document.getElementById('noResults');
  
  const loadMoreWrapper = document.getElementById('loadMoreWrapper');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  let allArticles = []; 
  let filteredArticles = []; 
  let searchQuery = '';
  let activeArticleId = null;

  const ITEMS_PER_PAGE = 10; 
  let displayedCount = ITEMS_PER_PAGE; 

  // 1. Last inn den lette indeksen, og sjekk om det finnes en direktelenke i URL-en
  async function loadArticles() {
    try {
      const response = await fetch('index.json');
      if (!response.ok) throw new Error('Failed to load JSON registry data');
      allArticles = await response.json();
      
      // Sjekk om URL-en inneholder en spesifikk ID (f.eks. minside.no/?id=png)
      const urlParams = new URLSearchParams(window.location.search);
      const urlId = urlParams.get('id');
      
      if (urlId && allArticles.some(a => a.id === urlId)) {
        activeArticleId = urlId;
        filterArticles(false); // Vis listen uten å nullstille antall elementer
        triggerDirectLinkFetch(urlId); // Hent og vis Markdown-filen med en gang
      } else {
        filterArticles(true); // Normal oppstart uten filter
      }
    } catch (error) {
      console.error(error);
      if (articlesContainer) {
        articlesContainer.innerHTML = '<p style="color: red;">Could not fetch index. Please verify running via local development server.</p>';
      }
    }
  }

  // Hjelpefunksjon for å hente Markdown-filen automatisk ved direktelenking
  async function triggerDirectLinkFetch(articleId) {
    const targetArticle = allArticles.find(a => a.id === articleId);
    if (targetArticle && !targetArticle.markdownContent) {
      try {
        const res = await fetch(`articles/${articleId}.md`);
        if (!res.ok) throw new Error('Markdown file not found');
        const mdText = await res.text();
        
        // Lagre rå-teksten i minnet på objektet
        targetArticle.markdownContent = mdText;
        filterArticles(false);
        
        // Rull pent ned til det åpnede kortet
        setTimeout(() => {
          const el = articlesContainer.querySelector(`[data-id="${articleId}"]`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } catch (err) {
        console.error("Could not load direct link markdown:", err);
      }
    }
  }

  function escapeRegExp(string) { 
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  }

  function getHighlightedHTML(text, words) {
    if (words.length === 0 || !text) return text;
    let html = text;
    words.forEach(word => {
      const cleanWord = word.replace(/^\./, ''); 
      const regex = new RegExp(`(${escapeRegExp(cleanWord)})`, 'gi');
      html = html.replace(regex, '<mark>$1</mark>');
    });
    return html;
  }

  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // SØKEMOTOR: Sorterer og vekter treffene dine nøyaktig som før
  function filterArticles(isNewQuery = false) {
    if (!articlesContainer) return;
    
    const searchWords = searchQuery.split(' ').filter(Boolean);
    const isSearching = searchWords.length > 0;

    if (isSearching) {
      filteredArticles = allArticles.filter(article => {
        const titleText = (article.title || '').toLowerCase();
        
        return searchWords.every(word => {
          if (titleText.includes(word)) return true;
          const cleanWord = word.replace(/^\./, '');
          const cleanTitle = titleText.replace(/\./g, '');
          return titleText.includes(cleanWord) || cleanTitle.includes(cleanWord);
        });
      });

      filteredArticles.sort((a, b) => {
        const titleA = (a.title || '').toLowerCase().trim();
        const titleB = (b.title || '').toLowerCase().trim();
        const firstWord = searchWords[0] || ''; 

        let scoreA = 0;
        let scoreB = 0;

        if (titleA === firstWord || titleA === firstWord.replace(/^\./, '')) {
          scoreA = 3;
        } else if (titleA.startsWith(firstWord) || titleA.startsWith(firstWord.replace(/^\./, ''))) {
          scoreA = 2;
        } else {
          scoreA = 1;
        }

        if (titleB === firstWord || titleB === firstWord.replace(/^\./, '')) {
          scoreB = 3;
        } else if (titleB.startsWith(firstWord) || titleB.startsWith(firstWord.replace(/^\./, ''))) {
          scoreB = 2;
        } else {
          scoreB = 1;
        }

        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        } else {
          return titleA.localeCompare(titleB);
        }
      });
    } else {
      filteredArticles = [...allArticles].sort((a, b) => 
        (a.title || '').toLowerCase().localeCompare((b.title || '').toLowerCase())
      );
    }

    if (isNewQuery) {
      displayedCount = ITEMS_PER_PAGE;
    }
    
    renderArticles();
  }
  // Håndterer opptegning og begrensning av treff (Slice)
  function renderArticles() {
    const searchWords = searchQuery.split(' ').filter(Boolean);
    const isSearching = searchWords.length > 0;

    updateSearchUI(filteredArticles.length, isSearching);

    if (filteredArticles.length === 0) {
      articlesContainer.innerHTML = '';
      if (loadMoreWrapper) loadMoreWrapper.classList.add('hidden');
      return;
    }

    const itemsToRender = filteredArticles.slice(0, displayedCount);

    articlesContainer.innerHTML = itemsToRender.map(article => {
      const isExpanded = article.id === activeArticleId;
      const displayTitle = isSearching ? getHighlightedHTML(article.title, searchWords) : article.title;
      
      const disciplineValue = article.discipline || 'Unknown';
      const tagsArray = article.tags || [];

      const tagsHTML = tagsArray.map(tag => 
        `<span class="badge status-${tag.toLowerCase().trim()}">${tag}</span>`
      ).join(' ');

      // RENDERING: Hele Markdown-filen tegnes nå i én samlet flyt uten oppsplitting
      let expandedHTML = '';
      if (isExpanded) {
        const md = window.markdownit ? window.markdownit() : null;
        const htmlContent = article.markdownContent && md ? md.render(article.markdownContent) : 'Loading details...';

        expandedHTML = `
          <div class="full-content">
            <div>${htmlContent}</div>
            <button class="share-btn" data-id="${article.id}">Copy share link 🔗</button>
            <button class="close-article-btn">Close description ✕</button>
          </div>
        `;
      } else {
        expandedHTML = `<button class="read-more-btn">Read full description →</button>`;
      }

      return `
        <article class="filterable" data-id="${article.id}">
          <div class="article-header">
            <h2>${displayTitle}</h2>
            <div class="article-meta-inline">
              <span class="badge discipline-badge">Discipline: ${disciplineValue}</span>
              ${tagsHTML}
            </div>
          </div>
          <p class="abstract-text">${article.abstract || ''}</p>
          ${expandedHTML}
        </article>
      `;
    }).join('');

    attachArticleClickEvents();

    if (loadMoreWrapper) {
      if (filteredArticles.length > displayedCount) {
        loadMoreWrapper.classList.remove('hidden');
      } else {
        loadMoreWrapper.classList.add('hidden');
      }
    }
  }

  // Henter den eksterne .md-filen og håndterer deleknapp
  function attachArticleClickEvents() {
    articlesContainer.querySelectorAll('.filterable').forEach(articleEl => {
      
      articleEl.addEventListener('click', async function(e) {
        if (e.target.classList.contains('close-article-btn') || e.target.classList.contains('share-btn')) return;

        const articleId = this.dataset.id;
        const targetArticle = allArticles.find(a => a.id === articleId);

        if (activeArticleId === articleId) {
          activeArticleId = null;
          history.pushState({}, '', window.location.pathname); 
          filterArticles(false);
          return;
        }

        activeArticleId = articleId;
        history.pushState({id: articleId}, '', `?id=${articleId}`); 
        filterArticles(false);

        if (targetArticle && !targetArticle.markdownContent) {
          try {
            const res = await fetch(`articles/${articleId}.md`);
            if (!res.ok) throw new Error('Markdown file not found');
            const mdText = await res.text();
            
            targetArticle.markdownContent = mdText;
            filterArticles(false);
          } catch (err) {
            console.error("Could not load markdown details:", err);
            const contentEl = articlesContainer.querySelector(`[data-id="${articleId}"] .full-content`);
            if (contentEl) contentEl.innerHTML = '<p style="color:red;">Error loading document details.</p>';
            return;
          }
        }

        const newRenderedEl = articlesContainer.querySelector(`[data-id="${articleId}"]`);
        if (newRenderedEl) newRenderedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      const shareBtn = articleEl.querySelector('.share-btn');
      if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
          e.stopPropagation(); 
          const articleId = this.dataset.id;
          const shareUrl = `${window.location.origin}${window.location.pathname}?id=${articleId}`;
          
          navigator.clipboard.writeText(shareUrl).then(() => {
            this.textContent = 'Link copied! ✔';
            this.classList.add('copied');
            
            setTimeout(() => {
              this.textContent = 'Copy share link 🔗';
              this.classList.remove('copied');
            }, 2000);
          }).catch(err => {
            console.error('Could not copy link: ', err);
          });
        });
      }

      const closeBtn = articleEl.querySelector('.close-article-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          activeArticleId = null;
          history.pushState({}, '', window.location.pathname); 
          filterArticles(false);
        });
      }
    });
  }

  function updateSearchUI(count, isSearching) {
    if (searchCounter) {
      searchCounter.textContent = isSearching 
        ? `Found ${count} matching formats sorted by relevance`
        : `Registry index loaded. Total formats available: ${count}`;
    }
    if (noResults) noResults.classList.toggle('hidden', count > 0);
  }

  function resetEntireRegistry() {
    searchInput.value = ''; 
    searchQuery = ''; 
    activeArticleId = null;
    history.pushState({}, '', window.location.pathname); 
    if (resetBtn) resetBtn.classList.add('invisible');
    filterArticles(true);
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      displayedCount += ITEMS_PER_PAGE;
      renderArticles();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', debounce(function(e) {
      const currentInput = e.target.value.trim();
      searchQuery = currentInput.toLowerCase();
      activeArticleId = null; 
      
      if (resetBtn) {
        resetBtn.classList.toggle('invisible', currentInput.length === 0);
      }
      
      if (currentInput.length > 0 && currentInput.length < 3) {
        if (searchCounter) {
          searchCounter.textContent = "Please enter at least 3 characters to search...";
        }
        return; 
      }
      
      filterArticles(true);
    }, 300));
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      resetEntireRegistry();
      searchInput.focus();
    });
  }

  loadArticles();
});
