
// Floating effect

document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed) / 50
        const y = (window.innerHeight - e.pageY*speed) / 50
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    }

    // Hover effect

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
.pauseFor(2500)
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
// .deleteAll(50)
.start()

// MOTIONS //

const sr = ScrollReveal();


// sr.reveal('.BTeffect', {
//     origin: 'top',
//     distance: '1000px',
//     delay: 2500,
//     duration: 1750,
//     scale: 1,
//     opacity: 0,
//     easing: 'ease',
// });
sr.reveal('.distorsion', {
    origin: 'left',
    distance: '0px',
    delay: 1750,
    duration: 1750,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

sr.reveal('.titles', {
    origin: 'right',
    distance: '50px',
    delay: 750,
    duration: 1000,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

sr.reveal('.mainSection', {
    origin: 'right',
    distance: '50px',
    delay: 1000,
    duration: 1000,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});
sr.reveal('.logos', {
    origin: 'right',
    distance: '50px',
    delay: 1250,
    duration: 1250,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

// // sr.reveal('.p-brand', {
// //     origin: 'top',
// //     distance: '0px',
// //     delay: 1000,
// //     duration: 500,
// //     scale: 1.3,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.sub-text1', {
// //     origin: 'left',
// //     distance: '200px',
// //     delay: 500,
// //     duration: 500,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.sub-text2', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 500,
// //     duration: 500,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.sub-text3', {
// //     origin: 'left',
// //     distance: '200px',
// //     delay: 500,
// //     duration: 500,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });







// // sr.reveal('.wrapper', {
// //     origin: 'left',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 1000,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });

// // sr.reveal('iframe', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 1000,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });

// // // sr.reveal('footer', {
// // //     origin: 'bottom',
// // //     distance: '15px',
// // //     delay: 300,
// // //     duration: 1000,
// // //     scale: 1,
// // //     opacity: 0,
// // //     easing: 'ease',
// // // });

// // sr.reveal('.displaycard1', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.displaycard2', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.displaycard3', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.displaycard4', {
// //     origin: 'right',
// //     distance: '200px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.displaycardinfo', {
// //     origin: 'right',
// //     distance: '100px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
// // sr.reveal('.displaycardinfoimg', {
// //     origin: 'left',
// //     distance: '100px',
// //     delay: 0,
// //     duration: 550,
// //     scale: 1,
// //     opacity: 0,
// //     easing: 'ease',
// // });
