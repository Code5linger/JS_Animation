const tl = gsap
  .timeline({
    defaults: { duration: 1 },
  })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "B" })
  .to("#divtest", { opacity: 1 }, "+=2")
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "C" })
  .to("#divtest", { opacity: 1 }, "+=2");
function doFade() {
  tl.restart();
}

document.querySelector("load").addEventListener("load", doFade);
