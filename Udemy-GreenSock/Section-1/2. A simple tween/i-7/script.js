TweenMax.to(".circle", 1, {
  x: 200,
  y: 200,
  backgroundColor: "blue",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  scale: 2,
  delay: 1,
  ease: Back.easeInOut,
  backgroundColor: "red",
});
