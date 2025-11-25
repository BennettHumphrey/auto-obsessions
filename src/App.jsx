import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import MenuHeader from './components/MenuHeader'
import Images from './components/Images'
import Footer from './components/Footer'
import ContactHeader from './components/ContactHeader'
import Contact from './components/Contact'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {

  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 90) {
      // console.log('handleScroll true')
      return setScrolled(true);
    }
    // console.log('handleScroll false')
    return setScrolled(false)
  }

  return (
      <ParallaxProvider>
        <div
        onTouchMove={() => {
          setTimeout(() => {handleScroll()}, 500);
        }}
        onWheel={() => {
          setTimeout(() => {handleScroll()}, 500)
        }}
        className='white relative overflow-hidden z-0' id='home' >
          <Nav scrolled={scrolled} setScrolled={setScrolled} />
          <Header  />
          <AboutUs  />
          <MenuHeader  />
          {/* <Menu  /> */}
          <Images  />
          <ContactHeader  />
          <Contact  />
          <Footer  />
        </div>
      </ParallaxProvider>
  )
}


export default App
