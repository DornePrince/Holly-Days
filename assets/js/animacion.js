gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({

    scrollTrigger:{
        trigger: '.lottie',
        start: 'top top',
        end: '+= 800 0',
        scrub: 1,

    }
});

timeline.to ('.lottie', {
    x: '-800',
    duration: 3
});