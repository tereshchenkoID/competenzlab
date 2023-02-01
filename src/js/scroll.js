const scroll = () => {
  const header = document.querySelector('.nav');

  if(header.classList.contains('is-transparent')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 0) {
        header.classList.add('is-transparent');
      } else {
        header.classList.remove('is-transparent');
      }
    })
  }
}

export default scroll
