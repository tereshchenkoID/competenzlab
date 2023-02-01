const menu = () => {
  const { body } = document;
  const toggle = document.querySelector('.toggle');
  const aside = document.querySelector('.aside');
  const nav = document.querySelector('.nav');
  const mediaQueryList = window.matchMedia('(max-width: 1024px)')

  const closeMenu = () => {
    toggle.classList.remove('active');
    aside.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('overflow');
  };

  const openMenu = () => {
    toggle.classList.add('active');
    aside.classList.add('active');
    nav.classList.add('active');
    body.classList.add('overflow');
  };

  toggle.addEventListener('click', () => {
    const isMobileNavOpened = aside.classList.contains('active');

    if(isMobileNavOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mediaQueryList.addEventListener('change', () => {
    closeMenu();
  })
};

export default menu;
