const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scrollmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro, 
    triggerHook: 0
})
.addIndicators()
.addTo(controller);