import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title flex flex-col">
            AI17 Pro chip.
            <span>A monster win for gaming.</span>
          </h2>
          <p className="hiw-subtitle">
            It's here AI17 Pro chip features the fastest CPU and GPU by far, a next-gen Neural Engine, pro camera
            system, and more.
          </p>
        </div>
        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img src={frameImg} alt="" className="relative z-10 bg-transparent" />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                disablePictureInPicture
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-3 text-center font-semibold text-gray">Honkai: Star Rail</p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center gap-4">
            <p className="hiw-text g_fadeIn">
              A17 Pro chip is the most powerful chip ever in a smartphone. It features the{" "}
              <span className="text-white">fastest CPU and GPU</span> by far, a next-gen Neural Engine, pro camera
              system, and more.
            </p>

            <p className="hiw-text g_fadeIn">
              <span className="text-white">
                Games feel smooth and responsive, with incredibly realistic graphics and lower power consumption
              </span>{" "}
              You'll be able to play games with console-level graphics and an immersive experience.
            </p>
          </div>

          <p className="g_fadeIn flex flex-1 flex-col justify-center">
            <span className="hiw-text">New</span>
            <span className="hiw-bigtext">Pro-class GPU</span>
            <span className="hiw-text">with 6 cores</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
