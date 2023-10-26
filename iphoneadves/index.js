const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scrollmagic
const controller = new ScrollMagic.Controller();

//scenes
const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro, 
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollpos;
    console.log(e)
})