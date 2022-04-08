/*
let tl = new TimelineMax({ delay: 3, repeat: -1 });

tl.fromTo(".img1", { x: 0, delay: 5 }, { x: 0 }, "100%");
tl.fromTo(".img1", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: -300 }, { x: -300, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -600, delay: 6 }, "100%");
*/
let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".imgContainer", { x: 0 }, { x: 0, duration: 2 });
tl.fromTo(".imgContainer", { x: 0 }, { x: -320, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -320 }, { x: -640, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -640 }, { x: -960, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -960 }, { x: -1280, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -1280 }, { x: -1600, duration: 2, delay: 2 });
