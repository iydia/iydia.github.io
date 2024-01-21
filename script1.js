import { Application } from '@splinetool/runtime';

/*SPLINE STUFF*/
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/sIxe4ay-qVHa-qQM/scene.splinecode');

/*
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction)); */

const headLine = new SplitType('h1');
const myText2 = new SplitType('p', {charClass: 'char2'});
var tl = gsap.timeline({defaults:{ease: "Expo.easeInOut"}});

tl.from('.char', {
    y: -100,
    stagger: 0.05,
    delay: 1
})
.from('.char2', {
    y: -100,
    stagger: 0.05,
    duration: 0.6
}, "-=1.2")
.to('h1,p', {
    y: 130,
    delay: 0.4,
    duration: 1.4
});