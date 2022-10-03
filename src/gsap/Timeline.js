import { gsap } from 'gsap';
import { SplitText } from './SplitText';

let split = new SplitText('#anybody', { type: 'chars' });
let anyChars = split.chars;
console.log(anyChars);

export default function initTimeline() {
   let tl = gsap.timeline();

   tl.to('.flash', { duration: 5, x: 100, ease: "back.out(1.7)" })
   tl.from('.h1-fragment-1', { duration: 1.4, x: 50, opacity: 0 }, "<");
   tl.from('.h1-fragment-2', { duration: 2, x: 50, opacity: 0 }, "<.5");
   tl.from('.h1-fragment-3', { duration: .5, visibility: 'hidden' }, "<");
   tl.from(anyChars, { duration: .2, opacity: 0, stagger: .2 }, "<");
   tl.from('.h1-fragment-4', { duration: .5, visibility: 'hidden' }, "<2");
   tl.from('.h1-fragment-5', { duration: 1, opacity: 0, filter: 'blur(4px)' }, "<1");
   tl.to('flash__portrait', {
      duration: 0, onUpdate: () => {
         document.querySelector('.flash__portrait').classList.toggle('flash-animation');
      }
   }, "<");
   tl.to('.flash', { duration: 1, filter: 'opacity(100%)' }, "<");
   tl.from('.logo-face, .nav-link', { duration: 1, x: 10, opacity: 0 });
   tl.from('.bar', { duration: 1, filter: 'blur(10px)', stagger: .2, opacity: 0, y: -5 }, "<");
   tl.to('.flash', { duration: 0, visibility: 'hidden' }, "<");
   tl.from('.hero-left', { duration: 1, opacity: 0, x: -100, filter: 'blur(10px)' }, "<");
   tl.from('.portrait', { duration: 1, y: -50, opacity: 0, stagger: .1 }, "<.2");
}