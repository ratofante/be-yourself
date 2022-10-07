import { gsap } from 'gsap';
import { SplitText } from './SplitText';

let split = new SplitText('#anybody', { type: 'chars' });
let anyChars = split.chars;

export default function initTimeline() {
   let tl = gsap.timeline();

   tl.to('.flash', { duration: 5, x: 100, ease: "back.out(1.7)" })
      .from('.h1-fragment-1', { duration: 1.4, x: 50, opacity: 0 }, "<")
      .from('.h1-fragment-2', { duration: 2, x: 50, opacity: 0 }, "<.5")
      .from('.h1-fragment-3', { duration: .5, visibility: 'hidden' }, "<")
      .from(anyChars, { duration: .2, opacity: 0, stagger: .2 }, "<")
      .from('.h1-fragment-4', { duration: .5, visibility: 'hidden' }, "<2")
      .from('.h1-fragment-5', { duration: 1, opacity: 0, filter: 'blur(4px)' }, "<1")
      .to('flash__portrait', {
         duration: 0, onUpdate: () => {
            document.querySelector('.flash__portrait').classList.toggle('flash-animation');
         }
      }, "<")
      .to('.flash', { duration: 1, filter: 'opacity(100%)' }, "<")
      .from('.logo-face, .nav-link', { duration: 1, x: 10, opacity: 0 })
      .from('.bar', { duration: 1, filter: 'blur(10px)', stagger: .2, opacity: 0, y: -5 }, "<")
      .to('.flash', { duration: 0, visibility: 'hidden' }, "<")
      .from('.hero-left', { duration: 1, opacity: 0, x: -100, filter: 'blur(10px)' }, "<")
      .from('.portrait', { duration: 1, y: -50, opacity: 0, stagger: .1 }, "<.2");
}