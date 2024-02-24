import Image from "next/image";

const HowAppWors = ({title, info, function1, function2, function3, function4, description1, description2, description3, description4,img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, containerStyle}) => {

    const apps = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ]

    return ( 
        <>
            <div className="mt-20 w-full h-auto" id="how-it-works">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                        <p className="text-lg xl:text-sm text-grey-color">How App Works</p>
                    </div>
                    <div className="mt-5 w-full lg:w-[70%]">
                        <h2 className="text-2xl lg:text-xl font-bold">{title}</h2>
                        <p className="text-sm  text-grey-color mt-3">{info}</p>
                    </div>
                </div>
                { apps.map((app) => {
                    return <div className={`mt-20 w-full h-[520px] lg:h-[500px] rounded-[30px] pt-5 overflow-x-hidden lg:pt-0 ${containerStyle}`} key={app.id}>
                        <div className="w-full lg:w-[80%] h-full mx-auto overflow-x-hidden">
                            <div className="flex flex-col gap-1 justify-center w-full h-[90px] lg:h-[80px] px-7 lg:px-12 pt-5">
                                {(() => {
                                   if(app.id === 1) {
                                    return <>
                                        <h1 className="font-bold text-lg text-center lg:text-left">{function1}</h1>
                                        <p className="text-sm text-grey-color text-center lg:text-left">{description1}</p>
                                    </>
                                   }else if(app.id === 2) {
                                    return <>
                                        <h1 className="font-bold text-lg text-center lg:text-left">{function2}</h1>
                                        <p className="text-sm text-grey-color text-center lg:text-left">{description2}</p>
                                    </>
                                   }else if(app.id === 3) {
                                    return <>
                                        <h1 className="font-bold text-lg text-center lg:text-left">{function3}</h1>
                                        <p className="text-sm text-grey-color text-center lg:text-left">{description3}</p>
                                    </>
                                   }else if(app.id === 4) {
                                    return <>
                                        <h1 className="font-bold text-lg text-center lg:text-left">{function4}</h1>
                                        <p className="text-sm text-grey-color text-center lg:text-left">{description4}</p>
                                    </>
                                   }
                                })()}
                            </div>

                            {/*-----CONDITION FOR IMAGES-------*/}
                            <div className="w-full h-[350px] pb-10 flex gap-1 lg:gap-0 mt-7 lg:mt-5 overflow-y-hidden overflow-x-auto lg:overflow-hidden slider__container">
                                {(() => {
                                   if(app.id === 1) {
                                    return <>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img1} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img2} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img3} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </>
                                   }else if(app.id === 2) {
                                    return <>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img4} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img5} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img6} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </>
                                   }else if(app.id === 3) {
                                    return <>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img7} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img8} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={img9} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </>
                                   }else if(app.id === 4) {
                                    return <>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mt-5 mobile">
                                            <Image src={img10} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mt-5 mobile">
                                            <Image src={img11} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mt-5 mobile">
                                            <Image src={img12} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </>
                                   }
                                })()}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
     );
}
 
export default HowAppWors;