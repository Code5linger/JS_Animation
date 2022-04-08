/*
const tl = gsap
  .timeline({
    defaults: { repeat: -1 },
  })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Too many QNS \n results?" })
  .to("#divtest", { opacity: 1, duration: 2 })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", {
    innerText: "Maximize the \n detection of \n actionable biomarkers",
  })
  .to("#divtest", { opacity: 1, duration: 2 })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Precision medicine \n always advancing" })
  .to("#divtest", { opacity: 1, duration: 2 });

document.querySelector("load").addEventListener("load", doFade);

*/

let tl = new TimelineMax({ repeat: -1, duration: 2 });

tl.fromTo(".cta-btn", { opacity: 0.5 }, { x: 0, opacity: 1 })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Too many QNS \n results?" })
  .to("#divtest", { opacity: 1, duration: 2 })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", {
    innerText: "Maximize the \n detection of \n actionable biomarkers",
  })
  .to("#divtest", { opacity: 1, duration: 2 })
  .to("#divtest", { opacity: 0 })
  .set("#divtest", { innerText: "Precision medicine \n always advancing" })
  .to("#divtest", { opacity: 1, duration: 2, ease: easeOut });

document.querySelector("load").addEventListener("load", doFade);
