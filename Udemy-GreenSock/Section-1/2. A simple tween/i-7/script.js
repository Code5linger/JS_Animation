TweenMax.to($(".circle"), 1, {
  x: 200,
  y: 200,
  backgroundColor: "blue",
});

TweenMax.to($(".square"), 2, {
  x: -200,
  y: -200,
  scale: 2,
  delay: 1,
  ease: Back.easeInOut,
  backgroundColor: "red",
});

TweenMax.from($("#rectangle"), 2, {
  x: 200,
  y: 200,
  rotate: 360,
  scale: 3,
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
  x: -20,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: 50,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: -50,
});
