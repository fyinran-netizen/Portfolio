const state = {
  language: 'zh',
};

const languageSwitcher = document.querySelector('#language-switcher');
const languageTrigger = document.querySelector('#language-trigger');
const languageMenu = document.querySelector('#language-menu');
const translatableNodes = document.querySelectorAll('[data-zh][data-en]');

function applyLanguage() {
  const textKey = state.language === 'zh' ? 'zh' : 'en';

  translatableNodes.forEach((node) => {
    node.textContent = node.dataset[textKey];
  });

  languageMenu?.querySelectorAll('[data-language]').forEach((option) => {
    option.setAttribute('aria-current', String(option.dataset.language === state.language));
  });

  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';
}

function setupLanguageSwitch() {
  if (!languageSwitcher || !languageTrigger || !languageMenu) return;

  const closeMenu = () => {
    languageMenu.hidden = true;
    languageTrigger.setAttribute('aria-expanded', 'false');
  };

  languageTrigger.addEventListener('click', () => {
    languageMenu.hidden = !languageMenu.hidden;
    languageTrigger.setAttribute('aria-expanded', String(!languageMenu.hidden));
  });

  languageMenu.querySelectorAll('[data-language]').forEach((option) => {
    option.addEventListener('click', () => {
      state.language = option.dataset.language;
      applyLanguage();
      closeMenu();
      languageTrigger.focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!languageSwitcher.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !languageMenu.hidden) {
      closeMenu();
      languageTrigger.focus();
    }
  });

  applyLanguage();
}

function setupAnchorScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

async function copyValue(value) {
  await navigator.clipboard.writeText(value);
}

function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async (event) => {
      const target = event.currentTarget;
      const label = target.querySelector('.copy-label');

      try {
        await copyValue(target.dataset.copy);
        if (label) label.textContent = state.language === 'zh' ? '已复制' : 'Copied';
      } catch {
        if (label) label.textContent = state.language === 'zh' ? '请手动复制' : 'Copy manually';
      }

      window.setTimeout(() => {
        if (label) label.textContent = state.language === 'zh' ? '复制' : 'Copy';
      }, 1200);
    });
  });
}

setupAnchorScrolling();
setupLanguageSwitch();
setupCopyButtons();
