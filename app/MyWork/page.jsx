'use client';
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useLayoutEffect } from "react";


const MyWork = () => {

    const apps = [
        {
            id:1,
            name: "Cocyle App",
            description: "Reducing your carbon footprint share items to be used",
            image1:"/images/cocyle-img1.svg",
            image2:"/images/cocyle-img2.svg",
            image3:"/images/cocyle-img3.svg",
            bgColor:"bg-gradient-to-t from-[#121412] to-[#192914] lg:bg-none lg:bg-[#171717]",
            border:"border-[#4B6E29] lg:border-grey-color border-2 border-b-0",
            route:"/MyWork/CocyleApp",
            hoverClass: "c-animate",
            child:"c-child",
            view:"view1",
            fade:"fade1",
            arrow:"arrow1",
        },
        {
            id:2,
            name: "StudentPay",
            description: "Powering seamless and snappy campus commerce",
            image1:"/images/studentpay-img1.svg",
            image2:"/images/studentpay-img2.svg",
            image3:"/images/studentpay-img3.svg",
            bgColor:"bg-gradient-to-t from-[#161613] to-[#3E3518] lg:bg-none lg:bg-[#171717]",
            border:"border-[#E7BB2D] lg:border-grey-color border-2 border-b-0",
            route:"/MyWork/StudentPay",
            hoverClass: "s-animate",
            child:"s-child",
            view:"view2",
            fade:"fade2",
            arrow:"arrow2",
        },
        {
            id:3,
            name: "BuyLink Pro",
            description: "An e-commerce and affiliate marketing platform",
            image1:"/images/buylinkpro-img1.svg",
            image2:"/images/buylinkpro-img2.svg",
            image3:"/images/buylinkpro-img3.svg",
            bgColor:"bg-gradient-to-t from-[#131215] to-[#131218] lg:bg-none lg:bg-[#171717]",
            border:"border-[#201846] lg:border-grey-color border-2 border-b-0",
            route:"/MyWork/BuyLinkPro",
            hoverClass: "b-animate",
            child:"b-child",
            view:"view3",
            fade:"fade3",
            arrow:"arrow3",
        },
    ]

    useLayoutEffect(() => {
        const workHero = document.querySelectorAll(".work-hero")
        const tl = gsap.timeline();

        let context = gsap.context(() => {
            tl.to(workHero, {y:0, opacity:1, duration:1, ease:"power2.out", stagger: {
                amount:0.3
            }});
        });

        return () => {
            context.revert();
        }

    }, [])


    //COCYLE ANIMATION ON HOVER
    useLayoutEffect(() => {
    const onHoverCocyle = document.querySelector(".c-animate");
    const cocyleBackground = "linear-gradient(to bottom, #192914, #172414, #151f14, #141913, #121412)";
    const genralBackground = "#171717";
    const cocyleBorder = "2px solid #4B6E29";
    const generalBorder = "2px solid #D9D9D9";
    const borderB = 0;


    const cocyleTl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();
    
    let context = gsap.context(() => {
        screenSize.add("(min-width:1000px)", () => {
            cocyleTl.to(".fade1", {opacity:0, y:30, duration:1, ease:"power2.out"})
            cocyleTl.to(".c-child", {y:180, duration:1, ease:"power2.out", stagger: {
                amount:0.2
            }}, "<")
            cocyleTl.to(".view1", {y:0, duration:.7, ease:"power2.out", stagger: {
                amount:.5
            }}, "<.1")
            cocyleTl.to(".arrow1", {y:20, width:30, height:30, duration:1, ease:"power2.out", stagger: {
                amount:.6
            }}, "<")
    
                onHoverCocyle.addEventListener("mouseenter", () => {
                    cocyleTl.reversed() ? cocyleTl.play() : cocyleTl.reverse();
                    onHoverCocyle.style.backgroundImage = cocyleBackground;
                    onHoverCocyle.style.border = cocyleBorder;
                    onHoverCocyle.style.borderBottom = borderB;
            })
    
            onHoverCocyle.addEventListener("mouseleave", () => {
                cocyleTl.reversed() ? cocyleTl.play() : cocyleTl.reverse();
                onHoverCocyle.style.background = genralBackground;
                onHoverCocyle.style.border = generalBorder;
                onHoverCocyle.style.borderBottom = borderB;
            });
        })
    });

    return () => {
        context.revert();
    }

}, [])


    //STUDENT PAY ANIMATION ON HOVER
    useLayoutEffect(() => {
    const onHoverStudentPay = document.querySelector(".s-animate");
    const studentPayBackground = "linear-gradient(to bottom, #3e3518, #322d17, #282616, #1e1e15, #161613)";
    const genralBackground = "#171717";
    const studentPayBorder = "2px solid #e7bb2d";
    const generalBorder = "2px solid #D9D9D9";
    const borderB = 0;


    const sPayTl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    let context = gsap.context(() => {
        screenSize.add("(min-width:1000px)", () => {
            sPayTl.to(".fade2", {opacity:0, y:30, duration:1, ease:"power2.out"})
            sPayTl.to(".s-child", {y:180, duration:1, ease:"power2.out", stagger: {
                amount:0.2
            }}, "<")
            sPayTl.to(".view2", {y:0, duration:.7, ease:"power2.out", stagger: {
                amount:.5
            }}, "<.1")
            sPayTl.to(".arrow2", {y:20, width:30, height:30, duration:1, ease:"power2.out", stagger: {
                amount:.6
            }}, "<")
    
            onHoverStudentPay.addEventListener("mouseenter", () => {
                sPayTl.reversed() ? sPayTl.play() : sPayTl.reverse();
                onHoverStudentPay.style.backgroundImage = studentPayBackground;
                onHoverStudentPay.style.border = studentPayBorder;
                onHoverStudentPay.style.borderBottom = borderB;
            })
    
            onHoverStudentPay.addEventListener("mouseleave", () => {
                sPayTl.reversed() ? sPayTl.play() : sPayTl.reverse();
                onHoverStudentPay.style.background = genralBackground;
                onHoverStudentPay.style.border = generalBorder;
                onHoverStudentPay.style.borderBottom = borderB;
            });
        })
    });

    return () => {
        context.revert();
    }

}, [])


    //BUY LINK PRO HOVER ANIMATION
    useLayoutEffect(() => {
    const onHoverBPro = document.querySelector(".b-animate");
    const BProBackground = "linear-gradient(to bottom, #131218, #131217, #131217, #131216, #131215)";
    const genralBackground = "#171717";
    const BProBorder = "2px solid #201846";
    const generalBorder = "2px solid #D9D9D9";
    const borderB = 0;


    const bProTl = gsap.timeline({paused:true, reversed:true});
    let screenSize = gsap.matchMedia();

    let context = gsap.context(() => {
        screenSize.add("(min-width:1000px)", () => {
            bProTl.to(".fade3", {opacity:0, y:30, duration:1, ease:"power2.out"})
            bProTl.to(".b-child", {y:180, duration:1, ease:"power2.out", stagger: {
                amount:0.2
            }}, "<")
            bProTl.to(".view3", {y:0, duration:.7, ease:"power2.out", stagger: {
                amount:.5
            }}, "<.1")
            bProTl.to(".arrow3", {y:20, width:30, height:30, duration:1, ease:"power2.out", stagger: {
                amount:.6
            }}, "<")
    
            onHoverBPro.addEventListener("mouseenter", () => {
                bProTl.reversed() ? bProTl.play() : bProTl.reverse();
                onHoverBPro.style.backgroundImage = BProBackground;
                onHoverBPro.style.border = BProBorder;
                onHoverBPro.style.borderBottom = borderB;
            })
    
            onHoverBPro.addEventListener("mouseleave", () => {
                bProTl.reversed() ? bProTl.play() : bProTl.reverse();
                onHoverBPro.style.background = genralBackground;
                onHoverBPro.style.border = generalBorder;
                onHoverBPro.style.borderBottom = borderB;
            });
    
        })
    });

    return () => {
        context.revert();
    }

}, [])


    //STUDENT RESOURCE CENTER HOVER ANIMATION
    useLayoutEffect(() => {
        const onHoverPRC = document.querySelector(".p-animate");
        const PRCBackground = "linear-gradient(to bottom, #192914, #172414, #151f14, #141913, #121412)";
        const genralBackground = "#171717";
        const PRCBorder = "2px solid #4B6E29";
        const generalBorder = "2px solid #D9D9D9";
        const borderB = 0;
    
    
        const PRCTl = gsap.timeline({paused:true, reversed:true});
        let screenSize = gsap.matchMedia();

        let context = gsap.context(() => {
            screenSize.add("(min-width:1000px)", () => {
                PRCTl.to(".fade4", {opacity:0, y:30, duration:1, ease:"power2.out"})
                PRCTl.to(".p-child", {y:180, duration:1, ease:"power2.out"}, "<")
                PRCTl.to(".view4", {y:0, duration:.7, ease:"power2.out", stagger: {
                    amount:.5
                }}, "<.1")
                PRCTl.to(".arrow4", {y:20, width:30, height:30, duration:1, ease:"power2.out", stagger: {
                    amount:.6
                }}, "<")
        
                onHoverPRC.addEventListener("mouseenter", () => {
                    PRCTl.reversed() ? PRCTl.play() : PRCTl.reverse();
                    onHoverPRC.style.backgroundImage = PRCBackground;
                    onHoverPRC.style.border = PRCBorder;
                    onHoverPRC.style.borderBottom = borderB;
                })
            
                onHoverPRC.addEventListener("mouseleave", () => {
                    PRCTl.reversed() ? PRCTl.play() : PRCTl.reverse();
                    onHoverPRC.style.background = genralBackground;
                    onHoverPRC.style.border = generalBorder;
                    onHoverPRC.style.borderBottom = borderB;
                });
            });
        });

        return () => {
            context.revert();
        }
    
    }, [])


    return ( 
        <div className="w-screen h-screen overflow-x-hidden">
            <div className="w-[90%] xl:w-[80%] h-auto relative top-[23%] my-0 mx-auto flex flex-col gap-10 pb-20">
                {apps.map((app) => {
                    return <Link href={app.route} className={`${app.bgColor} ${app.border} ${app.hoverClass} w-full lg:w-[60%] h-[500px] rounded-[30px] px-0 lg:px-10 mx-auto translate-y-[100px] transition opacity-0 work-hero relative`} key={app.id}>
                    <div className="flex flex-col gap-1 justify-center w-full h-[80px] pt-7 px-5 md:px-11 lg:px-5">
                        <div className="flex justify-between items-center w-full">
                            <h1 className={`font-bold text-xl lg:text-lg tracking-widest ${app.fade}`}>{app.name}</h1>
                            <Image src={"/images/arrow-right.svg"} priority={true} sizes="15px" width={15} height={15} className={`${app.arrow}`}  alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <p className={`text-sm lg:text-xs text-grey-color block w-[80%] lg:w-full ${app.fade}`}>{app.description}</p>
                    </div>
                    <div className="w-full h-[350px] lg:h-[400px] flex mt-5 gap-5 lg:gap-10 overflow-hidden px-5 lg:px-0">
                        <div className={`w-[33.333%] h-[350px] relative overflow-x-hidden ${app.child}`}>
                            <Image src={app.image1} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%"  alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                        </div>
                        <div className={`w-[33.333%] h-[350px] relative overflow-x-hidden ${app.child}`}>
                            <Image src={app.image2} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%"  alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                        </div>
                        <div className={`w-[33.333%] h-[350px] relative overflow-x-hidden ${app.child}`}>
                            <Image src={app.image3} priority={true} className="object-contain transition-opacity opacity-0 duration-[1s]" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                        </div>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 z-50 text-6xl pl-8 pt-10 hidden lg:flex gap-5">
                        <div className="w-auto h-[70px] overflow-hidden flex">
                            <div className={`translate-y-[200px] ${app.view}`}>V</div>
                            <div className={`translate-y-[200px] ${app.view}`}>i</div>
                            <div className={`translate-y-[200px] ${app.view}`}>e</div>
                            <div className={`translate-y-[200px] ${app.view}`}>w</div>
                        </div>
                        <div className="w-auto h-[70px] overflow-hidden flex">
                            <div className={`translate-y-[200px] ${app.view}`}>A</div>
                            <div className={`translate-y-[200px] ${app.view}`}>P</div>
                            <div className={`translate-y-[200px] ${app.view}`}>P</div>
                        </div>
                    </div>
                </Link>
                })}
                <Link href={"/MyWork/PhysicsResourceCenter"} className="w-full lg:w-[60%] h-[500px] rounded-[30px] px-0 lg:px-10 bg-gradient-to-t from-[#121412] to-[#192914] lg:from-[#171717] lg:to-[#171717] border-[#4B6E29] lg:border-grey-color border-2 border-b-0 lg:bg-grey-color-three mx-auto translate-y-[100px] opacity-0 work-hero relative p-animate">
                    <div className="flex flex-col gap-1 justify-center w-full h-[90px] lg:h-[80px] pt-7 px-5 md:px-11 lg:px-5">
                        <div className="flex justify-between items-center w-full">
                            <h1 className="font-bold text-xl lg:text-lg tracking-widest fade4 mt-7 lg:mt-0">Physics Resource Center</h1>
                            <Image src={"/images/arrow-right.svg"} priority={true} sizes="15px" width={15} height={15} className="arrow4" alt="Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <p className="text-sm lg:text-xs mt-2 lg:mt-0 text-grey-color block w-[80%] lg:w-full fade4">Reducing your carbon footprint share items to be used</p>
                    </div>
                    <div className="w-[90%] lg:w-full h-[250px] lg:h-[400px] mx-auto mt-14 md:mt-5 relative overflow-hidden">
                        <div className="w-full h-[350px] prc__mobile p-child">
                            <Image src={"/images/prc.svg"} priority={true} className="object-cover transition-opacity opacity-0 duration-[1s] rounded-[30px]" fill sizes="100%"  alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer" onLoad={(image) =>image.target.classList.remove("opacity-0")}/>
                        </div>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 z-50 text-6xl pl-8 pt-10 hidden lg:flex gap-5">
                        <div className="w-auto h-[70px] overflow-hidden flex">
                            <div className="translate-y-[200px] view4">V</div>
                            <div className="translate-y-[200px] view4">i</div>
                            <div className="translate-y-[200px] view4">e</div>
                            <div className="translate-y-[200px] view4">w</div>
                        </div>
                        <div className="w-auto h-[70px] overflow-hidden flex">
                            <div className="translate-y-[200px] view4">A</div>
                            <div className="translate-y-[200px] view4">P</div>
                            <div className="translate-y-[200px] view4">P</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default MyWork;