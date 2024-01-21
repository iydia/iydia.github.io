var tl = gsap.timeline({defaults:{ease: "Expo.easeInOut"}});

tl.from('.char', {
    stagger: -0.05
}, "-=1.2")
.from('.char2', {
    stagger: 0.05,
    duration: 0.5
}, "-=1.2")
.to('h1,p', {
    y: 80,
    delay: 0.4,
    duration: 1.4
});

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/sIxe4ay-qVHa-qQM/scene.splinecode');