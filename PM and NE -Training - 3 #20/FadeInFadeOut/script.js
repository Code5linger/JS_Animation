const tl = gsap
  .timeline({
    defaults: { duration: 0.5, repeat: -1 },
  })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Too many QNS results?" })
  .to("#divtest", { opacity: 1, duration: 2 }) /*, "+=2"*/
  .to("#divtest", { opacity: 0 })
  .set("#divtest", {
    innerText: "Maximize the detection of actionable biomarkers",
  })
  .to("#divtest", { opacity: 1, duration: 3 }) /*, "+=2"*/
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Precision medicine always advancing" })
  .to("#divtest", { opacity: 1, duration: 4 }); /*, "+=2"*/

document.querySelector("load").addEventListener("load", doFade);
