import { gsap } from 'gsap';

class Marquesina {

   textWidth;

   constructor() {
      this.marquesina = document.querySelector('.marquesina');
   }

   init() {

      this.resize()
      this.setEvents()
      this.animation()
      this.getTextWidth();

   }

   resize() {
      let windowWidth = window.innerWidth;
      document.querySelector('.wrapper').setAttribute('style', `width: ${windowWidth * 1.1}px`);


      //Para marquesina de CSS solamente
      document.querySelector('.wrapper2').setAttribute('style', `width: ${windowWidth * 1.1}px`);
   }

   getTextWidth() {
      console.log(document.querySelector('.marquesina-block').offsetWidth)
      return document.querySelector('.marquesina-block').offsetWidth;
   }

   setEvents() {
      window.addEventListener('resize', this.resize);
   }

   animation() {
      let textos = document.querySelectorAll('.marquesina-block');
      let time = 6;
      let textWidth = this.getTextWidth();

      let tl = gsap.timeline();

      tl.fromTo(textos, { x: 0 }, {
         duration: time, ease: 'none', x: '-100%', repeat: -1
      })

   }

   destroy() {
      window.removeEventListener('resize', this.resize(), true);
   }



}

export default Marquesina;
