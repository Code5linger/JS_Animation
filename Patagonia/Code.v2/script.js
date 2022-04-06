let tl = new TimelineMax({ repeat: -1 });
/*
tl.to(".img1", 1, {
  x: -600,
  delay: 2,
  opacity: 0,
})
  .to(".img2", 1, {
    x: -600,
    delay: -1,
  })
  .to(".img2", 1, {
    x: -1200,
    delay: 2,
  })
  .to(".img3", 1, {
    x: -600,
    delay: -1,
  })
  .to(".img3", 1, {
    x: -1200,
    delay: 0,
  });
/*
  .to(".img3", 1, {
    x: -600,
    delay: -1,
  })
  .to(".img3", 1, {
    x: -1200,
    delay: 1,
  })
  */

tl.fromTo(".img1", { x: 0 }, { x: -250 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -250 }, "100%");
tl.fromTo(".img2", { x: -250 }, { x: -250, delay: 1 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -250 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -250 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -500, delay: 1 }, "100%");
