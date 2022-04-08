/*
let tl = new TimelineMax({ delay: 3, repeat: -1 });
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
/*
tl.fromTo(".img1", { x: 0, delay: 5 }, { x: 0 }, "100%");
tl.fromTo(".img1", { x: 0 }, { x: -160 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -160 }, "100%");
tl.fromTo(".img2", { x: -300 }, { x: -160, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -160 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -160 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -320, delay: 6 }, "100%");
*/

let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".imgContainer", { x: 0 }, { x: 0, duration: 2 });
tl.fromTo(".imgContainer", { x: 0 }, { x: -160, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -160 }, { x: -320, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -320 }, { x: -480, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -480 }, { x: -640, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -640 }, { x: -800, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -800 }, { x: -960, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -960 }, { x: -1120, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -1120 }, { x: -1280, duration: 2, delay: 2 });
