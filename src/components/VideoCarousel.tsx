import { SyntheticEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoContainerRef = useRef<HTMLSpanElement[]>([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loaded, setLoaded] = useState<SyntheticEvent<HTMLVideoElement, Event>[]>([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(-${videoId * 100}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loaded.length >= hightlightsSlides.length) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loaded]);

  // Progress bar sync with video
  useEffect(() => {
    let raf: number;
    function updateProgress() {
      const vid = videoRef.current[videoId];
      if (vid && vid.duration) {
        setProgress(Math.min((vid.currentTime / (hightlightsSlides[videoId]?.videoDuration || vid.duration)) * 100, 100));
      } else {
        setProgress(0);
      }
      raf = requestAnimationFrame(updateProgress);
    }
    if (isPlaying) {
      raf = requestAnimationFrame(updateProgress);
    } else {
      setProgress(0);
    }
    return () => cancelAnimationFrame(raf);
  }, [videoId, isPlaying, startPlay]);

  const handleLoaded = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    setLoaded((prev) => [...prev, event]);
  };

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let animate = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoContainerRef.current[videoId], {
              width: window.innerWidth < 768 ? "10vw" : window.innerWidth < 1200 ? "10vw" : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoContainerRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        animate.restart();
      }
      const animationUpdate = () => {
        if (videoRef.current[videoId]) {
          animate.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration);
        }
      };
      if (isPlaying) {
        gsap.ticker.add(animationUpdate);
      } else {
        gsap.ticker.remove(animationUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProcess = (type: string, index = 0) => {
    switch (type) {
      case "video-end":
        if (index + 1 < hightlightsSlides.length) {
          setVideo((prev) => ({ ...prev, isEnd: true, videoId: index + 1 }));
        } else {
          setVideo((prev) => ({ ...prev, isEnd: true, videoId: 0 })); // loop back to first
        }
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="flex-center size-full overflow-hidden rounded-3xl bg-black">
                <video
                  id="video"
                  //className={`${slide.id === 2 && "pointer-events-none translate-x-44"}`}
                  className={`${slide.id === 2 && "pointer-events-none"}`}
                  playsInline={true}
                  preload="auto"
                  muted
                  disablePictureInPicture
                  ref={(el) => (videoRef.current[index] = el!)}
                  onPlay={() => {
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }));
                  }}
                  onEnded={() => (index !== hightlightsSlides.length - 1 ? handleProcess("video-end", index) : handleProcess("video-last", index))}
                  onLoadedMetadata={(event) => handleLoaded(event)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute left-[5%] top-12 z-10">
                {slide.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center relative mt-10">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-3 mb-3">
            {hightlightsSlides.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block h-3 w-3 rounded-full cursor-pointer transition-all duration-200 ${videoId === idx ? "bg-white scale-110 shadow" : "bg-gray-500"}`}
                onClick={() => {
                  setVideo((prev) => ({ ...prev, videoId: idx, isEnd: false, isPlaying: true, startPlay: true }));
                  setProgress(0);
                }}
              />
            ))}
          </div>
          <div className="w-40 h-2 bg-gray-700 rounded-full shadow-inner relative overflow-hidden">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${progress}%`,
                transition: progress === 0 ? 'none' : 'width 0.2s linear'
              }}
            />
          </div>
        </div>
        <button
          className="control-btn"
          onClick={
            isLastVideo
              ? () => handleProcess("video-reset")
              : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
          }
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
          />
        </button>
      </div>
    </>
  );
};
export default VideoCarousel;
