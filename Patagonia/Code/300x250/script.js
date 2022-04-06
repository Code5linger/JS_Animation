//TweenMax.set(".imgOne", { x: -100 });
/*
let tl = new TimelineMax({ repeat: -1 });

tl.to(".imgOne", 1, { x: 100 }).to(".imagOne", 1, { x: -100 });
*/
/*
TweenMax.set(".imgOne", {
  x: -100,
});

let tl = new TimelineMax({ repeat: -1 });

tl.to(".imgOne", 2, {
  x: 100,
});
*/
/*
TweenMax.set(".imgOne", {
  x: 0,
});

let tl = new TimelineMax({ repeat: -1, repeatDelay: 0 });

tl.to(".imgOne", 1, {
  x: -600,
})
  .to(".imgTwo", 1, {
    x: -600,
  })
  .to(".imgTwo", 1, {
    x: -1200,
  })
  .to(".imgThree", 1, {
    x: -1800,
  });
*/
/*
TweenMax.staggerTo(".img", 1, { x: -500 }, 1);
*/

/*
TweenMax.to(".one", 5, { x: -500, repeat: -1, ease: Linear.easeNone }),
  TweenMax.to(".two", 5, { x: -500, repeat: -1, ease: Linear.easeNone }),
  TweenMax.to(".three", 5, { x: -500, repeat: -1, ease: Linear.easeNone });
*/
/*
TweenMax.set(".one", { x: -100 });

let tl = new TimelineMax({ repeat: 3, repeatDelay: 2 });

tl.to(".one", 5, { x: -500, repeat: -1, ease: Linear.easeNone }).to(".two", 5, {
  x: -500,
  repeat: -1,
  ease: Linear.easeNone,
});
*/

let tl = new TimelineMax();

tl.staggerFrom(".img", 2, { x: 200, y: 200 }, 2);

$("");

