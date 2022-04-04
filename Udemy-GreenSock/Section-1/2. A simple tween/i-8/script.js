TweenMax.to(".circle", 1, {
  x: 150,
  y: 150,
  backgroundColor: "green",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  delay: 1,
  scale: 2,
  ease: Back.easeOut,
  backgroundColor: "black",
});

TweenMax.from("#rectangle", 2, {
  y: 200,
  rotate: 160,
  scale: 2,
});
