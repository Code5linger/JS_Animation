let tl = new TimelineMax({ delay: 3, repeat: -1 });

tl.fromTo(".img1", { x: 0, delay: 5 }, { x: 0 }, "100%");
tl.fromTo(".img1", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img2", { x: -300 }, { x: -300, delay: 5 }, "100%");

tl.fromTo(".img2", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -300 }, "100%");
tl.fromTo(".img3", { x: 0 }, { x: -600, delay: 6 }, "100%");
