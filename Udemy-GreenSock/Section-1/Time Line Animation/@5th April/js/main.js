/*
TweenMax.to($(".circle"), 1, {
  x: 100,
});

TweenMax.to($(".square"), 1, {
  x: 100,
});

TweenMax.to($(".rectangle"), 1, {
  x: 100,
});
*/

let tl = new TimelineMax();

tl.to(".circle", 1, {
  x: 100,
  ease: Back.easeIn,
})
  .to(".square", 1, {
    x: 100,
    ease: Back.easeIn,
  })
  .to(".rectangle", 1, {
    x: 100,
    ease: Back.easeIn,
  });

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
/*
TweenMax.staggerTo(
  ".triangle",
  1,
  {
    x: 200,
    y: 200,
    opacity: 0,
    ease: Back.easeIn,
  },
  0.2
);
*/
