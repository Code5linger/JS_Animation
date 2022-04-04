TweenMax.to($(".circle"), 1, {
  x: 200,
  y: 200,
  backgroundColor: "silver",
  ease: Elastic.easeOut,
});

TweenMax.to($(".square"), 2, {
  x: -200,
  y: -200,
  backgroundColor: "black",
  //ease: Back.easeOut,
  ease: Elastic.easeOut,
});

TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotate: 180,
  scale: 2,
  //delay: -0.5,
  ease: Elastic.easeOut,
});

TweenMax.to($("li"), 1, {
  x: 10,
});

TweenMax.to($("li:first-child"), 1, {
  x: -10,
});

TweenMax.to($("li:last-child"), 1, {
  x: 20,
});

TweenMax.to($("li:nth-child(2)"), 1, {
  x: 30,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: 50,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: -50,
});
