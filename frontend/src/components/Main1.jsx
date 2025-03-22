import { useState, useEffect } from "react";

// SVGS


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
                    <div className={` font-volkhov flex items-center p-2 gap-3 ${windowWidth >= 640 ? 'text-3xl' : 'text-xl'}`}>
                        <div className="">
                        {props.svg}
                        </div>
                            {props.title}
                    </div>
                    <div className={`rounded-3xl  shadow-xl border-slate-700 border-2 border-opacity-15  p-4 opacity-55  ${windowWidth >= 640 ? 'text-md' : 'text-sm'} ${windowWidth >= 640 ? null : 'w-80'} bg-slate-800 bg-opacity-15`}>
                    {props.summary}
                    </div>
                </div>
                
            </div>
        </>
    );
}
