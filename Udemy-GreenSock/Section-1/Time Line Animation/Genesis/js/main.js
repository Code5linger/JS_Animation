/*
var timeLineAnimation = new TimelineMax();

timeLineAnimation
  .to(".circle", 1, {
    x: 100,
  })

  .to(".square", 1, {
    x: 100,
  })

  .to(".rectangle", 1, {
    x: 100,
  });
*/

let timeLineAnimation = new TimelineMax();

timeLineAnimation
  .to(".circle", 1, {
    x: 100,
  })
  .to(".square", 0.1, {
    x: 100,
  })
  .to(".rectangle", 1, {
    x: 100,
  });
