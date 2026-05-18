// Global enhancements and translation selector for Preferred Meeting Management
(function () {
  'use strict';

  const languageMap = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    'zh-CN': '中文（简体）',
    hi: 'हिन्दी',
    pt: 'Português',
    ja: '日本語',
    de: 'Deutsch',
    ko: '한국어',
    id: 'Bahasa Indonesia',
    nl: 'Nederlands'
  };

  function setCookie(name, value) {
    document.cookie = `${name}=${value};path=/;max-age=31536000;SameSite=Lax`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : '';
  }

  function applyGoogleTranslate(lang) {
    if (!lang || lang === 'en') {
      setCookie('googtrans', '/en/en');
      localStorage.setItem('pmmi_language', 'en');
      const frame = document.querySelector('iframe.goog-te-banner-frame');
      if (frame) frame.remove();
      document.documentElement.lang = 'en';
      return;
    }

    setCookie('googtrans', `/en/${lang}`);
    localStorage.setItem('pmmi_language', lang);
    document.documentElement.lang = lang;

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  }

  window.googleTranslateElementInit = function () {
    if (!window.google || !window.google.translate) return;
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'fr,es,ru,zh-CN,hi,pt,ja,de,ko,id,nl',
      autoDisplay: false,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    const saved = localStorage.getItem('pmmi_language') || 'en';
    if (saved !== 'en') {
      setTimeout(() => applyGoogleTranslate(saved), 700);
    }
  };

  function createGlobalBar() {
    if (document.querySelector('.global-utility-bar')) return;

    const bar = document.createElement('div');
    bar.className = 'global-utility-bar';
    bar.innerHTML = `
      <div class="global-utility-inner">
        <div class="global-credibility">
          <span class="global-dot"></span>
          <span>Scientific conference management for research communities worldwide</span>
        </div>
        <div class="language-control" aria-label="Language selector">
          <label for="pmmi-language-select">Language</label>
          <select id="pmmi-language-select">
            ${Object.entries(languageMap).map(([code, label]) => `<option value="${code}">${label}</option>`).join('')}
          </select>
          <div id="google_translate_element" aria-hidden="true"></div>
        </div>
      </div>
    `;

    document.body.insertBefore(bar, document.body.firstChild);

    const select = document.getElementById('pmmi-language-select');
    const saved = localStorage.getItem('pmmi_language') || 'en';
    select.value = saved;
    document.documentElement.lang = saved;

    select.addEventListener('change', function () {
      applyGoogleTranslate(this.value);
    });
  }

  function loadGoogleTranslate() {
    if (document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }

  function addGlobalAccents() {
    document.body.classList.add('pmmi-global-site');

    const hero = document.querySelector('.hero .hero-content');
    if (hero && !hero.querySelector('.global-eyebrow')) {
      const eyebrow = document.createElement('div');
      eyebrow.className = 'global-eyebrow';
      eyebrow.textContent = 'San Diego based • Global conference execution • Scientific communities';
      hero.insertBefore(eyebrow, hero.firstChild);
    }
  }

  function init() {
    createGlobalBar();
    addGlobalAccents();
    loadGoogleTranslate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
