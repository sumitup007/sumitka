const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

//fix nav
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', ()=> {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight>navHeight){
    navBar.classList.add("fix-nav");
  }else{
    navBar.classList.remove("fix-nav");
  }
})

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

//typeIt
new TypeIt('#type1',{
  speed:140,
  loop:true,
  waitUntilVisible:true
}).type('Web Designer', {delay:400})
.pause(500).delete(8)
.type('Developer', {delay:400})
.pause(500).delete(9)
.type('Engineer', {delay:400})
.go();

new TypeIt('#type2',{
  speed:140,
  loop:true,
  waitUntilVisible:true
}).type('Designer', {delay:400})
.pause(500).delete(8)
.type('Developer', {delay:400})
.pause(500).delete(9)
.type('Web Engineer', {delay:400})
.go();

//GSAP
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});