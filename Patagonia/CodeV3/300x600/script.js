let tl = new TimelineMax({ repeat: -1 });

tl.fromTo(".img2", { x: 0 }, { x: -300, delay: 2 }, "-50%");

tl.fromTo(".img2", { x: -300 }, { x: -600, duration: 2 }, "-50%");
tl.fromTo(".img3", { x: -300 }, { x: -600, duration: 2 }, "-50%");
tl.fromTo(".img1", { x: 0 }, { x: 0, delay: 2 });
tl.fromTo(".img1", { x: 0 }, { x: -300 }, "-50%");

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
