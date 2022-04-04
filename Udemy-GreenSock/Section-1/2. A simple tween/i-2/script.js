TweenMax.to(".circle", 1, {
  x: 200,
  y: 150,
  backgroundColor: "red",
});

TweenMax.to(".square", 2, {
  x: -150,
  y: -150,
  scale: 2,
  delay: 1,
  ease: Back.easeOut,
});
