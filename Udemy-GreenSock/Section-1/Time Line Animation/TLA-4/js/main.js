/*
TweenMax.to(".circle", 1, {
  x: 100,
});

TweenMax.to(".square", 1, {
  x: 100,
});

TweenMax.to(".rectangle", 1, {
  x: 100,
});
*/
/*
let tlAnimation = new TimelineMax();

tlAnimation
  .to(".circle", 1, {
    x: 100,
  })
  .to(".square", 1, {
    x: 100,
  })
  .to(".rectangle", 1, {
    x: 100,
  });
*/
/*
TweenMax.staggerFrom(
  ".triangle",
  1,
  {
    x: 200,
    y: 200,
    opacity: 0,
    ease: Back.eaeOut,
  },
  0.1
);
*/

TweenMax.staggerFrom(
  ".triangle",
  1,
  {
    x: 200,
    y: 200,
    opacity: 0,
    ease: Back.easeIn,
  },
  0.1
);
