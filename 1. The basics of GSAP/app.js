const img1 = document.querySelector(".img1");
/*
const index = 1;

gsap.to(`.img${index}`, {
  x: 100,
  y: 100,
  rotation: "45deg",
  backgroundColor: "#fff",
  duration: 1,
});
*/

gsap.from(img1, { y: -300 });
gsap.from(img1, { opacity: 0, duration: 2 });
