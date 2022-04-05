TweenMax.to($(".circle"), 1, {
  x: 100,
  y: 100,
  backgroundColor: "black",
});

TweenMax.to($(".square"), 2, {
  x: -200,
  y: -200,
  scale: 2,
  delay: 1,
  ease: Back.easeOut,
});

TweenMax.from($("#rectangle"), 1, {
  y: 200,
  rotate: -360,
  scale: 2,
});

TweenMax.to($("li"), 1, {
  x: 25,
});

TweenMax.to($("li:first-child"), 1, {
  x: 50,
});

TweenMax.to($("li:last-child"), 1, {
  x: -50,
});

TweenMax.to($("li:nth-child(2)"), 1, {
  x: 75,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: 100,
});
