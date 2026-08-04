(() => {
  const root = document.documentElement;
  const langButton = document.querySelector('.lang-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const saved = localStorage.getItem('preferred-language');
  const initial = saved || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

  function setLanguage(lang) {
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '宋佳楠 | 个人学术主页' : 'Jianan Song | Academic Homepage';
    localStorage.setItem('preferred-language', lang);
  }

  setLanguage(initial);
  langButton.addEventListener('click', () => setLanguage(root.dataset.lang === 'zh' ? 'en' : 'zh'));

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
