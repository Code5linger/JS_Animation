let tl = new TimelineMax({ delay: 3, repeat: -1 });

tl.fromTo(".img1", { x: 0, delay: 5 }, { x: 0 }, "100%");
tl.fromTo(".img1", { x: 0 }, { x: -468 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -936 }, "100%");
tl.fromTo(".img2", { x: -468 }, { x: -468, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -468 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -468 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -936, delay: 6 }, "100%");
