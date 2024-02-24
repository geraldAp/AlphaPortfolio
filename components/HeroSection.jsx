"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";

const HeroSection = ({heroAnimation}) => {
    return ( 
        <>
            <div className="mt-2 w-[90%] lg:w-[80%] h-auto lg:h-[800px] relative top-[20%] my-0 mx-auto flex flex-col gap-10">
                <div className={`w-full h-[300px] lg:h-[300px] flex gap-0 lg:gap-10 ${heroAnimation}`}>
                    <div className="w-full xl:w-[68%] h-[270px] xl:h-full rounded-[20px] px-5 xl:pl-7 pt-5 xl:pt-10 elevate__box__gradient">
                        <h1 className="text-3xl xl:text-4xl font-bold">Elevating Ideas through <br /> Exceptional Design</h1>
                        <p className="text-sm mt-10 hidden xl:inline-block w-[80%] text-grey-color">I'm Essandoh Prince Takyi, currently in my second year studying Computer at Kwame Nkrumah University Of Science and Technology. Exploring the intersection of form and function, I bring a distinctive perspective to every project, ensuring a harmonious fusion of aesthetics and usability that resonates with users on a profound level.</p>
                        <p className="text-base mt-5 xl:hidden md:inline-block md:w-[80%]">I'm Essandoh Prince Takyi, a product designer weaving innovation and aesthetics into captivating and user-centered digital solutions.</p>
                    </div>
                    <div className="w-[32%] h-full rounded-[20px] hidden xl:flex flex-col justify-center items-center gray__border">
                        <div className="relative w-[140px] h-[140px] flex justify-center items-center rounded-full profile__pic__bg gray__border">
                            <Image src={"/images/prince.svg"} priority={true} sizes="100%" fill className="object-contain rounded-full transition-opacity opacity-0 duration-[1s]" alt="Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                        </div>
                        <p className="mt-2 text-sm font-bold">Essandoh Prince Takyi</p>
                        <p className="mt-2 text-xs text-grey-color">Product Designer</p>
                    </div>
                </div>

                {/*------     BOTTOM CONTAINER FOR HERO SECTION ----------------- */}
                <div className={`w-full h-auto xl:h-[500px] flex flex-col xl:flex-row gap-10 pb-20 ${heroAnimation}`}>
                    <div className="w-full xl:w-[33.333%] h-auto xl:h-full rounded-[20px] flex flex-col items-center gray__border xl:pb-5">
                        <div className="w-[90%] h-[60px] xl:h-[15%] flex justify-between items-center">
                            <p className="text-lg lg:text-base font-extrabold">Featured Projects</p>
                            <Link href={"/MyWork"} className="flex gap-2 hover:lg:opacity-50">
                                <p className="text-sm lg:text-xs">View All</p>
                                {/* <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                <FaChevronRight size={15}/>
                            </Link>
                        </div>
                        <div className="w-[90%] h-[400px] xl:h-[85%] flex flex-col gap-5">
                            <Link href={"/MyWork/CocyleApp"} className="w-full h-[80px] xl:h-[25%] rounded-[20px] gray__border px-3 xl:px-5 hover:lg:opacity-60 featured__projects__bg">
                                <div className="w-full h-full flex items-center gap-3">
                                    <div className="w-[20%] h-[70%] rounded-[10px] flex justify-center items-center bg-grey-color-two">C</div>
                                    <div className="w-[80%] h-[70%] flex justify-between items-center">
                                        <div className="flex flex-col justify-between text-grey-color">
                                            <h2 className="text-sm lg:text-[.9rem] font-extrabold lg:font-thin text-white">Cocyle</h2>
                                            <p className="text-[.7rem]">An interactive mobile app that..</p>
                                        </div>
                                        {/* <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                        <FaChevronRight size={15}/>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MyWork/StudentPay"} className="w-full h-[80px] xl:h-[25%] rounded-[20px] gray__border px-3 xl:px-5 hover:lg:opacity-60 featured__projects__bg">
                                <div className="w-full h-full flex items-center gap-3">
                                    <div className="w-[20%] h-[70%] rounded-[10px] flex justify-center items-center bg-grey-color-two">C</div>
                                    <div className="w-[80%] h-[70%] flex justify-between items-center">
                                        <div className="flex flex-col justify-between text-grey-color">
                                            <h2 className="text-sm lg:text-[.9rem] font-extrabold lg:font-thin text-white">Student Pay</h2>
                                            <p className="text-[.7rem]">An interactive mobile app that..</p>
                                        </div>
                                        {/* <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                        <FaChevronRight size={15}/>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MyWork/BuyLinkPro"} className="w-full h-[80px] xl:h-[25%] rounded-[20px] gray__border px-3 xl:px-5 hover:lg:opacity-60 featured__projects__bg">
                                <div className="w-full h-full flex items-center gap-3">
                                    <div className="w-[20%] h-[70%] rounded-[10px] flex justify-center items-center bg-grey-color-two">C</div>
                                    <div className="w-[80%] h-[70%] flex justify-between items-center">
                                        <div className="flex flex-col justify-between text-grey-color">
                                            <h2 className="text-sm lg:text-[.9rem] font-extrabold lg:font-thin text-white">BuyLinkPro</h2>
                                            <p className="text-[.7rem]">An interactive mobile app that..</p>
                                        </div>
                                        {/* <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                        <FaChevronRight size={15}/>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MyWork/PhysicsResourceCenter"} className="w-full h-[80px] xl:h-[25%] rounded-[20px] gray__border px-3 hover:lg:opacity-60 xl:px-5 featured__projects__bg">
                                <div className="w-full h-full flex items-center gap-3">
                                    <div className="w-[20%] h-[70%] rounded-[10px] flex justify-center items-center bg-grey-color-two">C</div>
                                    <div className="w-[80%] h-[70%] flex justify-between items-center">
                                        <div className="flex flex-col justify-between text-grey-color">
                                            <h2 className="text-sm lg:text-[.9rem] font-extrabold lg:font-thin text-white">Physics Resource Center</h2>
                                            <p className="text-[.8rem]">An interactive mobile app that..</p>
                                        </div>
                                        {/* <Image src={"/images/arrow-right.svg"} sizes="15px" width={15} height={15} alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                        <FaChevronRight size={15}/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-[33.333%] h-full rounded-[20px] flex flex-col gap-4">
                        <div className="w-full h-[350px] xl:h-[70%] rounded-[20px] flex flex-col items-center justify-between gray__border">
                            <div className="w-[90%] h-[80px] xl:h-[20%] flex justify-between items-center">
                                <p className="text-lg lg:text-base font-extrabold lg:font-light">Tool Kit</p>
                                <div className="bg-complemetary-color text-[.7rem] p-3 rounded-[20px]">Tools and applications I use for my work</div>
                            </div>
                            <div className="w-[80%] h-[80%] flex justify-center items-center">
                                <div className="w-[80%] h-[90%] flex">
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
                        <div className="w-full h-[160px] xl:h-[30%] flex justify-center items-center rounded-[20px] gray__border xl:pb-5">
                            <div className="w-[90%] h-[90%] flex flex-col">
                                <div className="w-full h-[60px] xl:h-[25%] flex items-center">
                                    <p className="text-lg lg:text-base font-extrabold lg:font-light">My products are available in</p>
                                </div>
                                <div className="mt-3 w-full h-[75%] flex">
                                    <div className="w-[50%] h-full flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/ghana.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="ghana Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">Ghana</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/india.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="india Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">India</p>
                                        </div>
                                    </div>
                                    <div className="w-[50%] h-full flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/usa.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="usa Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">USA</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-[30px] h-[30px] bg-grey-color-two rounded-[6px]">
                                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                                <Image src={"/images/nigeria.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="nigeria Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                                </div>
                                            </div>
                                            <p className="text-[.8rem] text-grey-color">Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[33.333%] h-full rounded-[20px] flex flex-col gap-4">
                        <div className="w-full h-[350px] xl:h-[70%] rounded-[20px] flex flex-col items-center justify-center pb-5 gray__border">
                            <div className="w-[90%] h-[60px] xl:h-[20%] flex items-center">
                                <p className="text-lg lg:text-base font-extrabold lg:font-light">Testimonials</p>
                            </div>
                            <div className="w-[90%] h-[80%] flex flex-col gap-3 text-grey-color">
                                <div className="w-full h-[60%] rounded-[15px] px-4 pt-2 pb-4 gray__border">
                                    <div>
                                        <h2 className="text-sm lg:text-[.8rem] text-white">Dennis Opoku</h2>
                                        <p className="text-xs lg:text-[.7rem]">Bismuth Inc.</p>
                                    </div>
                                    <p className="text-xs lg:text-[.65rem] mt-2 lg:mt-1">"He has worked on app for us"</p>
                                    <p className="text-xs lg:text-[.65rem] mt-2 lg:mt-1">"Very fantastic guy and he is able to add things he deem relevant"</p>
                                </div>
                                <div className="w-full h-[40%] rounded-[15px] px-4 pt-2 pb-4 gray__border">
                                    <div>
                                        <h2 className="text-sm lg:text-[.8rem] text-white">Mr. Spencer</h2>
                                        <p className="text-xs lg:text-[.7rem]">Disruptive Club</p>
                                    </div>
                                    <p className="text-xs lg:text-[.65rem] mt-1">"I love your work so much"</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[160px] xl:h-[30%] rounded-[20px] flex flex-col items-center gray__border">
                            <div className="w-[90%] h-full">
                                <div className="w-full h-[60px] xl:h-[30%] flex items-center">
                                    <p className="text-lg lg:text-base font-extrabold lg:font-light">Contact Me</p>
                                </div>
                                <div className="w-full h-full flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-[35px] lg:w-[30px] h-[35px] lg:h-[30px] bg-grey-color-two rounded-[6px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                            <Image src={"/images/gmail.svg"} priority={true} sizes="100%" fill={true} className="object-contain" alt="gmail Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                            </div>
                                        </div>
                                        <a href="mailto:princeessandoh316@gmail.com" className="text-sm lg:text-[.8rem] text-grey-color hover:opacity-50">Princeessandoh316@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-[35px] lg:w-[30px] h-[35px] lg:h-[30px] bg-grey-color-two rounded-[6px]">
                                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[15px] h-[15px] flex justify-center items-center rounded-[10px]">
                                            {/* <Image src={"/images/phone.svg"} sizes="100%" fill={true} className="object-contain" alt="phone Essandoh Prince Takyi's portfolio website UI/UX product designer"/> */}
                                            <TbPhone size={15}/>
                                            </div>
                                        </div>
                                        <a href="tel:+233559488201" className="text-sm lg:text-[.8rem] text-grey-color hover:opacity-50">0559488201 / 0200910403</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HeroSection;