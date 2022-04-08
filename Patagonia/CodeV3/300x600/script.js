let tl = new TimelineMax({});

tl.fromTo(".img1", { x: 0 }, { x: 0, duration: 2 });
tl.fromTo(".img1", { x: 0 }, { x: -300, duration: 1 }, "-150%");
tl.fromTo(".img2", { x: 0 }, { x: -300, duration: 1 }, "-150%");

//tl.fromTo(".img2", { x: -300 }, { x: -600, duration: 2 }, "-50%");
//tl.fromTo(".img3", { x: -300 }, { x: -600, duration: 2 }, "-50%");

/*
let tl = new TimelineMax({ repeat: -1, duration: 2 });

tl.to(".img1", 1, { x: -300 }).to(".img2", 1, { x: -300 }, "50%");
*/
/*
let tl = new TimelineMax({ repeat: -1 });

//tl.fromTo(".img1", 1, { x: 0 }, { x: 0, delay: 2 });
tl.fromTo(".img1", 2, { x: 0, duration: 2 }, { x: -300 }, "-50%");
tl.fromTo(".img2", 1, { x: 0 }, { x: -300, delay: 4 }, "-50%");
tl.fromTo(".img2", { x: -300 }, { x: -600, duration: 2 }, "-50%");
tl.fromTo(".img3", { x: -300 }, { x: -600, duration: 2 }, "-50%");
*/
/*Img 2 &3 are ok */
/*
let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".img2", { x: 0 }, { x: -300, delay: 2 }, "-50%");

tl.fromTo(".img2", { x: -300 }, { x: -600, duration: 2 }, "-50%");
tl.fromTo(".img3", { x: -300 }, { x: -600, duration: 2 }, "-50%");
tl.fromTo(".img1", { x: 0 }, { x: 0, delay: 2 });
tl.fromTo(".img1", { x: 0 }, { x: -300 }, "-50%");
/*

tl.fromTo(".img2", { x: 0 }, { x: -300 });
tl.fromTo(".img2", { x: -300 }, { x: -300 });
tl.fromTo(".img3", { x: 0 }, { x: -300 });
tl.fromTo(".img3", { x: 0 }, { x: -600 });
*/
