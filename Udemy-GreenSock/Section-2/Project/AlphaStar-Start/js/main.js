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
    delay: 0.8,
  }
);

//Hero Section - Button
TweenMax.fromTo(
  "#hero .learnMoreButton",
  0.6,
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 1.2,
    ease: Back.easeOut,
  }
);

//Column Section

$(".fourColItem").hover(
  function () {
    TweenMax.to($(this), 0.5, {
      y: -10,
      scale: 1.05,
    });
    TweenMax.to($(this), 0.5, {
      boxShadow: "0 0 20px rgba(0,0,0,0.36)",
    });
  },
  function () {
    TweenMax.to($(this), 0.5, {
      y: 0,
      scale: 1,
    });
    TweenMax.to($(this), 0.5, {
      boxShadow: "0 0 20px rgba(0,0,0,0.06)",
    });
  }
);

//Services Section

TweenMax.set(".serviceBoxInner", { y: 200, opacity: 0 });

$(".serviceBox").hover(
  function () {
    TweenMax.to($(this).find(".serviceBoxInner"), 0.5, {
      y: 0,
      opacity: 1,
      ease: Back.easeOut,
    });
  },
  function () {
    TweenMax.to($(this).find(".serviceBoxInner"), 0.5, {
      y: 200,
      opacity: 0,
    });
  }
);
