//Burger Menu Button (Hover)
$(".burgerIcon").hover(
  function () {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: -10 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 10 });
  },
  function () {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: 0 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 0 });
  }
);

//Burger Menu Button (Click)
let tlMenu = new TimelineMax({ paused: true });

tlMenu
  .to("nav", 0.3, { autoAlpha: 1 }) //Did not know that!
  .staggerFromTo(
    "nav li",
    0.5,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 },
    0.1
  );

$(".burgerIcon").click(function () {
  tlMenu.play(0);
});

$(".closeButton").click(function () {
  tlMenu.reverse(0.7);
});

//Hero Section

TweenMax.fromTo(
  "#hero h1",
  0.5,
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  }
);
