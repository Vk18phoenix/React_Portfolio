import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // 1. Import the new component
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = e => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      mixBlendMode: 'difference',
      backgroundColor: 'white',
    },
    text: {
      height: 80,
      width: 80,
      mixBlendMode: 'difference',
      backgroundColor: 'white',
    },
    link: {
      height: 48,
      width: 48,
      backgroundColor: 'var(--accent-color)',
      mixBlendMode: 'normal',
    }
  }

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const linkEnter = () => setCursorVariant('link');

  return (
    <>
      <div 
        className='cursor'
        style={{
          left: cursorPos.x + 'px',
          top: cursorPos.y + 'px',
          height: variants[cursorVariant].height + 'px',
          width: variants[cursorVariant].width + 'px',
          backgroundColor: variants[cursorVariant].backgroundColor,
          mixBlendMode: variants[cursorVariant].mixBlendMode,
        }}
      />
      <Hero onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <main>
        <About onMouseEnter={textEnter} onMouseLeave={textLeave} />
        <Skills />
        <Experience /> {/* 2. Add the component here */}
        <Projects onLinkEnter={linkEnter} onLinkLeave={textLeave} />
        <Certifications />
        <Contact onMouseEnter={textEnter} onMouseLeave={textLeave} onLinkEnter={linkEnter} />
      </main>
      <Footer onLinkEnter={linkEnter} onLinkLeave={textLeave} />
    </>
  )
}

export default App;