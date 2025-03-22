import { useState, useEffect, useRef, useContext } from "react";
import prolifeimg1 from "./imgs/prolifeclub.webp";
import dog1 from "./imgs/dog1.jpg";
import dog2 from "./imgs/dog2.jpg";
import dog3 from "./imgs/dog3.jpg";
import pic1 from "./imgs/pic1.jpeg";
import pic2 from "./imgs/pic2.jpeg";
import pic3 from "./imgs/pic3.jpeg";
import pic4 from "./imgs/pic4.jpeg";
import MissionState from "./imgs/avestatement.pdf";
export default function Main2() {
    const [windowWidth, setWindowWidth] = useState(null);
    const arrayofpics = [pic1, pic2, pic3, pic4]
    const [arrayset, setarrayset] = useState(0);
    const [transition, settransition] = useState(false);
        // SVGS
        const checksvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class={`${windowWidth >= 640 ? 'size-9' : 'size-7'}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg> 
      // Functions
        function OpenMission() {
            window.open(MissionState, "_blank")
        }
        useEffect(() => {
            const interval = setInterval(() => {
                settransition(true)
                setTimeout(() => {
                    setarrayset((prevIndex) => (prevIndex + 1)  % arrayofpics.length);
                }, 900)
                
                
            }, 4000);
            
            return () => clearInterval(interval)
            
        }, []);
        function TransEnd() {
            settransition(false)
        }
        // Effect to update width on resize
        useEffect(() => {
            // Set width after mounting to prevent hydration mismatch
            setWindowWidth(window.innerWidth);
    
            function handleResize() {
                setWindowWidth(window.innerWidth);
            }
    
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    return (
        <>
            {/*Start*/}
            <div  className={` relative  ${windowWidth >= 640 ? 'flex-col' : 'flex-col'} p-14 pt-24 pb-24   flex gap-10 bg-opacity-15 items-center justify-center`}>
                <h1 className={` items-center  font-volkhov gap-4 justify-center flex ${windowWidth >= 640 ? 'text-3xl' : 'text-2xl'} `}>
        
                    What We Do!
                </h1>
                {/*Img and text*/}
                <div className={`flex gap-20 ${windowWidth >= 640 ? 'flex-row' : 'flex-col '} items-center flex-row`}>
                    {/*TextBox*/}
                    
                    
                    <img onTransitionEnd={() => TransEnd()} className={`shadow-xl ${windowWidth >= 640 ? 'h-96 w-[40rem]' : 'h-60 w-[30rem] '} transition-opacity duration-1000 ${transition ? 'opacity-0' : 'opacity-100 '}  object-cover rounded-xl`} src={arrayofpics[arrayset]} alt="Pro Life Images" />
                    {/*What we Do*/}
                    <div className="flex flex-col justify-center items-center gap-5">
                      
                        <ul className={`list-disc shadow-xl flex gap-4 border-slate-700 border-2 border-opacity-15  flex-col list-inside rounded-3xl ${windowWidth >= 640 ? 'text-md' : 'text-sm'} p-4 opacity-55 bg-slate-800 bg-opacity-15`}>
                            <li> Friday and Saturday Planned Parenthood Trips </li>
                            <li> March for Life Trip</li>
                            <li> Frequent Fun and Exciting Club Hangout Events </li>
                            <li> Speaker Events </li>
                            <li> Weekly On-Campus Holy Hours</li>
                            <li> Club Meetings </li>
                        </ul>
                        <button onClick={() => OpenMission()} className="transition-all will-change-transform shadow-xl bg-emerald-400 border-emerald-300 border-2 hover:bg-emerald-300 text-white rounded-xl p-2 hover:scale-105">Check Out Our Mission Statement!</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}