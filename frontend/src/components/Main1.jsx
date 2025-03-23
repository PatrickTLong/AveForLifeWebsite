import { useState, useEffect } from "react";
import prolifeimg1 from "./imgs/prolifeclub.webp";

export default function Main1(props) {
    // STATES AND VARIABLES
const [arrayindex, setarrayindex] = useState(0);
const [transition, settransition] = useState(false);
const [windowWidth, setWindowWidth] = useState(null);
const [arrayofpics, setarrayofpics] = useState([])

    // Functions
        useEffect(() => {
            if ((props.imgarray) && (props.imgarray).length > 0) {
                        // ImageArray From Props
                setarrayofpics(props.imgarray)
                const interval = setInterval(() => {
                    settransition(true)
                    setTimeout(() => {
                        setarrayindex((prevIndex) => (prevIndex + 1)  % arrayofpics.length);
                    }, 900)
                    
                    
                }, 5000);
                
                return () => clearInterval(interval)
            }
            
            
        }, [arrayofpics]);
    
    
    function TransEnd() {
        settransition(false)
    }

   

    // Effect to update width on resize
    useEffect(() => {
        
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
            <div className={`${windowWidth >= 640 ? `${props.add} flex-row p-14` : `flex-col ${props.addsmall}`} flex gap-10 bg-opacity-15 items-center justify-center`}>
                {/* Background Image */}
                <img onTransitionEnd={() => TransEnd()} className={`object-cover  ${transition ? 'opacity-0' : 'opacity-100 '}  transition-opacity duration-1000 shadow-xl ${windowWidth >= 640 ? ` ${props.addimg} w-1/2 rounded-xl` : 'h-60  w-screen '}`} src={props.img ? props.img : arrayofpics[arrayindex]} alt="Pro Life Image" />

                {/* Overlay text */}
                <div className="flex gap-3 flex-col relative justify-center items-center">
                    <div className={` font-volkhov flex items-center p-2 gap-3 ${windowWidth >= 640 ? 'text-4xl' : 'text-xl'}`}>
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
