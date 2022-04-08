/*
let tl = new TimelineMax({ delay: 3, repeat: -1 });

tl.fromTo(".img1", { x: 0, delay: 5 }, { x: 0 }, "100%");
tl.fromTo(".img1", { x: 0 }, { x: -728 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -1456 }, "100%");
tl.fromTo(".img2", { x: -728 }, { x: -728, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -728 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -728 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -1456, delay: 6 }, "100%");
*/
let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".imgContainer", { x: 0 }, { x: 0, duration: 2 });
tl.fromTo(".imgContainer", { x: 0 }, { x: -728, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -728 }, { x: -1456, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -1456 }, { x: -2184, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -2184 }, { x: -2912, duration: 2, delay: 2 });
tl.fromTo(".imgContainer", { x: -2912 }, { x: -3640, duration: 2, delay: 2 });
