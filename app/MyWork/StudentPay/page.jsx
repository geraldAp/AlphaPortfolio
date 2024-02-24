import EachWorksHeroSection from "../../../components/EachWorksHeroSection";
import MyWorksNavigation from "../../../components/MyWorksNavigation";
import HowAppWorks from "../../../components/HowAppWorks";
import ProblemSpace from "../../../components/ProblemSpace";
import StudentPayHighlight from "../../../components/StudentPayHighlight";
import Image from "next/image";

const StudentPay = () => {
    return ( 
        <>
            <div className="w-screen h-screen overflow-x-hidden">
                <div className="w-[90%] xl:w-[80%] h-auto relative top-[17%] lg:top-[16.5%] my-0 mx-auto pb-20">
                    <div className="w-full h-full">
                        <MyWorksNavigation/>
                        <div className="w-[90%] lg:w-[80%] h-auto mx-auto lg:mx-0 lg:ml-auto">
                            <EachWorksHeroSection
                            containerStyle = "bg-gradient-to-t from-[#161613] to-[#3E3518] border-[#E7BB2D] border-2 border-b-0"
                            height = "h-auto lg:h-[240px]"
                            imageOne = "/images/studentpay-img1.svg"
                            imageTwo = "/images/studentpay-img2.svg"
                            imageThree = "/images/studentpay-img3.svg"
                            appName = "StudentPay" 
                            description = "Disruptive Club - January 2024"
                            overviewOne = "StudentPay is a revolutionary fintech app designed to enhance the financial well-being of university students. Developed in collaboration with local vendors, financial experts, and technology enthusiasts, the app aims to streamline on-campus transactions, provide valuable financial education, and foster a sense of financial responsibility among students."
                            overviewTwo = "StudentPay successfully addressed the financial needs of university students, creating a digital ecosystem that not only streamlined transactions but also contributed to the financial education and well-being of the campus community."
                            />
                            
                            {/*------STUDENT PAY HIGHLIGHT-------*/}
                            <StudentPayHighlight/>

                            {/*------PROBLEM SPACE SECTION-------*/}
                            <ProblemSpace
                            background = "bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518]"
                            title = "Revolutionizing Campus Life"
                            info1 = "From Transactions to Transformation - A Fintech Solution for Student Success"
                            problem1 = "Cash Dependency and Inconvenience"
                            problem2 = "Lack of Financial Literacy"
                            problem3 = "Limited Job Opportunities"
                            problem4 = "Ineffective Rewards Systems"
                            description1 = "Many students on campus rely heavily on cash transactions, leading to inconveniences such as long queues, difficulty in making small purchases, and increased vulnerability to theft."
                            description2 = "Students often enter university with limited knowledge of personal finance, leading to poor budgeting, overspending, and financial stress."
                            description3 = "Students often face challenges in finding suitable part-time job opportunities on or around campus, impacting their financial stability."
                            description4 = "raditional referral programs lack innovation and fail to engage students effectively, resulting in low participation rates."
                            errorImg = "/images/error.svg"
                            title2 = "Fragmented Vendor Transactions"
                            info2 = "Campus vendors operate with diverse systems, resulting in a fragmented purchasing experience for students. This can lead to confusion, delays, and inefficiencies."
                            />

                            {/*------HOW THE APP WORKS---------  */}
                            <HowAppWorks
                            containerStyle = "bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518] border-[#E7BB2D] border-2 lg:border-b-0"
                            title = "Revolutionizing Campus Finance"
                            info = "Unlock the Magic: Your Campus Life, Transformed! Discover How Student{ay Weaves Financial Wizardry, Sparks Seamless Transactions, and Unleashes a World of Opportunities at Your Fingertips"
                            function1 = " Navigate Your Onboarding Adventure"
                            function2 = "Unlocking Trust"
                            function3 = "Streamline Transaction"
                            function4 = "Elevating Transactions with Seamless Simplicity"
                            description1 = "Brace yourselves as we embark on a transformative adventure"
                            description2 = "A Voyage Through the Authentication Chronicles"
                            description3 = "Simplify  transactions by offering a secure and convenient mobile payment solution"
                            description4 = "In the realm of modern transactions, StudentPay introduces the game-changing feature of Scan and Pay"
                            img1 = "/images/studentpay-img8.svg"
                            img2 = "/images/studentpay-img9.svg"
                            img3 = "/images/studentpay-img10.svg"
                            img4 = "/images/studentpay-img11.svg"
                            img5 = "/images/studentpay-img12.svg"
                            img6 = "/images/studentpay-img13.svg"
                            img7 = "/images/studentpay-img14.svg"
                            img8 = "/images/studentpay-img15.svg"
                            img9 = "/images/studentpay-img16.svg"
                            img10 = "/images/studentpay-img17.svg"
                            img11 = "/images/studentpay-img18.svg"
                            img12 = "/images/studentpay-img19.svg"
                            />
                            <div className="mt-20 w-full h-[500px] rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#161613] lg:to-[#3E3518] border-[#E7BB2D] border-2 lg:border-b-0">
                                <div className="w-full lg:w-[80%] h-full mx-auto overflow-x-hidden">
                                    <div className="flex flex-col gap-1 justify-center w-full h-[90px] lg:h-[80px] px-7 lg:px-12 pt-5">
                                        <h1 className="font-bold text-lg text-center lg:text-left">Earn, Learn And Pay</h1>
                                        <p className="text-sm text-grey-color text-center lg:text-left">Brace yourselves as we embark on a transformative adventure</p>
                                    </div>
                                    <div className="w-full h-[350px] flex pb-10 gap-1 lg:gap-0 mt-7 lg:mt-5 overflow-y-hidden overflow-x-auto lg:overflow-hidden slider__container">
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/studentpay-img20.svg"} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/studentpay-img21.svg"} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/studentpay-img22.svg"} priority={true} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
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
 
export default StudentPay;