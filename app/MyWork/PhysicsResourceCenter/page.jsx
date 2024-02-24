'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

const PhysicsResourceCenter = () => {

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.to(".prc", {y:0, opacity:1, duration:1, ease:"power2.out", stagger: {
            amount:.4
        }});

    }, [])

    const router = useRouter();

    return ( 
        <>
            <div className="w-screen h-screen overflow-x-hidden">
                <div className="w-[90%] xl:w-[80%] h-auto relative top-[17%] lg:top-[18.5%] my-0 mx-auto pb-20">
                    <button className="w-[40px] lg:w-[80px] h-[40px] rounded-full fixed left-[7%] lg:left-[10.5%] top-[16%] lg:top-[18%] lg:rounded-[20px] bg-complemetary-color flex justify-evenly items-center z-50 glass" 
                    onClick={() => router.back()}>
                        {/* <Image src={"/images/left-arrow.svg"} sizes="15px" width={15} height={15} alt="back Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                        <IoIosArrowBack size={15}/>
                        <p className="text-xs hidden lg:block">Back</p>
                    </button>
                    <h1 className="text-2xl font-bold text-center mt-16 lg:mt-10 translate-y-[100px] opacity-0 prc">Physics Resource Center</h1>
                    <p className="text-xs text-grey-color text-center mt-2 translate-y-[100px] opacity-0 prc">January 2024 <a href="">Visit our website</a></p>
                    <div className="w-full h-[300px] lg:h-[500px] rounded-[30px] mt-12 relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-full lg:w-[65%] h-[300px] lg:h-[500px] rounded-[30px] mt-0 md:mt-10 lg:mt-5 mx-auto relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc2.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-full h-[300px] lg:h-[500px] rounded-[30px] mt-0 md:mt-10 lg:mt-5 relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc3.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-full h-[300px] lg:h-[500px] rounded-[30px] mt-0 md:mt-10 lg:mt-5 relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc4.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-full h-[300px] lg:h-[500px] rounded-[30px] mt-0 md:mt-10 lg:mt-5 relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc5.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-full lg:w-[65%] h-[300px] lg:h-[500px] rounded-[30px] mt-0 mx-auto md:mt-10 lg:mt-5 relative translate-y-[100px] opacity-0 prc">
                        <Image src={"/images/prc6.svg"} priority={true} sizes="100%" fill className="object-contain transition-opacity opacity-0 duration-[1s]" alt="Physics resource Center Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoadingComplete={(image) =>image.classList.remove("opacity-0")}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default PhysicsResourceCenter;