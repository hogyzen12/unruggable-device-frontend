import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import VideoCarousel from "./VideoCarousel";

const Hightlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section id="Hightlights" className="common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            The Highlights
          </h1>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Hightlights;
