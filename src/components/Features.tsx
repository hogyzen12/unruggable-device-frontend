import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      {
        scrub: 5.5,
      },
    );
    animateWithGsap(".g_text", { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 });
  }, []);

  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h2 id="features_title" className="section-heading">
            Become Unruggable.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="flex-center flex-col gap-4 sm:px-10">
            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden rounded-xl">
                  <img src={explore1Img} alt="" className="feature-video g_grow" />
                </div>
                <div className="h-[50vh] flex-1 overflow-hidden rounded-xl">
                  <img src={explore2Img} alt="" className="feature-video g_grow" />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    <span className="text-white">Titanium.</span> So strong. So light. So Pro.
                  </p>
                </div>
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    <span className="text-white">Unruggable is the first hardware wallet designed specifically for Solana.</span> Open source. Transparent. Secure. The only wallet you need for the next era of Solana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
