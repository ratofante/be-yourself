import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function scrollPortrait() {
   gsap.to(".portrait:last-child", {
      scrollTrigger: {
         trigger: ".portrait:last-child",
         start: "100px 80%",
         end: "bottom 100px",
         markers: true
      },
      x: -100,
      width: 495,
      duration: 3
   });
}
