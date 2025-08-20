import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo);

  const handleVideoSrc = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2, duration: 1.1 });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          Unruggable T1 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video autoPlay muted playsInline={true} disablePictureInPicture loop key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-center w-full max-w-4xl">
          <div className="flex flex-col items-center lg:items-end lg:text-right flex-1">
            <a href="#highlights" className="btn mb-3">
              Buy
            </a>
            <p className="text-lg font-normal text-center lg:text-right">From $42, shipping Q3 2025.</p>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:text-left flex-1">
            <a href="#" className="btn mb-3">
              Download App
            </a>
            <p className="text-lg font-normal text-center lg:text-left">iOS, Android, macOS, Windows and Linux</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;