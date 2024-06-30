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
            Explore the full story.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">Forged in titanium.</h2>
          </div>
          <div className="flex-center flex-col gap-4 sm:px-10">
            <div className="flx relative h-[50vh] w-full items-center md:h-[60vh]">
              <video
                id="exploreVideo"
                className="size-full rounded-xl object-cover object-center"
                preload="none"
                disablePictureInPicture
                playsInline
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
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
                    iphone 15 Pro is{" "}
                    <span className="text-white">The first iPhone to feature an aerospace-grade titanium body</span>,
                    using the same alloy that spacecrafts use for missions to Mars. The result is a device that’s
                    incredibly strong, yet lightweight, with a unique texture that’s both durable and stunning.
                  </p>
                </div>
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    <span className="text-white">
                      A leap in smartphone engineering with its cutting-edge Liquid Metal design.
                    </span>{" "}
                    Crafted with a revolutionary material, it offers unparalleled durability and a sleek, futuristic
                    aesthetic. Experience the pinnacle of technology, designed for tomorrow's adventures.
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
