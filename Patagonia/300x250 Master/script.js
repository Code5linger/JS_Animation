/*
let tl = new TimelineMax({ delay: 5, repeat: -1 });

tl.fromTo(".img1", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: -300 }, { x: -300, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -600, delay: 6 }, "100%");
*/

let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".imgContainer", { x: 0 }, { x: 0, duration: 2 });
tl.fromTo(".imgContainer", { x: 0 }, { x: -300, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -300 }, { x: -600, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -600 }, { x: -900, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -900 }, { x: -1200, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -1200 }, { x: -1500, duration: 2, delay: 2 });
