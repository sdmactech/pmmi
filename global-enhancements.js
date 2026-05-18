// PMMI V2 global enhancements: stable no-reload language switcher + global UI accents
(function () {
  'use strict';

  const languages = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    ru: 'Русский',
    'zh-CN': '中文',
    hi: 'हिन्दी',
    pt: 'Português',
    ja: '日本語',
    de: 'Deutsch',
    ko: '한국어',
    id: 'Bahasa Indonesia',
    nl: 'Nederlands'
  };

  const translations = {
    en: {
      utility: 'Global scientific conference operations from San Diego',
      language: 'Language',
      navHome: 'Home', navAbout: 'About', navServices: 'Services', navWork: 'Our Work', navResources: 'Resources', navContact: 'Contact',
      eyebrow: 'San Diego headquarters • Worldwide conference delivery',
      heroTitle: 'Global Conference Management for Scientific Communities',
      heroLead: 'High-touch planning, technical program coordination, registration, exhibits, and on-site operations for research conferences around the world.',
      primaryCta: 'Plan a Conference', secondaryCta: 'Explore Global Work',
      proof1Title: 'Worldwide execution', proof1Text: 'Supporting scientific meetings across North America, Europe, Asia, and Australia.',
      proof2Title: 'Technical depth', proof2Text: 'MEMS, microfluidics, transducers, sensors, actuators, power MEMS, and microsystems.',
      proof3Title: 'Established series', proof3Text: 'Conference support connected to MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS, and MicroFIP.',
      footerTagline: 'Scientific conference management for global research communities.'
    },
    fr: {
      utility: 'Opérations mondiales de conférences scientifiques depuis San Diego',
      language: 'Langue',
      navHome: 'Accueil', navAbout: 'À propos', navServices: 'Services', navWork: 'Réalisations', navResources: 'Ressources', navContact: 'Contact',
      eyebrow: 'Siège à San Diego • Conférences livrées dans le monde entier',
      heroTitle: 'Gestion mondiale de conférences pour les communautés scientifiques',
      heroLead: 'Planification attentive, coordination de programmes techniques, inscriptions, expositions et opérations sur site pour des conférences de recherche internationales.',
      primaryCta: 'Planifier une conférence', secondaryCta: 'Voir notre travail mondial',
      proof1Title: 'Exécution mondiale', proof1Text: 'Soutien de réunions scientifiques en Amérique du Nord, en Europe, en Asie et en Australie.',
      proof2Title: 'Expertise technique', proof2Text: 'MEMS, microfluidique, transducteurs, capteurs, actionneurs, PowerMEMS et microsystèmes.',
      proof3Title: 'Séries établies', proof3Text: 'Soutien lié à MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS et MicroFIP.',
      footerTagline: 'Gestion de conférences scientifiques pour les communautés de recherche mondiales.'
    },
    es: {
      utility: 'Operaciones globales de conferencias científicas desde San Diego',
      language: 'Idioma',
      navHome: 'Inicio', navAbout: 'Nosotros', navServices: 'Servicios', navWork: 'Proyectos', navResources: 'Recursos', navContact: 'Contacto',
      eyebrow: 'Sede en San Diego • Conferencias en todo el mundo',
      heroTitle: 'Gestión global de conferencias para comunidades científicas',
      heroLead: 'Planificación especializada, coordinación técnica, registro, exhibiciones y operaciones presenciales para conferencias de investigación internacionales.',
      primaryCta: 'Planificar conferencia', secondaryCta: 'Ver trabajo global',
      proof1Title: 'Ejecución mundial', proof1Text: 'Apoyo a reuniones científicas en Norteamérica, Europa, Asia y Australia.',
      proof2Title: 'Profundidad técnica', proof2Text: 'MEMS, microfluídica, transductores, sensores, actuadores, PowerMEMS y microsistemas.',
      proof3Title: 'Series establecidas', proof3Text: 'Soporte conectado con MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS y MicroFIP.',
      footerTagline: 'Gestión de conferencias científicas para comunidades de investigación globales.'
    },
    ru: {
      utility: 'Глобальное сопровождение научных конференций из Сан-Диего',
      language: 'Язык',
      navHome: 'Главная', navAbout: 'О нас', navServices: 'Услуги', navWork: 'Проекты', navResources: 'Ресурсы', navContact: 'Контакты',
      eyebrow: 'Штаб-квартира в Сан-Диего • Конференции по всему миру',
      heroTitle: 'Глобальное управление конференциями для научных сообществ',
      heroLead: 'Планирование, координация технических программ, регистрация, выставки и работа на площадке для международных исследовательских конференций.',
      primaryCta: 'Запланировать конференцию', secondaryCta: 'Смотреть проекты',
      proof1Title: 'Мировой опыт', proof1Text: 'Поддержка научных встреч в Северной Америке, Европе, Азии и Австралии.',
      proof2Title: 'Техническая экспертиза', proof2Text: 'MEMS, микрофлюидика, преобразователи, датчики, актуаторы, PowerMEMS и микросистемы.',
      proof3Title: 'Известные серии', proof3Text: 'Поддержка MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS и MicroFIP.',
      footerTagline: 'Управление научными конференциями для глобальных исследовательских сообществ.'
    },
    'zh-CN': {
      utility: '从圣地亚哥服务全球科学会议运营',
      language: '语言',
      navHome: '首页', navAbout: '关于我们', navServices: '服务', navWork: '项目', navResources: '资源', navContact: '联系',
      eyebrow: '圣地亚哥总部 • 全球会议交付',
      heroTitle: '面向科学社群的全球会议管理',
      heroLead: '为全球研究会议提供高标准规划、技术项目协调、注册、展览和现场运营服务。',
      primaryCta: '规划会议', secondaryCta: '查看全球项目',
      proof1Title: '全球执行', proof1Text: '支持北美、欧洲、亚洲和澳大利亚的科学会议。',
      proof2Title: '技术深度', proof2Text: 'MEMS、微流控、传感器、执行器、PowerMEMS 和微系统。',
      proof3Title: '成熟会议系列', proof3Text: '支持 MEMS、Transducers、MicroTAS、PowerMEMS+、CBMS 和 MicroFIP。',
      footerTagline: '为全球研究社群提供科学会议管理。'
    },
    hi: {
      utility: 'सैन डिएगो से वैश्विक वैज्ञानिक सम्मेलन संचालन',
      language: 'भाषा',
      navHome: 'होम', navAbout: 'परिचय', navServices: 'सेवाएँ', navWork: 'कार्य', navResources: 'संसाधन', navContact: 'संपर्क',
      eyebrow: 'सैन डिएगो मुख्यालय • विश्वव्यापी सम्मेलन डिलीवरी',
      heroTitle: 'वैज्ञानिक समुदायों के लिए वैश्विक सम्मेलन प्रबंधन',
      heroLead: 'दुनिया भर के अनुसंधान सम्मेलनों के लिए योजना, तकनीकी कार्यक्रम समन्वय, पंजीकरण, प्रदर्शनियाँ और ऑन-साइट संचालन।',
      primaryCta: 'सम्मेलन योजना', secondaryCta: 'वैश्विक कार्य देखें',
      proof1Title: 'विश्वव्यापी संचालन', proof1Text: 'उत्तरी अमेरिका, यूरोप, एशिया और ऑस्ट्रेलिया में वैज्ञानिक बैठकों का समर्थन।',
      proof2Title: 'तकनीकी गहराई', proof2Text: 'MEMS, माइक्रोफ्लुइडिक्स, ट्रांसड्यूसर, सेंसर, एक्ट्यूएटर, PowerMEMS और माइक्रोसिस्टम्स।',
      proof3Title: 'स्थापित श्रृंखलाएँ', proof3Text: 'MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS और MicroFIP से जुड़ा समर्थन।',
      footerTagline: 'वैश्विक अनुसंधान समुदायों के लिए वैज्ञानिक सम्मेलन प्रबंधन।'
    },
    pt: {
      utility: 'Operações globais de conferências científicas a partir de San Diego',
      language: 'Idioma',
      navHome: 'Início', navAbout: 'Sobre', navServices: 'Serviços', navWork: 'Projetos', navResources: 'Recursos', navContact: 'Contato',
      eyebrow: 'Sede em San Diego • Entrega de conferências no mundo todo',
      heroTitle: 'Gestão global de conferências para comunidades científicas',
      heroLead: 'Planejamento especializado, coordenação de programa técnico, inscrições, exposições e operações presenciais para conferências de pesquisa globais.',
      primaryCta: 'Planejar conferência', secondaryCta: 'Ver atuação global',
      proof1Title: 'Execução mundial', proof1Text: 'Apoio a reuniões científicas na América do Norte, Europa, Ásia e Austrália.',
      proof2Title: 'Profundidade técnica', proof2Text: 'MEMS, microfluídica, transdutores, sensores, atuadores, PowerMEMS e microssistemas.',
      proof3Title: 'Séries estabelecidas', proof3Text: 'Suporte conectado a MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS e MicroFIP.',
      footerTagline: 'Gestão de conferências científicas para comunidades globais de pesquisa.'
    },
    ja: {
      utility: 'サンディエゴ発、世界の科学会議運営',
      language: '言語',
      navHome: 'ホーム', navAbout: '会社情報', navServices: 'サービス', navWork: '実績', navResources: 'リソース', navContact: 'お問い合わせ',
      eyebrow: 'サンディエゴ本社 • 世界規模の会議運営',
      heroTitle: '科学コミュニティのためのグローバル会議運営',
      heroLead: '研究会議向けに、計画、技術プログラム調整、登録、展示、現地運営を高品質に提供します。',
      primaryCta: '会議を計画する', secondaryCta: '実績を見る',
      proof1Title: '世界規模の運営', proof1Text: '北米、欧州、アジア、オーストラリアの科学会議を支援。',
      proof2Title: '技術的専門性', proof2Text: 'MEMS、マイクロ流体、トランスデューサ、センサー、アクチュエータ、PowerMEMS、マイクロシステム。',
      proof3Title: '確立されたシリーズ', proof3Text: 'MEMS、Transducers、MicroTAS、PowerMEMS+、CBMS、MicroFIP を支援。',
      footerTagline: '世界の研究コミュニティ向け科学会議運営。'
    },
    de: {
      utility: 'Globale wissenschaftliche Konferenzorganisation aus San Diego',
      language: 'Sprache',
      navHome: 'Start', navAbout: 'Über uns', navServices: 'Leistungen', navWork: 'Projekte', navResources: 'Ressourcen', navContact: 'Kontakt',
      eyebrow: 'Hauptsitz San Diego • Weltweite Konferenzdurchführung',
      heroTitle: 'Globales Konferenzmanagement für wissenschaftliche Gemeinschaften',
      heroLead: 'Präzise Planung, technische Programmkoordination, Registrierung, Ausstellungen und Vor-Ort-Betrieb für Forschungskonferenzen weltweit.',
      primaryCta: 'Konferenz planen', secondaryCta: 'Globale Projekte ansehen',
      proof1Title: 'Weltweite Umsetzung', proof1Text: 'Unterstützung wissenschaftlicher Tagungen in Nordamerika, Europa, Asien und Australien.',
      proof2Title: 'Technische Tiefe', proof2Text: 'MEMS, Mikrofluidik, Transducer, Sensoren, Aktoren, PowerMEMS und Mikrosysteme.',
      proof3Title: 'Etablierte Serien', proof3Text: 'Unterstützung für MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS und MicroFIP.',
      footerTagline: 'Wissenschaftliches Konferenzmanagement für globale Forschungsgemeinschaften.'
    },
    ko: {
      utility: '샌디에이고 기반 글로벌 과학 컨퍼런스 운영',
      language: '언어',
      navHome: '홈', navAbout: '소개', navServices: '서비스', navWork: '실적', navResources: '자료', navContact: '문의',
      eyebrow: '샌디에이고 본사 • 전 세계 컨퍼런스 운영',
      heroTitle: '과학 커뮤니티를 위한 글로벌 컨퍼런스 관리',
      heroLead: '전 세계 연구 컨퍼런스를 위한 기획, 기술 프로그램 조정, 등록, 전시 및 현장 운영 서비스를 제공합니다.',
      primaryCta: '컨퍼런스 계획', secondaryCta: '글로벌 실적 보기',
      proof1Title: '전 세계 운영', proof1Text: '북미, 유럽, 아시아 및 호주의 과학 회의 지원.',
      proof2Title: '기술 전문성', proof2Text: 'MEMS, 미세유체, 트랜스듀서, 센서, 액추에이터, PowerMEMS 및 마이크로시스템.',
      proof3Title: '검증된 시리즈', proof3Text: 'MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS 및 MicroFIP 지원.',
      footerTagline: '글로벌 연구 커뮤니티를 위한 과학 컨퍼런스 관리.'
    },
    id: {
      utility: 'Operasi konferensi ilmiah global dari San Diego',
      language: 'Bahasa',
      navHome: 'Beranda', navAbout: 'Tentang', navServices: 'Layanan', navWork: 'Portofolio', navResources: 'Sumber Daya', navContact: 'Kontak',
      eyebrow: 'Kantor pusat San Diego • Pelaksanaan konferensi global',
      heroTitle: 'Manajemen konferensi global untuk komunitas ilmiah',
      heroLead: 'Perencanaan, koordinasi program teknis, registrasi, pameran, dan operasi di lokasi untuk konferensi riset di seluruh dunia.',
      primaryCta: 'Rencanakan konferensi', secondaryCta: 'Lihat karya global',
      proof1Title: 'Pelaksanaan global', proof1Text: 'Mendukung pertemuan ilmiah di Amerika Utara, Eropa, Asia, dan Australia.',
      proof2Title: 'Kedalaman teknis', proof2Text: 'MEMS, mikrofluidika, transduser, sensor, aktuator, PowerMEMS, dan mikrosistem.',
      proof3Title: 'Seri mapan', proof3Text: 'Dukungan untuk MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS, dan MicroFIP.',
      footerTagline: 'Manajemen konferensi ilmiah untuk komunitas riset global.'
    },
    nl: {
      utility: 'Wereldwijde wetenschappelijke conferentieoperaties vanuit San Diego',
      language: 'Taal',
      navHome: 'Home', navAbout: 'Over ons', navServices: 'Diensten', navWork: 'Werk', navResources: 'Bronnen', navContact: 'Contact',
      eyebrow: 'Hoofdkantoor San Diego • Wereldwijde conferentie-uitvoering',
      heroTitle: 'Wereldwijd conferentiebeheer voor wetenschappelijke gemeenschappen',
      heroLead: 'Zorgvuldige planning, technische programmaccoördinatie, registratie, exposities en uitvoering op locatie voor onderzoekconferenties wereldwijd.',
      primaryCta: 'Plan een conferentie', secondaryCta: 'Bekijk wereldwijd werk',
      proof1Title: 'Wereldwijde uitvoering', proof1Text: 'Ondersteuning van wetenschappelijke bijeenkomsten in Noord-Amerika, Europa, Azië en Australië.',
      proof2Title: 'Technische diepgang', proof2Text: 'MEMS, microfluidica, transducers, sensoren, actuatoren, PowerMEMS en microsystemen.',
      proof3Title: 'Gevestigde series', proof3Text: 'Ondersteuning verbonden aan MEMS, Transducers, MicroTAS, PowerMEMS+, CBMS en MicroFIP.',
      footerTagline: 'Wetenschappelijk conferentiebeheer voor wereldwijde onderzoeksgemeenschappen.'
    }
  };

  function t(key) {
    const lang = localStorage.getItem('pmmi_language') || 'en';
    return (translations[lang] && translations[lang][key]) || translations.en[key] || '';
  }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach(el => {
      if (text) el.textContent = text;
    });
  }

  function updateLinks() {
    const labels = [
      ['a[href="index.html"]', 'navHome'],
      ['a[href="about.html"]', 'navAbout'],
      ['a[href="services.html"]', 'navServices'],
      ['a[href="portfolio.html"]', 'navWork'],
      ['a[href="resources.html"]', 'navResources'],
      ['a[href="contact.html"]', 'navContact']
    ];
    labels.forEach(([selector, key]) => {
      document.querySelectorAll(`.nav-menu ${selector}`).forEach(el => el.textContent = t(key));
    });
  }

  function createGlobalBar() {
    if (document.querySelector('.v2-global-bar')) return;
    const bar = document.createElement('div');
    bar.className = 'v2-global-bar';
    bar.innerHTML = `
      <div class="v2-global-inner">
        <div class="v2-worldmark" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div class="v2-global-message" data-i18n="utility"></div>
        <div class="v2-language-control">
          <label for="pmmi-language-select" data-i18n="language"></label>
          <select id="pmmi-language-select">
            ${Object.entries(languages).map(([code, label]) => `<option value="${code}">${label}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function addV2Hero() {
    const hero = document.querySelector('.hero .hero-content');
    if (!hero) return;

    if (!hero.querySelector('.v2-global-eyebrow')) {
      const eyebrow = document.createElement('div');
      eyebrow.className = 'v2-global-eyebrow';
      eyebrow.setAttribute('data-i18n', 'eyebrow');
      hero.insertBefore(eyebrow, hero.firstChild);
    }

    const title = hero.querySelector('h1');
    const lead = hero.querySelector('.lead');
    if (document.body.classList.contains('home-page') || /index\.html$|\/$/.test(window.location.pathname)) {
      if (title) title.setAttribute('data-i18n', 'heroTitle');
      if (lead) lead.setAttribute('data-i18n', 'heroLead');
      const primary = hero.querySelector('.btn-primary');
      const secondary = hero.querySelector('.btn-secondary');
      if (primary) primary.setAttribute('data-i18n', 'primaryCta');
      if (secondary) secondary.setAttribute('data-i18n', 'secondaryCta');
    }
  }

  function addGlobalProof() {
    const existing = document.querySelector('.v2-proof-band');
    if (existing) return;
    const trust = document.querySelector('.trust-indicators');
    if (!trust || !/index\.html$|\/$/.test(window.location.pathname)) return;

    const band = document.createElement('section');
    band.className = 'v2-proof-band';
    band.innerHTML = `
      <div class="container">
        <div class="v2-proof-grid">
          <div class="v2-proof-card"><b data-i18n="proof1Title"></b><span data-i18n="proof1Text"></span></div>
          <div class="v2-proof-card"><b data-i18n="proof2Title"></b><span data-i18n="proof2Text"></span></div>
          <div class="v2-proof-card"><b data-i18n="proof3Title"></b><span data-i18n="proof3Text"></span></div>
        </div>
      </div>
    `;
    trust.parentNode.insertBefore(band, trust);
  }

  function applyLanguage(lang) {
    localStorage.setItem('pmmi_language', lang);
    document.documentElement.lang = lang;
    const select = document.getElementById('pmmi-language-select');
    if (select) select.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value) el.textContent = value;
    });

    updateLinks();
    document.querySelectorAll('.footer-section:first-child p').forEach(el => {
      if (el.textContent.includes('Expert scientific') || el.textContent.includes('Scientific conference')) {
        el.textContent = t('footerTagline');
      }
    });
  }

  function bindLanguageSelect() {
    const select = document.getElementById('pmmi-language-select');
    if (!select) return;
    select.value = localStorage.getItem('pmmi_language') || 'en';
    select.addEventListener('change', function () {
      applyLanguage(this.value);
    });
  }

  function markHomePage() {
    if (/index\.html$|\/$/.test(window.location.pathname)) document.body.classList.add('home-page');
    document.body.classList.add('pmmi-v2-global');
  }

  function init() {
    markHomePage();
    createGlobalBar();
    addV2Hero();
    addGlobalProof();
    bindLanguageSelect();
    applyLanguage(localStorage.getItem('pmmi_language') || 'en');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
