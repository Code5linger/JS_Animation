TweenMax.to($(".circle"), 1, {
  x: 150,
  y: 150,
  backgroundColor: "green",
});

TweenMax.to($(".square"), 2, {
  x: -200,
  y: -200,
  delay: 1,
  scale: 2,
  ease: Back.easeOut,
  backgroundColor: "black",
});

TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotate: 160,
  scale: 2,
});

TweenMax.to($("li"), 1, {
  x: 10,
});

TweenMax.to($("li:first-child"), 1, {
  x: -20,
});

TweenMax.to($("li:last-child"), 1, {
  x: 30,
});

TweenMax.to($("li:nth-child(2)"), 1, {
  x: 50,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: 100,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: -100,
});
