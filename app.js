var myCanvas = document.createElement('canvas');
myCanvas.classList.add('confetti');
document.body.appendChild(myCanvas);


let colors = ['#ff2f00', '#f2ff00', '#11ff00', '#4791ff', '#b338ff', '#ff2b80'];
let end = Date.now();
let isConfettiRunning = false;
function runConfetti() {
    end = Date.now() + (1 * 1000);
    frame();
}
function frame() {
  confetti({
    particleCount: 6,
    angle: 60,
    spread: 95,
    origin: { x: 0, y: 0.8},
    colors: colors
  });
  confetti({
    particleCount: 6,
    angle: 120,
    spread: 95,
    origin: { x: 1, y: 0.8 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}

let confettiItems = Array.prototype.slice.call( document.getElementsByClassName('confetti-items') );
for (let i = 0; i < confettiItems.length; i++) {
  confettiItems[i].onmouseenter = async function(){
    if (!isConfettiRunning) {
      isConfettiRunning = true;
      runConfetti();
      await new Promise(r => setTimeout(r, 2000));
      isConfettiRunning = false;
    }
  };
}
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
/*
tl.to('.text-hide', {y: "0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-150%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-150%", duration:1}, "-=1");*/
tl.fromTo('nav', {opacity:0}, {opacity:1, duration: 1});
tl.fromTo('.hello-im-parth', {opacity:0}, {opacity:1, duration: 1}, "-=0.8");
const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
    //Toggle nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');
  });



}

navSlide();



const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
   appearOnScroll
 ){
   entries.forEach(entry => {
     if (!entry.isIntersecting) {
       entry.target.classList.remove('appear');
       return;
     }else {
       entry.target.classList.add('appear');
       //appearOnScroll.unobserve(entry.target);
     }
   });

 },
  appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


const cookieContainer = document.querySelector(".cookies");
const cookieButton = document.querySelector(".button01");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 1000);
