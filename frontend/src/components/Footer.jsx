import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import AveLogoWhite from './imgs/AveLogo.png'
export default function Footer() {
    // SVG icons
    const instasvg = <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
  </svg>
  
    const ytsvg = <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
  </svg>
  
    const facesvg = <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
  </svg>
  

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`flex justify-center  items-center ${windowWidth >= 640 ? 'flex-row' : 'flex-col'} bg-[#2E8B57] gap-20 p-28 shadow-md  text-white`}>
            {/* Media */}
            <div className="flex flex-col justify-center items-center ">
                <img className={` ${windowWidth >= 640 ? 'w-[9rem]' : 'w-[7rem]'} flex invert`} src={AveLogoWhite}></img>
                <div className="flex gap-5">
                    <a href="https://www.instagram.com/amuforlife/" className="hover:-translate-y-1 transition-all" >{instasvg}</a>
                    <a href="https://www.facebook.com/avemariauniv/" className="hover:-translate-y-1 transition-all">{facesvg}</a>
                </div>
            </div>

            {/* Contact Info */}
            <div className={`flex ${windowWidth >= 640 ? 'flex-row gap-5' : 'gap-12 flex-col'} ${windowWidth >= 640 ? 'text-md' : 'text-sm'} ${windowWidth >= 640 ? null : 'w-80'}   justify-center items-center `}>
                <div className="flex flex-col border-l-2 pl-6 border-white  gap-5">
                    <div className="">5050 Ave Maria Blvd., Ave Maria, FL <br></br>34142</div>
                    <a className="underline hover:scale-105 transition-all will-change-transform" href="https://www.avemaria.edu/clubs-and-organizations/ave-for-life">Ave Maria University</a>
                    <div className="flex  flex-col">
                        <a   className=""> To Donate Contact:</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Michael.d.long@my.avemaria.edu" className="underline">Michael.d.long@my.avemaria.edu</a>
                    </div>
                  
                    
                    
                </div>
                <div className="border-l-2 pl-6 flex text-xs gap-5 flex-col border-white ">
                    <div className=" ">© 2025 Ave For Life Club.<br></br> Privacy Policy | Terms & Conditions</div>
                    <div className=" ">Web Designer - Patrick Long <br></br> patricklong3317@gmail.com</div>
                </div>
                
            </div>
            
            <div className={`font-volkhov bg-gradient-to-tr whitespace-nowrap  tracking-tighter border-t-2 border-b-2 p-2 hover:scale-105 will-change-transform transition-all border-white rounded-full  ${windowWidth >= 640 ? ' text-4xl' : 'text-3xl'}`}>
                Ave For Life.
            </div>
            
        </div>
    );
}
