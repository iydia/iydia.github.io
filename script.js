const headLine = new SplitType('h1');
const myText2 = new SplitType('p', {charClass: 'char2'});
var tl = gsap.timeline({defaults:{ease: "Expo.easeInOut"}});

tl.from('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0,
})
.from('.char2', {
    y: -10,
    stagger: 0.05,
    duration: 1
}, "-=1.2")
.to('h1,p', {
    y: 80,
    delay: 0.4,
    duration: 1.4
});

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/sIxe4ay-qVHa-qQM/scene.splinecode');