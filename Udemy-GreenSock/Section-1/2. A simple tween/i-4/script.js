TweenMax.to($(".circle"), 1, {
  x: 100,
  y: 100,
  backgroundColor: "silver",
});

TweenMax.to($(".square"), 2, {
  x: -200,
  y: -200,
  backgroundColor: "red",
  scale: 2,
  delay: 1,
  //ease: Back.easeOut,
  ease: Elastic.easeOut,
});

TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotate: 720,
  scale: 3,
});

TweenMax.to($("li:first-child"), 1, {
  x: 100,
});

TweenMax.to($("li:last-child"), 1, {
  X: -100,
});

TweenMax.to($("li:nth-child(2)"), 1, {
  x: 50,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: -50,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: 50,
});
