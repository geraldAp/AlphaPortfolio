import Image from "next/image";


const StudentPayHighlight = () => {

    return ( 
        <>
            <div className="mt-20 w-full h-auto" id="highlights">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                        <p className="text-lg xl:text-sm text-grey-color">Highlights</p>
                    </div>
                    <div className="mt-5 w-full lg:w-[40%]">
                        <h2 className="text-2xl lg:text-xl font-bold">Powering Seamless and Snappy <br /> <span className="text-[#FFCE31]">Campus Commerce</span></h2>
                        <p className="text-sm  text-grey-color mt-3">In the dynamic landscape of university life, the need for a seamless financial ecosystem has never been more pressing. Our case study delves into the transformative journey of implementing a cutting-edge fintech app on a university campus, with a particular focus on the vibrant tapestry of transactions that occur daily.</p>
                    </div>
                </div>
                <div className="mt-10 w-full h-[400px] rounded-[30px] flex items-end justify-center bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518] border-[#E7BB2D] border-2"> 
                    <div className="w-[90%] lg:w-[50%] h-[90%] relative">
                        <Image src={'/images/studentpay-img4.svg'} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="studentpay Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        <div className="w-[300px] h-[40px] rounded-[10px] absolute top-[20%] right-[-20%] hidden lg:block">
                            <Image src={"/images/studentpay-img5.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-[300px] h-[40px] rounded-[10px] absolute top-[50%] left-[-20%] hidden lg:block">
                            <Image src={"/images/studentpay-img5.svg"} priority={true} className="object-contain rounded-[30px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-[100px] h-[100px] absolute top-[50%] right-[13%] hidden lg:block">
                            <Image src={"/images/studentpay-img6.svg"} priority={true} className="object-contain rounded-[10px]" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-full h-auto lg:h-[400px] rounded-[30px] flex flex-col-reverse lg:flex-row bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518] border-[#E7BB2D] border-2 lg:border-b-0 pl-0 lg:pl-12">
                    <div className="w-full lg:w-[50%] h-[500px] lg:h-full flex items-center justify-center">
                        <div className="w-[90%] h-full md:h-[80%] flex flex-col gap-5 justify-around lg:justify-between">
                            <div>
                                <h2 className="text-lg font-bold">Elevating the Campus Shopping Experience</h2>
                                <p className="text-sm  text-grey-color mt-2">At the heart of this transformation lies a collaborative effort with local vendors. CampusFin serves as a bridge between students and these vendors, offering them a platform to showcase their products and services</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Instant Connectivity at Your Fingertips</h2>
                                <p className="text-sm  text-grey-color mt-2">In the fast-paced rhythm of university life, staying connected is not just a convenience; it's a necessity. StudentPay introduces the advantage of Quick Airtime and Data Purchase, seamlessly integrated into its multifunctional FinTech app</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto lg:w-[50%] h-[450px] lg:h-[90%] flex justify-end pr-0 lg:pr-9">
                        <div className="w-full lg:w-[300px] h-full relative">
                            <Image src={"/images/studentpay-img23.svg"} priority={true} className="object-contain" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                    </div>
                </div>
                <div className="mt-20 w-full h-auto lg:h-[400px] rounded-[30px] flex items-end justify-center bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518] border-[#E7BB2D] border-2 lg:border-b-0">
                    <div className="w-full lg:w-[90%] h-auto lg:h-[90%] flex flex-col lg:flex-row pt-10 px-5 lg:px-0">
                        <div className="w-full lg:w-[33.333%] flex flex-col justify-between h-full pb-0 lg:pb-16">
                            <div>
                                <h2 className="text-lg font-bold">Financial Education</h2>
                                <p className="text-sm  text-grey-color mt-2">Subject matter experts in finance collaborated to develop engaging and informative financial courses</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mt-5 lg:mt-0">Diverse Curriculum</h2>
                                <p className="text-sm  text-grey-color mt-2">CampusCoin offers a diverse curriculum covering various aspects of personal finance</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[33.333%] h-full relative hidden lg:block">
                            <Image src={"/images/studentpay-img24.svg"} priority={true} className="object-contain" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                        <div className="w-full lg:w-[33.333%] flex flex-col justify-between items-end h-full pl-0 pb-0 lg:pl-5 lg:pb-16">
                            <div>
                                <h2 className="text-lg font-bold mt-10 lg:mt-0">Financial Empowerment</h2>
                                <p className="text-sm  text-grey-color mt-2">The courses emphasize practical application. Students can apply the concepts learned in the courses to their own financial situations</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mt-5 lg:mt-0">Interactive Learning Modules</h2>
                                <p className="text-sm  text-grey-color mt-2">he courses are designed with engaging and interactive learning modules. Students can immerse themselves in quizzes</p>
                            </div>
                        </div>
                        <div className="w-[95%] px-10 mx-auto mt-10 lg:w-[33.333%] h-[450px] lg:h-full relative block lg:hidden">
                            <Image src={"/images/studentpay-img24.svg"} priority={true} className="object-contain" fill sizes="100%" alt="projects Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default StudentPayHighlight;