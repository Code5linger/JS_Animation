let tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

tl.fromTo(".cta1", { x: 110, opacity: 0 }, { x: 0, opacity: 1 });
