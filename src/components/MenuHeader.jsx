import React from "react";
import { useParallax } from "react-scroll-parallax";

const MenuHeader = () => {
  const { ref } = useParallax({ translateY: [-22, 20] });
  const embedUrl = "/imgs/video.mp4";
  return (
    <div id="menu" className="h-[40vh] lg:h-[75vh]">
      {/* <iframe
        ref={ref}
        className="z-[-10] bg-cover 
          bg-center absolute left-0 right-0 w-full h-[65vh] sm:h-[80vh]"
        width="1300"
        height="695"
        src={embedUrl}
        title="Placeholder"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <video 
        ref={ref}
        src={embedUrl}
        autoPlay
        muted
        loop
        playsInline
        className="bg-white z-[-10] bg-cover 
          bg-center absolute left-0 right-0 w-full h-[65vh] sm:h-[80vh]" 
      />
      <div className="bg-[#0D0D0D50] flex flex-col h-full w-full items-center justify-center">
        <h2 className="text-white text-center text-7xl mb-4 mx-2">Placeholder</h2>
        <h3 className="text-white text-center text-xl mx-2">
          This is just a placeholder video for now by Vecteezy.com
        </h3>
      </div>
    </div>
  );
};

export default MenuHeader;
