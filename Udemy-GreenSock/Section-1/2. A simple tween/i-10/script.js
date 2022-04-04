TweenMax.to(".circle", 1, {
  x: 150,
  y: 150,
  backgroundColor: "green",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  backgroundColor: "silver",
  delay: 1,
  ease: Back.easeOut,
});
