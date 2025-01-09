const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




var tl = gsap.timeline()

tl.from(".loader h2",{
  x:40,
  opacity:0,
  stagger:0.3,
  duration:1,
})
tl.to(".loader",{
  opacity:0,
  duration:1,
})

gsap.to("",{
  repeat:-1,
  duration:2,
  delay:4,
  height:150
})
