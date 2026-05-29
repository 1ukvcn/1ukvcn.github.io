(function () {
  const DEFAULT_SIGNATURE = '平安喜樂，順遂無憂。';

  function ensureSignature(card) {
    card.querySelectorAll('.github-follow-button').forEach((button) => button.remove());

    const statistics = card.querySelector('.statistics');
    if (!statistics) return;

    if (!card.querySelector('.profile-signature')) {
      const signature = document.createElement('div');
      signature.className = 'profile-signature';
      signature.textContent = DEFAULT_SIGNATURE;
      statistics.insertAdjacentElement('afterend', signature);
    }
  }

  function enhanceProfileCard() {
    const card = document.querySelector('.home-sidebar-container .sidebar-content');
    if (!card) return;

    card.classList.add('github-profile-card');

    const stats = card.querySelector('.statistics');
    if (stats && stats.dataset.githubProfileSorted !== 'true') {
      const postItem = stats.querySelector('a[href*="/archives"]');
      const tagItem = stats.querySelector('a[href*="/tags"]');
      const categoryItem = stats.querySelector('a[href*="/categories"]');
      [postItem, tagItem, categoryItem].filter(Boolean).forEach((item) => stats.appendChild(item));
      stats.dataset.githubProfileSorted = 'true';
    }

    ensureSignature(card);
  }

  function run() {
    enhanceProfileCard();
    window.setTimeout(enhanceProfileCard, 250);
    window.setTimeout(enhanceProfileCard, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  document.addEventListener('swup:contentReplaced', run);
  document.addEventListener('pjax:complete', run);

  const observer = new MutationObserver(() => enhanceProfileCard());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
