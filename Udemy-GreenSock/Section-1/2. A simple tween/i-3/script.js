TweenMax.to(".circle", 1, {
  backgroundColor: "Gold",
  x: 100,
  y: 100,
});

TweenMax.to(".square", 2, {
  x: -150,
  y: -150,
  backgroundColor: "blue",
  ease: Back.easeOut,
  delay: 1,
});

TweenMax.from("#rectangle", 2, {
  y: 200,
  rotate: 360,
  scale: 2,
});
