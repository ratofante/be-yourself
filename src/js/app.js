import '../scss/app.scss';
import initTimeline from './gsap/Timeline';
import Marquesina from './components/Marquesina';

//import scrollPortrait from './gsap/scrolling';

//import Portraits from './components/Portraits';

initTimeline();
const marquesina = new Marquesina();
marquesina.init();


// setTimeout(() => {
//    marquesina.destroy();
// }, 2000);

//scrollPortrait();
