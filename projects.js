const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.fromTo('nav', {opacity:0}, {opacity:1, duration: 1.5});
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
