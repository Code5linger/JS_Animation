const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power3.easeOut" },
});

tl.fromTo(
  ".container",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
  }
);
tl.fromTo(".img1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".img2", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(
  ".container",
  { y: "100%", opacity: 0.5 },
  { y: 0, opacity: 1 },
  "<20%"
);
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
