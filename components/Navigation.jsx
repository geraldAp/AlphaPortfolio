'use client';
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

const Navigation = () => {

    useLayoutEffect(() => {

        const resumeBtn = document.querySelector(".resume-btn");
        const tl = gsap.timeline({paused:true, reversed:true});

        let context = gsap.context(() => {
            tl.to('.resume', {x:0, duration:.5, ease:"power2.out"}, "<");

            resumeBtn.addEventListener("click", () => {
                if(tl.reversed()) {
                    tl.play();
                }else {
                    tl.reverse();
                };
            });
        });

        return () => {
            context.revert();
        }


    }, []);

    return ( 
        <>
            <nav className="w-[90%] h-[10%] lg:w-[80%] xl:h-[12%] px-3 xl:px-7 flex justify-between items-center rounded-[40px] xl:rounded-[37px] z-[200] fixed top-[5%] left-[5%] xl:left-[10%] gap-3 xl:gap-0 glass">
                <Link href={"/"} className="tracking-[5px] hidden xl:block main-alpha z-[600]">#ALPHA</Link>
                <div className="w-[90%] xl:w-[40%] h-full flex justify-between items-center gap-3 z-[600]"> 
                    <Link href={"/HomePage"} className="w-[33.33%] h-[50%] lg:h-[60%] xl:px-5 rounded-[25px] bg-complemetary-color active:bg-grey-color-two focus:bg-grey-color-two hover:bg-grey-color-two flex justify-evenly items-center show">
                        {/* <Image src={"/images/home.svg"} sizes="15px" width={15} height={15} className="hidden xl:block" alt="home Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                        <GoHomeFill size={15} className="hidden lg:block"/>
                        <p className="text-xs">Home</p>
                    </Link>
                    <Link href={"/MyWork"} className="w-[33.33%] h-[50%] lg:h-[60%] xl:px-5 rounded-[25px] bg-complemetary-color active:bg-grey-color-two focus:bg-grey-color-two hover:bg-grey-color-two flex justify-evenly items-center show">
                        {/* <Image src={"/images/work.svg"} sizes="15px" width={15} height={15} className="hidden xl:block" alt="my work Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                        <MdOutlineWork size={15} className="hidden lg:block"/>
                        <p className="text-xs">My Work</p>
                    </Link>
                    <Link href={"/AboutMe"} className="w-[33.33%] h-[50%] lg:h-[60%] xl:px-5 rounded-[25px] bg-complemetary-color active:bg-grey-color-two focus:bg-grey-color-two hover:bg-grey-color-two flex justify-evenly items-center show">
                        {/* <Image src={"/images/about.svg"} sizes="15px" width={15} height={15} className="hidden xl:block" alt="about me Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                        <LuUser2 size={15} className="hidden lg:block"/>
                        <p className="text-xs">About Me</p>
                    </Link>
                </div>
                <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] xl:px-5 rounded-full bg-complemetary-color flex justify-center items-center xl:hidden resume-btn">
                    <Image src={"/images/@.svg"} sizes="20px" width={20} height={20} alt="contact Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                </div>
                 <div className="w-[12%] h-full hidden xl:flex justify-between items-center text-sm show z-[600]">
                    <a href="https://www.linkedin.com/in/prince-essandoh-534863229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:underline">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1UAFNJsTdFOU8iXsx_A9iJQizC7aNq70Q/view?usp=drive_link" className="hover:underline">Resume</a>
                </div>
                <div className="hidden lg:block absolute left-0 top-0 h-full w-full rounded-[37px] overlay"></div>
            </nav>
        </>
     );
}
 
export default Navigation;