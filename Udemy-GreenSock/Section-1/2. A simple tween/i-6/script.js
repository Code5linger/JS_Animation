TweenMax.to(".circle", 1, {
  x: 200,
  y: 200,
  backgroundColor: "silver",
  ease: Elastic.easeOut,
});

TweenMax.to(".square", 2, {
  x: -200,
  y: -200,
  backgroundColor: "black",
  //ease: Back.easeOut,
  ease: Elastic.easeOut,
});

TweenMax.from("#rectangle", 2, {
  y: 200,
  rotate: 180,
  scale: 2,
  //delay: -0.5,
  ease: Elastic.easeOut,
});
