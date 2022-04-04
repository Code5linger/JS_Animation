TweenMax.to(".circle", 1, {
  x: 100,
  y: 100,
  backgroundColor: "silver",
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  backgroundColor: "red",
  scale: 2,
  delay: 1,
  //ease: Back.easeOut,
  ease: Elastic.easeOut,
});

TweenMax.from("#rectangle", 2, {
  y: 200,
  rotate: 720,
  scale: 3,
});
