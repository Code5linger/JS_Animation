/*
TweenMax.to(".circle", 2, {
  x: 150,
});
*/
TweenMax.to($(".circle"), 1, {
  backgroundColor: "Red",
  x: 100,
  y: 100,
});

TweenMax.to($(".square"), 2, {
  x: -150,
  y: -150,
  scale: 2,
  delay: 1,
  ease: Back.easeOut,
  //ease: Elastic.easeOut,
});
/*
TweenMax.from("#rectangle", 2, {
  y: 200,
  rotation: 180,
  scale: 1.5,
});
*/
TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotation: -360,
  scale: 2,
});

TweenMax.to($("li:first-child"), 1, {
  x: 100,
});

TweenMax.to($("li:last-child"), 1, {
  x: -100,
});

TweenMax.to($("li:nth-child(3)"), 1, {
  x: 50,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  y: 100,
});
