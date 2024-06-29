import * as Three from "three";

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.RefObject<Three.Group>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: gsap.TweenVars,
) => {
  timeline.to(rotationRef.current?.rotation ?? {}, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<",
  );
};
