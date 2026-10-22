const state = {
  language: 'zh',
};

const languageSelect = document.querySelector('#language-select');
const translatableNodes = document.querySelectorAll('[data-zh][data-en]');

function applyLanguage() {
  const textKey = state.language === 'zh' ? 'zh' : 'en';

  translatableNodes.forEach((node) => {
    node.textContent = node.dataset[textKey];
  });

  if (languageSelect) {
    languageSelect.value = state.language;
    languageSelect.setAttribute(
      'aria-label',
      state.language === 'zh' ? '选择语言' : 'Select language',
    );
  }

  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';
}

function setupLanguageSwitch() {
  if (!languageSelect) return;

  languageSelect.addEventListener('change', (event) => {
    state.language = event.target.value;
    applyLanguage();
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
