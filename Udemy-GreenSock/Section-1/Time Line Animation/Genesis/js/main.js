/*
var timeLineAnimation = new TimelineMax();

timeLineAnimation
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
let timeLineAnimation = new TimelineMax();

timeLineAnimation
  .to(".circle", 1, {
    x: 100,
    ease: Circ.easeIn,
  })
  .to(".square", 1, {
    x: 100,
    ease: Expo.easeIn,
  })
  .to(".rectangle", 1, {
    x: 100,
    ease: Sine.easeIn,
  });
*/

TweenMax.staggerFrom(
  ".triangle",
  1,
  {
    x: 200,
    y: 200,
    opacity: 0,
  },
  0.2
);
