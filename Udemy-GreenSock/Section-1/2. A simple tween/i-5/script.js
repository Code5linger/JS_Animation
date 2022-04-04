TweenMax.to(".circle", 1, {
  x: 200,
  y: 200,
  backgroundColor: "silver",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  scale: 2,
  delay: 0.5,
  ease: Back.easeOut,
  ease: Elastic.easeOut,
});
