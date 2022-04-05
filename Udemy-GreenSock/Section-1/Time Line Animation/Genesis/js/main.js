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
/*
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
*/
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
/*
let tl = new TimelineMax();

tl.staggerFrom(".shape", 0.5, { x: 50, y: 50, opacity: 0 }, 0.2);

$(".playButton").click(function () {
  tl.play();
});

$(".pauseButton").click(function () {
  tl.pause();
});

$(".resumeButton").click(function () {
  tl.resume();
});

$(".reverseButton").click(function () {
  tl.reverse();
});

$(".slowButton").click(function () {
  tl.timeScale(0.5);
});

$(".fastButton").click(function () {
  tl.timeScale(5);
});

$(".seekButton").click(function () {
  tl.seek(1.5);
});

$(".progressButton").click(function () {
  tl.progress(0.7);
});
*/

TweenMax.fromTo(".circle", 1, { x: -100, scale: 0 }, { x: 100, scale: 1.5 });

TweenMax.staggerFromTo(".triangle", 1,{ y: 100, x: 100 },
  { y: -50, x: -50 },
  0.2
);
