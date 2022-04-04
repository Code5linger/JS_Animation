TweenMax.to(".circle", 1, {
  x: 200,
  y: 200,
  backgroundColor: "green",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  backgroundColor: "gray",
  delay: 1,
  ease: Back.easeOut,
});

TweenMax.from("#rectangle", 2, {
  y: 200,
  rotate: 720,
  scale: 2,
});
