import { useParallax } from 'react-scroll-parallax';

const Header = () => {

  const { ref } = useParallax({ translateY: [-22, 20] });

  return (    
      <div className='h-screen' >
        <div ref={ref} className='bg-[url(/imgs/bmw.jpeg)] blur-[2px] md:bg-[url(/imgs/main1-desktop.webp)] lg:bg-[url(/imgs/main1-desktop.webp)] xl:bg-[url(/imgs/main1-desktop.webp)] z-[-10] bg-cover 
          bg-center absolute left-0 right-0 w-full h-[110vh]' />
        <div className='bg-[#0D0D0D99] md:bg-[#0D0D0D38] h-full w-full text-white z-0 relative flex flex-col justify-center overflow-hidden'>
          {/* <h1 className='text-center text-6xl pb-4 px-6 md:px-10' >Auto Obsessions Customs</h1> */}
          <img className='w-4/5 sm:w-3/5 max-w-[600px] select-none m-auto' src='/imgs/header-text.png' />
          {/* <p className='text-center text-xl' >Victoria's premium autobody shop</p> */}
        </div>
      </div>
  )
}

export default Header