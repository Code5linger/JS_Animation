/*
let tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 });
*/
/*
let tl = new TimelineMax();

tl.to(".cta1", 0.01, { opacity: 1 }, 1)
  .to(".cta1", 0.01, { opacity: 0 })
  .to(".cta2", 0.01, { opacity: 0 }, 2)
  .to(".cta2", 0.01, { opacity: 0 })
  .to(".cta3", 0.01, { opacity: 0 }, 3)
  .to(".cta3", 0.01, { opacity: 0 }, 4);
*/
/*  .to(".cta3", 1, { x: 100 }, "-=0.2"); */
/*
TweenMax.fromTo(".cta1", 1, { opacity: 1 }, { y: -100, opacity: 0, delay: 5 });
TweenMax.fromTo(
  ".cta2",
  1,
  { x: 0, opacity: 1 },
  { x: 0, opacity: 0, delay: 5 }
);
*/
/*
TweenMax.fromTo(".cta1", 1, { y: 0, opacity: 0 }, { y: 0, opacity: 1 });
TweenMax.fromTo(".cta1", 1, { y: 0, opacity: 1 }, { y: 0, opacity: 0 }, "+=2");
*/
/*
TweenMax.fromTo(".cta2", 1, { y: 0, opacity: 0 }, { y: 0, opacity: 1 });
TweenMax.fromTo(".cta2", 1, { y: 0, opacity: 1 }, { y: 0, opacity: 0 }, "+=2");
*/

/*Not My Code */

var container = document.querySelector("#imgContainer"),
  height = container.offsetHeight,
  imgs = gsap.utils.toArray(".motiv"),
  noImgs = imgs.length,
  fade = document.querySelector(".fade"),
  fadedur = 0.5,
  fadePause = 0.5,
  next = 3; // time to change

function crossfade() {
  var action = gsap
    .timeline()
    .to(fade, { autoAlpha: 1, duration: fadedur })
    .set(imgs, { y: "-=" + height })
    .set(imgs[0], { y: "+=" + height * noImgs }) // the first to the end
    .to(fade, { autoAlpha: 0, duration: fadedur }, "+=" + fadePause);

  imgs.push(imgs.shift()); // the first (shift) to the end (push) from the array

  // start endless run
  gsap.delayedCall(next, crossfade);
}

// start the crossfade after next = 3 sec
gsap.delayedCall(next, crossfade);
