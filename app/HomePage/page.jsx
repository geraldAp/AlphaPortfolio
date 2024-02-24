'use client';
import { useLayoutEffect } from "react";
import gsap from "gsap";
import HeroSection from "../../components/HeroSection";


const HomePage = () => {

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        let context = gsap.context(() => {  
            tl.fromTo(".appear", {y:100, opacity:0}, {y:0, opacity:1, duration:1, stagger: {
                amount:0.3
            }});

            return () => {
                context.revert();
            }
        })
    }, []);

    return ( 
        <>
        <div className="w-screen h-screen overflow-x-hidden">
           <HeroSection heroAnimation="appear"/>
        </div>
        </>
     );
}
 
export default HomePage;