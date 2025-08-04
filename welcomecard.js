gsap.from(".welcome-card", {
    opacity: 0,
    scale: 0.9,
    y: -100,
    duration: 1.5,
    ease: "bounce"
});

const btn = document.querySelector(".button");

const btnT1 = gsap.timeline({paused: true});

btnT1.to(".button", {scale: 0.95, duration: 0.1})
     .to(".button", {scale:1.1, duration: 0.2, ease: "power1.out"})
    .to(".button", {scale:1 , duration: 0.2, ease: "power1.inout"})
     
btn.addEventListener("mouseenter", () => btnT1.play(0));

gsap.to(".welcome-card", {
    rotate: 45 -45,
    repeat: -1,
    yoyo: true,
    delay: 2.5,
    ease: "power1.inout",
    duration: 2,

})
gsap.from(".circle", {
    opacity: 0,
    scale: 0,
    duration: 1.9,
    delay: 0.5,
    stagger: 0.2
})
gsap.to(".leaf1",{
    rotate: 85 -10,
    repeat: -1,
    yoyo: true,
    ease: "power1.out",
    duration: 1.9,
    delay: 0.9,
    stagger: 0.5,
    opacity: 1,
})
gsap.to(".leaf2",{
    rotate: -10,
    repeat: -1,
    yoyo: true,
    ease: "power1.out",
    duration: 1.9,
    opacity: 1,
    delay: 0.9,
    stagger:0.5,
})





