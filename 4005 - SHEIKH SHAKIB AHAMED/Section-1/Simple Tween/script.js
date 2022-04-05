TweenMax.to($(".circle"), 1, {
  x: 200,
  y: 150,
  backgroundColor: "red",
});

TweenMax.to($(".square"), 2, {
  x: -150,
  y: -150,
  scale: 2,
  delay: 1,
  ease: Back.easeOut,
});

TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotate: 180,
  scale: 2,
});

TweenMax.to($("li:first-child"), 1, {
  x: 100,
});

TweenMax.to($("li:last-child"), 1, {
  x: -100,
});

TweenMax.to($("li:nth-child(2)"), 1, {
  x: 75,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: -150,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: +150,
});
