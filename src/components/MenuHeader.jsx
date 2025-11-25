import React from "react";
import { useParallax } from "react-scroll-parallax";

const MenuHeader = () => {
  const { ref } = useParallax({ translateY: [-22, 20] });
  const videoId = '2KztmManLZY'
  const src = `https://www.youtube.com/embed/${videoId}`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1`;
  // <iframe width="1236" height="695" src="https://www.youtube.com/embed/2KztmManLZY" title="camping 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  return (
    <div id="menu" className="h-[40vh] lg:h-[75vh]">
      <iframe
        ref={ref}
        className="bg-[url(/imgs/menu1.webp)] z-[-10] bg-cover 
      bg-center absolute left-0 right-0 w-full h-[65vh] sm:h-[80vh]"
        width="1236"
        height="695"
        src={embedUrl}
        title="camping 2023"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="bg-[#0D0D0D50] flex flex-col h-full w-full items-center justify-center">
        <h2 className="text-white text-center text-7xl mb-4 mx-2">Car</h2>
        <h3 className="text-white text-center text-xl mx-2">
          This is a video of a car sent to me by a tard
        </h3>
      </div>
    </div>
  );
};

export default MenuHeader;
