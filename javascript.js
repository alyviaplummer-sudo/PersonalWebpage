document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
});

gsap.to(".mephoto", {
  scrollTrigger: ".mephoto",
  rotation: 360,
  duration: 3,
});

let split = SplitText.create(".headerheader", {
  type: "chars,words, lines",
  wordsClass: "lines, chars",
  smartWrap: true,
});

gsap.from(split.chars, {
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
  yoyo: true,
});
