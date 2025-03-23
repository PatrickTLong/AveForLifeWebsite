import { useState, useEffect, useRef, useContext } from "react";
import AveLogo from './imgs/AveLogo.png'


export default function Header() {
  // States
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOn, setMenuOn] = useState(false);

  function Scroll() {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  }
  // Functions
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setMenuOn(!menuOn);
  }

  // SVGS
  const menuSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  );

  return (
    <div className="p-8 fixed w-full z-10 top-0 left-0 bg-white shadow-md flex justify-between items-center">
      {/* Logo/Title - Always on the left */}
      <div className={`${windowWidth >= 640 ? 'text-2xl' : 'text-xl'}`}>      
        <img className={`absolute  object-cover ${windowWidth >= 640 ? 'w-[6rem] top-2' : 'w-[5rem] top-3'} `} src={AveLogo}></img>
      </div>

      {/* Menu Section - Always on the right */}
      {windowWidth >= 640 ? (
        // Desktop Menu
        <menu className={`flex gap-5 ${windowWidth >= 640 ? 'text-md' : 'text-sm'} items-center justify-center`}>
          <a href="https://www.avemaria.edu/clubs-and-organizations/ave-for-life" className="transition-all will-change-transform hover:scale-105">More Info</a>
          <button onClick={() => Scroll()} className="transition-all will-change-transform hover:scale-105">Donate</button>
          <button onClick={() => Scroll()}  className="transition-all will-change-transform shadow-xl bg-pink-300 bg-opacity-70 border-pink-200 border-4 hover:bg-pink-200 text-white rounded-xl p-2 hover:scale-105">Email Us</button>
        </menu>
      ) : (
        // Mobile Menu Button and Dropdown
        <div className="relative">
          <button
            className={`${menuOn ? 'bg-slate-400' : ''} hover:bg-slate-500 hover:bg-opacity-35 transition-all duration-500 p-2 bg-opacity-35 rounded-xl`}
            onClick={toggleMenu}
          >
            {menuSvg}
          </button>
          
          {/* Mobile Menu Dropdown */}
          <menu className={`gap-7 shadow-2xl flex justify-center origin-top-right items-center ${windowWidth >= 640 ? 'text-md' : 'text-sm'}  ${menuOn ? 'opacity-100 pointer-events-auto scale-100' : 'pointer-events-none scale-50 opacity-0'} bg-opacity-95 whitespace-nowrap right-0 p-10 top-14  bg-white duration-500 z-10 will-change-transform transition-all rounded-xl absolute flex flex-col`}>
            <a href="https://www.avemaria.edu/clubs-and-organizations/ave-for-life" className="transition-all  will-change-transform hover:scale-105">More Info</a>
            <button onClick={() => Scroll()} className="transition-all will-change-transform hover:scale-105">Donate</button>
            <button onClick={() => Scroll()}  className="transition-all will-change-transform shadow-xl bg-pink-300 bg-opacity-70 border-pink-200 border-4 hover:bg-pink-200 text-white rounded-xl p-2 hover:scale-105">Email Us</button>
          </menu>
        </div>
      )}
    </div>
  );
}