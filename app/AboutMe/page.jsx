'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

const AboutMe = () => {

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        let context = gsap.context(() => {
            tl.to(".about", {y:0, opacity:1, duration:1, ease:"power2.out"});
        });

        return () => {
            context.revert();
        }

    }, [])

    const router = useRouter();

    const experience = [
        {
            id:1,
            company: "Bismuth Inc.",
            role: "Product Designer",
            year: "September 2023 - Present",
            mission: "Building cocyle and incircle"
        },
        {
            id:2,
            company: "Dine Qr",
            role: "Product Designer",
            year: "October 2023 - January 2024",
            mission: "We build digital menus and inventory systems for restaurants"
        },
        {
            id:3,
            company: "Disruptive Club",
            role: "Product Designer",
            year: "June 2023 - Present",
            mission: "We are currently building a tertiary campus based payment platform and a student internship platform"
        },
        {
            id:4,
            company: "Tesk Devisal Fire",
            role: "Product Designer",
            year: "January 2024 - Present",
            mission: "We are currently building a tech based e-commerce website"
        },
    ]

    const projects = [
        {
            id:1,
            title: "Accompani",
            role: "Product Designer",
            mission: "Building a travel and trip hosting app"
        },
        {
            id:2,
            title: "Locomotive",
            role: "Product Designer",
            mission: "We are building a platform that will provide full and part time employment opportunities to medical personnels"
        },
        {
            id:3,
            title: "Key App",
            role: "Product Designer",
            mission: "We are building a functional mobile app that will link kayayos to potential clients"
        },
    ]

    return ( 
        <div className="w-screen h-screen overflow-x-hidden">
            <button className="w-[80px] h-[40px] rounded-[20px] bg-complemetary-color hidden xl:flex justify-evenly items-center fixed left-[7%] lg:left-[10.5%] top-[16%] lg:top-[18%] z-50 glass"
            onClick={() => router.back()}>
                {/* <Image src={"/images/left-arrow.svg"} sizes="15px" width={15} height={15} className="hidden xl:block" alt="back Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                <IoIosArrowBack size={15}/>
                <p className="text-xs">Back</p>
            </button>
            <div className="w-[90%] xl:w-[80%] h-auto relative top-[20%] lg:top-[30%] my-0 mx-auto flex flex-col gap-10 pb-20 ">
                <div className="w-full h-auto translate-y-[100px] opacity-0 about">
                    <div className="w-[100px] h-[40px] rounded-[20px] flex items-center ml-5 lg:ml-0"> 
                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                        <p className="text-lg xl:text-sm text-grey-color ml-2">About Me</p>
                    </div>
                    <p className="mt-2 text-4xl hidden xl:inline">I'm passionate about creating beautiful <br /> products that empower people.</p>
                    <div className="mt-10 mx-auto w-[90%] md:w-full h-auto xl:h-[400px] rounded-[30px] no__border__bottom about__gradient gray__border">
                        <div className="w-full h-full rounded-[30px] flex flex-col xl:flex-row justify-center items-center xl:justify-start xl:items-start px-5 pb-5 xl:pb-0 xl:px-0">
                            <div className="w-full xl:w-[50%] h-full flex justify-center items-center">
                                <div className="relative w-[200px] h-[200px] mt-10 xl:mt-0 xl:w-[220px] xl:h-[220px] flex justify-center items-center rounded-full profile__pic__bg gray__border"> 
                                    <Image src={"/images/prince.svg"} priority={true} sizes="100%" fill className="object-contain rounded-full transition-opacity opacity-0 duration-[1s]" alt="Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] h-full flex flex-col justify-center gap-5">
                                <p className="text-justify text-grey-color xl:inline-block xl:w-[80%] mt-10 xl:mt-0">Hello there! I'm Essandoh Prince Takyi, a passionate and innovative product designer with a penchant for turning ideas into tangible, user-focused experiences.I currently have a year experience in product design.</p>
                                <p className="text-justify text-grey-color xl:inline-block xl:w-[80%]">I'm a level 200 student of Kwame Nkrumah University Of Science And Technology. I reside in Agona Swedru, Ghana.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 w-[90%] mx-auto md:w-full h-auto rounded-[30px] pb-10 no__border__bottom gray__border about__gradient"> 
                        <div className="mt-3 ml-5 w-[100px] h-[40px] rounded-[20px] flex items-center">
                            <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                            <p className="text-base xl:text-xs text-grey-color ml-2">Experience</p>
                        </div>
                        <div className="w-full h-full flex flex-col pl-5">
                            {experience.map((work) => {
                                return <div className="w-full h-auto xl:h-[120px] flex flex-col xl:flex-row" key={work.id}>
                                    <div className="w-full xl:w-[50%] h-full">
                                        <h1 className="text-xl font-bold mt-5 xl:mt-0">{work.company}</h1>
                                    </div>
                                    <div className="w-full xl:w-[50%] h-auto xl:h-full">
                                        <h2 className="text-base font-bold">{work.role}</h2>
                                        <p className="text-sm text-grey-color mt-1">{work.year}</p>
                                        <p className="text-xs text-grey-color mt-1 inline-block w-full xl:w-[50%]">{work.mission}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="mt-10 w-[90%] mx-auto md:w-full h-auto rounded-[30px] pb-10 no__border__bottom gray__border about__gradient">
                        <div className="mt-3 ml-5 w-[130px] xl:w-[100px] h-[40px] rounded-[20px] flex items-center">
                            <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                            <p className="text-base xl:text-xs text-grey-color ml-2">other projects</p>
                        </div>
                        <div className="w-full h-full flex flex-col pl-5">
                            {projects.map((project) => {
                                return <div className="w-full h-auto xl:h-[120px] flex flex-col xl:flex-row" key={project.id}>
                                    <div className="w-full xl:w-[50%] h-full">
                                        <h1 className="text-xl font-bold mt-5 xl:mt-0">{project.title}</h1>
                                    </div>
                                    <div className="w-full xl:w-[50%] h-auto xl:h-full">
                                        <h2 className="text-base font-bold">{project.role}</h2>
                                        <p className="text-xs text-grey-color mt-1 inline-block w-full xl:w-[50%]">{project.mission}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="mt-10 w-[90%] md:w-full h-auto xl:h-[400px] mx-auto flex flex-col gap-10 xl:gap-0 xl:flex-row xl:justify-between">
                        <div className="w-full xl:w-[25%] h-[350px] xl:h-full rounded-[20px] bg-complemetary-color pl-5">
                            <div className="flex flex-col gap-1 mt-5">
                                <div className="w-[120px] xl:w-[100px] h-[20px] rounded-[20px] flex items-center">
                                    <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                    <p className="text-base xl:text-xs text-grey-color ml-2">Contact Me</p>
                                </div>
                                <p className="text-xs text-grey-color">I'm active on these social media networks</p>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <div className="relative w-[40px] h-[40px] bg-grey-color-two rounded-[6px]">
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[20px] flex justify-center items-center rounded-[40px]">
                                    <Image src={"/images/gmail.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="gmail Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                                <a href="mailto:princeessandoh316@gmail.com" className="text-sm lg:text-[.8rem] text-grey-color">Princeessandoh316@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <div className="relative w-[40px] h-[40px] bg-grey-color-two rounded-[6px]">
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[20px] flex justify-center items-center rounded-[40px]">
                                    <Image src={"/images/phone.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="phone Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                                <a href="tel:+233559488201" className="text-sm lg:text-[.8rem] text-grey-color">0559488201 <br /> 0200910403</a>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <div className="relative w-[40px] h-[40px] bg-grey-color-two rounded-[6px]">
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[20px] flex justify-center items-center rounded-[40px]">
                                    <Image src={"/images/x.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="x Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                                <a href="https://twitter.com/pr_alphaa" className="text-sm lg:text-[.8rem] text-grey-color">@pr_alphaa</a>
                            </div>
                            {/* <div className="flex items-center gap-5 mt-5">
                                <div className="relative w-[40px] h-[40px] bg-grey-color-two rounded-[6px]">
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[20px] flex justify-center items-center rounded-[40px]">
                                    <Image src={"/images/discord.svg"} sizes="100%" fill={true} className="object-contain" alt="discord Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                                <p className="text-[.8rem] text-grey-color">im.alpha</p>
                            </div>*/}
                        </div>
                        <div className="w-full xl:w-[33%] h-[350px] xl:h-[80%] rounded-[20px] flex flex-col items-center justify-between bg-complemetary-color">
                            <div className="w-[90%] h-[80px] xl:h-[20%] flex justify-between items-center">
                                <p className="font-extrabold text-lg lg:text-base inline-block w-[50%] md:block md:w-[20%]">Tool Kit</p>
                                <div className="bg-grey-color-two text-[.7rem] p-3 rounded-[30px]">Tools and applications I use for my work</div>
                            </div>
                            <div className="w-[80%] h-[80%] flex justify-center items-center">
                                <div className="w-full md:w-[55%] xl:w-[80%] h-[90%] flex">
                                    <div className="w-[33.333%] h-full flex flex-col gap-3 justify-center items-center">
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/chatgpt.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="chatgpt Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/notion.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="notion Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[33.333%] h-full flex flex-col gap-7 justify-center items-center">
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/github.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="github Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/figma.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="figma Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/vscode.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="vscode Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[33.333%] h-full flex flex-col gap-3 justify-center items-center">
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/discord.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="discord Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                        <div className="relative w-[50px] h-[50px] bg-grey-color-two rounded-[10px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/slack.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="slack Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[33%] h-[160px] xl:h-[32%] flex justify-center items-center rounded-[20px] bg-complemetary-color xl:pb-5">
                            <div className="w-[90%] h-[90%] flex flex-col">
                                <div className="w-full h-[60px] xl:h-[25%] flex items-center">
                                    <p className="font font-extrabold lg:font-light text-lg lg:text-sm">My products are available in</p>
                                </div>
                                <div className="mt-3 w-full h-[75%] flex">
                                    <div className="w-[50%] h-full flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/ghana.svg"} sizes="100%" fill={true} className="object-contain" alt="ghana Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">Ghana</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/india.svg"} sizes="100%" fill={true} className="object-contain" alt="india Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">India</p>
                                        </div>
                                    </div>
                                    <div className="w-[50%] h-full flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/usa.svg"} sizes="100%" fill={true} className="object-contain" alt="usa Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">USA</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/nigeria.svg"} sizes="100%" fill={true} className="object-contain" alt="nigeria Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;