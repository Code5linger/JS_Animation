const tl = gsap
  .timeline({
    defaults: { duration: 0.5, repeat: -1 },
  })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "A" })
  .to("#divtest", { opacity: 1, duration: 2 }) /*, "+=2"*/
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "B" })
  .to("#divtest", { opacity: 1, duration: 3 }) /*, "+=2"*/
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "C" })
  .to("#divtest", { opacity: 1, duration: 4 }); /*, "+=2"*/

document.querySelector("load").addEventListener("load", doFade);
