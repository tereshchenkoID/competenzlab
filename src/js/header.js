import { gsap } from 'gsap';

const header = () => {
  const tl = gsap.timeline()
  const block = document.querySelector('.header')
  const decor = block.querySelector('.decor');
  const title = block.querySelector('.title');
  const text = block.querySelector('.text');
  const button = block.querySelector('.button');
  const socials = block.querySelector('.social');

  tl
    .from(decor,{x: -24, rotateZ: 4, duration: 3}, 'key')
    .from(title,{opacity: 0, y: -24, duration: 0.3}, 'key+=0.4')
    .from(text,{opacity: 0, y: -24, duration: 0.3}, 'key+=0.6')
    .from(button, {opacity: 0, y: -24, duration: 0.3}, 'key+=0.8')
    .from(socials,{opacity: 0, x: 24, duration: 0.3}, 'key+=1')
}

export default header
