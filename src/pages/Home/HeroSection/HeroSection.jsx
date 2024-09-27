import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import heroImg_01 from "../../../assets/Images/HeroSection/hero_01.jpg";
import heroImg_02 from "../../../assets/Images/HeroSection/hero_02.jpg";
import heroImg_03 from "../../../assets/Images/HeroSection/hero_03.jpg";

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const heroSectionData = [
    {
      id: 1,
      title: "Explore the Wilderness",
      img: heroImg_01,
      description:
        "Discover untouched landscapes and natural wonders that will take your breath away.",
    },
    {
      id: 2,
      title: "Adventure Awaits",
      img: heroImg_02,
      description:
        "Step into a world of adventure with thrilling activities for the brave.",
    },
    {
      id: 3,
      title: "Serenity in Nature",
      img: heroImg_03,
      description:
        "Experience tranquility like never before amidst pristine nature.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroSectionData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[70vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})`, backgroundRepeat: "no-repeat" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="z-10 text-center text-white px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6 max-w-lg mx-auto text-base md:text-lg">
                  {slide.description}
                </p>
                <button className="px-4 py-2 md:px-6 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress absolute bottom-6 right-6 flex items-center justify-center">
          <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" ref={progressCircle}>
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-gray-300"
              strokeWidth="4"
              fill="none"
            ></circle>
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-blue-600"
              strokeWidth="4"
              fill="none"
              strokeDasharray="125.6"
              strokeDashoffset="calc(125.6 * var(--progress))"
            ></circle>
          </svg>
          <span ref={progressContent} className="absolute text-white text-xs md:text-sm"></span>
        </div>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
