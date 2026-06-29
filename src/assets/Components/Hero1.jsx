import React, { useState, useEffect } from 'react';
import heroImage1 from "../Images/lady1.png";
import heroImage2 from "../Images/bags.png";
import heroImage3 from "../Images/lady.png";
import heroImage4 from "../Images/checkered.png";

const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
 <section className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle,_#fafafa_0%,_#e5e5e5_40%,_#b3b3b3_80%)]">
      

      {/* TOP NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-14 py-8 z-50">

        {/* LOGO */}
        <h1 className="text-[28px] font-extrabold tracking-tight text-white">
          W.CONCEPT
        </h1>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">

          <i className="bx bxl-pinterest-alt text-xl cursor-pointer text-white"></i>
          <i className="bx bxl-twitter text-xl cursor-pointer text-white"></i>
          <i className="bx bxl-facebook text-xl cursor-pointer text-white"></i>

          {/* MENU */}
          {/* <button className="bg-black text-white w-10 h-10 flex items-center justify-center text-xl">
            =
          </button> */}

        </div>
      </nav>

      {/* BACKGROUND HUGE TEXT */}
      <h1 className="absolute top-10 left-6 text-[190px] font-black uppercase text-gray-500 opacity-40 tracking-tight z-0 whitespace-nowrap">
        FOR MEN
      </h1>

      {/* CENTER IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="fashion"
            className={`h-[95%] object-contain absolute transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* MAIN TEXT */}
      <div className="absolute left-10 top-[36%] z-30">

        <h1 className="text-[110px] font-black uppercase leading-[0.9] tracking-[-4px] text-white">
          Addicted
        </h1>

        <h1 className="text-[110px] font-black uppercase leading-[0.9] tracking-[-4px] ml-40 text-white">
          To
        </h1>

        <h1 className="text-[110px] font-black uppercase leading-[0.9] tracking-[-4px] ml-16 text-white">
          Fashion
        </h1>

      </div>

      {/* SHOP NOW BUTTON */}
      {/* <button className="absolute left-8 top-[58%] border cursor-pointer border-white px-12 py-3 uppercase tracking-[3px] z-40 text-white hover:bg-white hover:text-black transition-all duration-300">
        Shop now
      </button> */}

      {/* RIGHT INDICATOR */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-40">

        <p className="font-semibold tracking-wider mb-6 text-white">
          {String(currentSlide + 1).padStart(2, '0')}/03
        </p>

        <div className="space-y-4">
          {Array.from({length: 3}, (_, i) => (
            <div key={i} className={`w-10 h-[2px] ${i === currentSlide ? 'bg-black' : 'bg-gray-400'}`}></div>
          ))}
        </div>

      </div>

      {/* YEAR */}
      <div className="absolute right-24 bottom-28 flex items-center gap-3 z-40">

        <div className="w-3 h-3 bg-black rounded-full"></div>

        <p className="font-bold tracking-wide text-white">
          2020
        </p>

      </div>

      {/* SCROLL TEXT */}
      <div className="absolute left-0 bottom-20 rotate-[-90deg] z-40">

        <p className="uppercase tracking-[6px] text-sm font-medium text-white">
          Scroll
        </p>

      </div>

    </section>
  );
};

export default Hero1;