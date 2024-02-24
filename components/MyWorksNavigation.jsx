'use client'
//import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { IoIosArrowBack } from "react-icons/io";


const MyWorksNavigation = () => {

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        
        let context = gsap.context(() => {
            tl.to(".nav-bar", {width:"100%", duration:1}, "-=1")
            tl.to(".nav-container", {width:"80%", duration:3, ease:"elastic(0.6)"})
            tl.to(".nav-elements", {x:0, duration:1, stagger: {
                amount:.5
            }}, "<");

            return () => {
                context.revert();
            }
        });
    }, [])

    const router = useRouter();
    
    return ( 
        <>
            <div className="w-[15%] h-auto hidden fixed left-[155px] top-[135px] z-50 lg:block">
                <button className="w-[80px] h-[40px] rounded-[20px] bg-complemetary-color hidden xl:flex justify-evenly items-center" onClick={() => router.back()}>
                    {/* <Image src={"/images/left-arrow.svg"} sizes="15px" width={15} height={15} className="hidden xl:block" alt="back Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                    <IoIosArrowBack size={15}/> 
                    <p className="text-xs">Back</p>
                </button>
                <div className="w-[10%] h-[40px] mt-3 nav-bar">
                <ul className="w-[10%] h-[400px] rounded-[30px] bg-gradient-to-br from-[#272727] to-[#121212] p-5 gray__border overflow-hidden nav-container">
                        <h2 className="font-bold tracking-wider translate-x-[-700px] nav-elements">Contents</h2>
                        <li className="text-grey-color mt-5 text-[.8rem] hover:bg-grey-color-two cursor-pointer translate-x-[-700px] nav-elements">
                            <a href="#overview">Overview</a>
                        </li>
                        <li className="text-grey-color mt-10 text-[.8rem] hover:bg-grey-color-two cursor-pointer translate-x-[-700px] nav-elements">
                            <a href="#highlights">Highlights</a>
                        </li>
                        <li className="text-grey-color mt-10 text-[.8rem] hover:bg-grey-color-two cursor-pointer translate-x-[-700px] nav-elements">
                            <a href="#problem-space">Problem Space</a>
                        </li>
                        <li className="text-grey-color mt-10 text-[.8rem] hover:bg-grey-color-two cursor-pointer translate-x-[-700px] nav-elements">
                            <a href="#how-it-works">How it works</a>
                        </li>
                        {/* <li className="text-grey-color mt-5 text-[.8rem] hover:bg-grey-color-two cursor-pointer translate-x-[-700px] nav-elements">
                            <a href="#summary">Summary</a>
                        </li>
                        <a href="" className="flex justify-between text-xs mt-20 w-full translate-x-[-700px] nav-elements">
                            <p>Visit Cocyle Website</p>
                            <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </a>*/}
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default MyWorksNavigation;