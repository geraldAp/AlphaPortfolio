import Image from "next/image";

const CocyleHighlight = () => {

    return ( 
        <>
            <div className="mt-20 w-full h-auto" id="highlights"> 
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                        <p className="text-lg xl:text-sm text-grey-color">Highlights</p>
                    </div>
                    <div className="mt-5 w-full lg:w-[45%]">
                        <h2 className="text-2xl lg:text-xl font-extrabold lg:font-bold">Track Your <span className="text-[#398D1C]">Carbon</span> Footprints</h2>
                        <p className="text-sm  text-grey-color mt-3">We believe that seeing your impact is essential for motivation. Our app provides visual representations of your carbon savings, such as the number of trees planted, equivalent car miles not driven, or the reduction in your carbon footprint over time. You can watch your positive impact grow.</p>
                    </div>
                </div>
                <div className="mt-10 w-full h-[250px] lg:h-[400px] rounded-[30px] relative">  
                    <Image src={"/images/cocyle-img4.svg"} priority={true} className="object-fill md:object-cover rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                </div>
                <div className="mt-20 w-full h-[400px] rounded-[30px] flex justify-center items-end bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#121412] lg:to-[#192914] border-[#4B6E29] border-2 lg:border-b-0">
                    <div className="w-[90%] lg:w-[50%] h-[90%] relative">
                        <Image src={"/images/cocyle-img5.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        <div className="w-[300px] h-[40px] rounded-[10px] absolute top-[30%] left-[-20%] hidden lg:block">
                            <Image src={"/images/cocyle-img6.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-[300px] h-[40px] rounded-[10px] absolute top-[70%] left-[-20%] hidden lg:block">
                            <Image src={"/images/cocyle-img7.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-[300px] h-[40px] rounded-[10px] absolute top-[50%] right-[-20%] hidden lg:block">
                            <Image src={"/images/cocyle-img7.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-full h-[430px] lg:h-[400px] rounded-[30px] flex flex-col bg-gradient-to-t from-[#121412] to-[#192914] border-[#4B6E29] border-2 lg:border-b-0 pb-7 lg:px-20 lg:pt-5 lg:pb-5">
                    <div className="w-full h-[35%] flex">
                        <div className="w-full lg:w-[50%] h-full pt-5 lg:pt-0">
                            <h2 className="text-bold text-center lg:text-left text-xl lg:text-base">Your to-go Donation App</h2>
                            <p className="text-sm mt-2 text-grey-color px-5 lg:px-0 text-center lg:text-left inline-block w-full lg:w-[60%]">Once you've chosen your cause, you can make a secure and convenient donation directly from the app.</p>
                        </div>
                        <div className="w-[50%] h-full hidden lg:flex justify-end">
                            <div className="w-[250px] h-[100px] rounded-[10px] relative">
                                <Image src={"/images/cocyle-img9.svg"} priority={true} className="object-cover rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[65%] flex overflow-hidden pl-5 lg:pl-0 overflow-x-auto slider__container">
                        <div className="w-[33.333%] h-full relative img__slider__box">
                            <Image src={"/images/cocyle-img10.svg"} priority={true} className="object-fill lg:object-cover rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-[33.333%] h-full flex justify-center img__slider__box">
                            <div className="w-[70%] h-[60%] relative">
                                <Image src={"/images/cocyle-img11.svg"} priority={true} className="object-contain  rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                            </div>
                        </div>
                        <div className="w-[33.333%] h-full relative img__slider__box">
                            <Image src={"/images/cocyle-img12.svg"} priority={true} className="object-fill lg:object-cover rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-full h-[400px] rounded-[30px] flex justify-center items-center bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#121412] lg:to-[#192914] border-[#4B6E29] border-2 lg:border-b-0 overflow-hidden">
                    <div className="w-full lg:w-[70%] h-[90%] lg:h-[80%] flex flex-col justify-between">
                        <div className="w-full h-[30%] pt-5 lg:pt-0">
                            <h2 className="text-bold text-center lg:text-left text-xl lg:text-base">Visualize Your Impact</h2>
                            <p className="text-sm mt-2 px-5 lg:px-0 text-center lg:text-left text-grey-color inline-block w-full lg:w-[70%]">We believe that seeing your impact is essential for motivation. Our app provides visual representations of your carbon savings</p>
                        </div>
                        <div className="w-full h-[60%] lg:h-[70%] gap-10 pl-5 lg:pl-0 flex overflow-x-auto slider__container">
                            <div className="w-[50%] h-full relative img__slider__box">
                                <Image src={"/images/cocyle-img13.svg"} priority={true} className="object-fill lg:object-cover rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                            </div>
                            <div className="w-[50%] h-full relative img__slider__box">
                                <Image src={"/images/cocyle-img14.svg"} priority={true} className="object-fill lg:object-cover rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CocyleHighlight;