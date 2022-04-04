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
let tl = new TimelineMax();

tl.to(".circle", 1, {
  x: 100,
})
  .to(".square", 1, {
    x: 100,
  })
  .to(".rectangle", 1, {
    x: 100,
  });
*/

TweenMax.staggerFrom(
  ".triangle",
  1,
  {
    x: 200,
    y: 200,
    Opacity: 0,
    ease: Back.eseOut,
  },
  0.1
);
