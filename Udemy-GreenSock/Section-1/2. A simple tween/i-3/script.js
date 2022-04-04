TweenMax.to($(".circle"), 1, {
  backgroundColor: "Gold",
  x: 100,
  y: 100,
});

TweenMax.to($(".square"), 2, {
  x: -150,
  y: -150,
  backgroundColor: "blue",
  ease: Back.easeOut,
  delay: 1,
});

TweenMax.from($("#rectangle"), 2, {
  y: 200,
  rotate: 360,
  scale: 2,
});
/*
TweenMax.to($("li:first-child"), 2, {
  x: 100,
});
*/
TweenMax.to($("li:last-child"), 1, {
  x: -100,
});

TweenMax.to($("li:nth-child(3)"), 1, {
  x: -20,
});

TweenMax.to($("li:nth-child(odd)"), 1, {
  x: -50,
});

TweenMax.to($("li:nth-child(even)"), 1, {
  x: 50,
});
