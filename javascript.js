import { gsap } from "\gsap";
import { ScrollTrigger } from "\gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".footer", {
  duration: 3,
  rotation: 360,
  scale: 2,
  scrollTrigger: {
    trigger: ".footer",
    markers: true,
    scrub: true,
  },
});
