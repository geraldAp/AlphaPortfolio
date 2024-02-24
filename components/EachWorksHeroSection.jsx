'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";


const EachWorksHeroSection = ({height, appName, description, overviewOne, overviewTwo, overviewThree, imageOne, imageTwo, imageThree, containerStyle}) => {

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        let context = gsap.context(() => {
            tl.to(".move-up", {y:0, opacity:1, duration:1, ease:"power2.out", stagger: {
                amount:.4
            }});
        });

        return () => {
            context.revert();
        }

    }, [])

    const router = useRouter();

    return ( 
        <>
            <button className="w-[40px] h-[40px] rounded-full bg-complemetary-color xl:hidden flex justify-evenly items-center fixed left-[8%] top-[16%] z-50 glass" onClick={() => router.back()}>
                {/* <Image src={"/images/left-arrow.svg"} sizes="15px" width={15} height={15} alt="back Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                <IoIosArrowBack size={15}/> 
            </button>
            <h1 className="text-2xl mt-0 lg:mt-10 font-bold text-center  priority={true}translate-y-[100px] opacity-0 move-up">{appName}</h1>
            <p className="text-xs text-grey-color text-center mt-2 translate-y-[100px] opacity-0 move-up">{description}</p>
            <div className={`w-full mt-10 flex justify-center items-center h-[400px] rounded-[30px] overflow-hidden ${containerStyle} translate-y-[100px] opacity-0 move-up`}>
                <div className="w-full lg:w-[70%] h-[80%] flex gap-0 lg:gap-10 overflow-x-auto slider__container">
                    <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                        <Image src={imageOne} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                        <Image src={imageTwo} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                    </div>
                    <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                        <Image src={imageThree} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                    </div>
                </div>
            </div>
            <div className={`mt-10 w-full ${height} flex flex-col lg:flex-row translate-y-[100px] opacity-0 move-up`}>
                <div className="w-full lg:w-[20%] h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-bold text-xl lg:text-lg">My Role</h2>
                        <p className="text-sm text-grey-color">Product Designer</p>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <h2 className="text-bold text-xl lg:text-base">Team</h2>
                        <p className="text-sm text-grey-color">Dennis Opuni, Team Lead</p>
                        <p className="text-sm text-grey-color">Fiifi Yawson, Fullstack</p>
                        <p className="text-sm text-grey-color">Michael Ackah, Mobile Developer</p>
                    </div>
                </div>
                <div className="w-full lg:w-[80%] h-full flex justify-start items-center lg:justify-end mt-5 lg:mt-0" id="overview">
                    <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-bold text-xl lg:text-lg">Overview</h2>
                            <p className="text-sm text-grey-color">{overviewOne}</p>
                        </div>
                        <div>
                            <p className="text-sm mt-2 text-grey-color">{overviewTwo}</p>
                            <p className="text-sm mt-2 text-grey-color">{overviewThree}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default EachWorksHeroSection;