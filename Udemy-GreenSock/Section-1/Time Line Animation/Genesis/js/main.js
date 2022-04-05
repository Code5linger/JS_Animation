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
/*
TweenMax.set(".oval", {
  x: -100,
});

let tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.to(".oval", 1, {
  x: 100,
});
*/
/*
TweenMax.set(".oval", {
  x: -100,
});

let tl = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });

tl.to(".oval", 1, {
  x: 100,
}).to(".oval", 1, {
  x: -100,
});
*/
/*
let tl = new TimelineMax();

tl.to(".circle", 1, { x: 100 })
  .to(".square", 1, { x: 100 })
  .to(".rectangle", 1, { x: 100 }, 5);

*/
