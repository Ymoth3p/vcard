
new hoverEffect({
    parent: document.querySelector('.distorsion'),
    intensity: 0.2,
    image1: '../img/circle-cropped-side.png',
    image2: '../img/circle-cropped-front.png',
    displacementImage: '../img/diss.png',
    angle1: Math.PI / 16,
    easing: 'Expo.easeOut',
    // speedIn: 1.6,
    // speedOut: 2.5

});

// import Typewriter from 'typewriter-effect/dist/core';

const textAnimation = document.querySelector('span.typeWritter');

new Typewriter(textAnimation, {
    // loop: true
    deleteSpeed: 20,
    delay: 100
})

.typeString('<span style="color:  #B22222">"Hel</span>')
.pauseFor(500)
.typeString('<span style="color:  #B22222">li w</span>')
.pauseFor(500)
.deleteChars(3)
.pauseFor(500)
.typeString('<span style="color:  #B22222">o worlf</span>')
.pauseFor(1100)
.deleteChars(1)
.typeString('<span style="color:  #B22222">d</span>')
.pauseFor(350)
.typeString('<span style="color:  #B22222"> !"</span>')
.pauseFor(10000)
.deleteAll(50)
.start()



