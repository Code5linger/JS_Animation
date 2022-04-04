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

TweenMax.from("#ractangle", 2, {
  y: 200,
  rotate: 180,
  scale: 2,
});
