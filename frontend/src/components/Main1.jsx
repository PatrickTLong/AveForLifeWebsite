import { useState, useEffect } from "react";

// SVGS
const checksvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-12">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

// Import image correctly based on your setup
import prolifeimg1 from "./imgs/prolifeclub.webp"; // Ensure the path is correct

export default function Main1(props) {
    // Functions
    useEffect(() => {
        const interval = setInterval(() => {
            settransition(true)
            setTimeout(() => {
                setarrayset((prevIndex) => (prevIndex + 1)  % arrayofpics.length);
            }, 900)
            
            
        }, 5000);
        
        return () => clearInterval(interval)
        
    }, []);
    function TransEnd() {
        settransition(false)
    }
    // State for window width (handles SSR properly)
    const [windowWidth, setWindowWidth] = useState(null);

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
            {/* Main container */}
            <div className={` ${windowWidth >= 640 ? 'flex-row' : 'flex-col'} p-14 ${props.add}   border-b-2 border-t-2 flex gap-10 bg-opacity-15 items-center justify-center`}>
                {/* Background Image */}
                <img className={`object-cover shadow-xl w-[60rem] ${windowWidth >= 640 ? 'h-96' : 'h-60 '} rounded-xl`} src={props.img} alt="Pro Life Image" />

                {/* Overlay text */}
                <div className="flex gap-3 flex-col relative justify-center items-center">
                    <div className={`whitespace-normal font-volkhov flex items-center p-2 gap-3 ${windowWidth >= 640 ? 'text-4xl' : 'text-2xl'}`}>
                        <div className="">
                        {props.svg}
                        </div>
                            {props.title}
                    </div>
                    <div className={`rounded-3xl  shadow-xl border-slate-700 border-2 border-opacity-15  p-4 opacity-55 ${windowWidth >= 640 ? null : 'w-96'} bg-slate-800 bg-opacity-15`}>
                    {props.summary}
                    </div>
                </div>
                
            </div>
        </>
    );
}
