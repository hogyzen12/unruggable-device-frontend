import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {


  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return null;
};
export default HowItWorks;
