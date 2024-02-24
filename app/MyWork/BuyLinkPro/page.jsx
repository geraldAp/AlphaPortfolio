import EachWorksHeroSection from "../../../components/EachWorksHeroSection";
import MyWorksNavigation from "../../../components/MyWorksNavigation";
import Image from "next/image";

const BuyLinkPro = () => {
    
    return ( 
        <>
            <div className="w-screen h-screen overflow-x-hidden">
                <div className="w-[90%] xl:w-[80%] h-auto relative top-[17%] lg:top-[16.5%] my-0 mx-auto pb-20">
                    <div className="w-full h-full">
                        <MyWorksNavigation/>
                        <div className="w-[90%] lg:w-[80%] h-auto mx-auto lg:mx-0 lg:ml-auto">
                            <EachWorksHeroSection
                            containerStyle = "bg-gradient-to-t from-[#131215] to-[#131218] border-[#201846] border-2 border-b-0"
                            height = "h-auto lg:h-[260px]"
                            imageOne = "/images/buylinkpro-img1.svg"
                            imageTwo = "/images/buylinkpro-img2.svg"
                            imageThree = "/images/buylinkpro-img3.svg"
                            appName = "BuyLink Pro" 
                            description = "Das Alpha - January 2024"
                            overviewOne = "In the fast-paced world of e-commerce, the need for a seamless platform connecting buyers, affiliates, and manufacturers became apparent. Buylink Pro emerged as the solution, providing a unified space for efficient collaboration and streamlined transactions."
                            overviewTwo = "We operate across 4 platforms, namely, buyer app and website with a user dashboard, affiliate marketer app and a manufacturer app"
                            overviewThree = "Buylink Pro stands as a testament to the transformative power of a well-designed platform that brings together buyers, affiliates, and manufacturers in a synergistic partnership, creating a win-win scenario for all stakeholders involved."
                            />
                            <div className="mt-20 w-full" id="highlights">
                                <div className="flex items-center gap-2">
                                    <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                    <p className="text-lg xl:text-sm text-grey-color">Highlights</p>
                                </div>
                                <div className="mt-5 w-full lg:w-[45%]">
                                    <h2 className="text-2xl lg:text-xl font-extrabold lg:font-bold">Elevating the Buyer's Experience</h2>
                                    <p className="text-sm  text-grey-color mt-3">BuyLink Pro prioritizes understanding individual buyer profiles and preferences. Leveraging insights from affiliate marketing activities, BuyLink Pro customizes product recommendations and promotions for each buyer. Affiliates, armed with detailed information, deliver personalized content that resonates with their specific audience. <br /> Customization Features:</p>
                                </div>
                            </div>
                            <div className="mt-10 w-full h-auto lg:h-[500px] rounded-[30px] flex items-end justify-center bg-gradient-to-t from-[#171717] to:[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0">
                                <div className="w-[90%] lg:w-[80%] h-auto lg:h-[80%] flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-[50%] h-[400px] lg:h-full flex flex-col pt-10 lg:pt-0 pb-0 lg:pb-7 justify-between">
                                        <div>
                                            <h2 className="text-bold text-lg">Product Search and Filters</h2>
                                            <p className="text-sm mt-2 text-grey-color">Implement a powerful search functionality with filters for categories, brands, prices, and other relevant criteria.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-bold text-lg">Personalized Recommendations</h2>
                                            <p className="text-sm mt-2 text-grey-color">Utilize algorithms to offer personalized product recommendations based on past purchases, browsing history, and preferences.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-bold text-lg">Secure Checkout and Payment</h2>
                                            <p className="text-sm mt-2 text-grey-color">Subject matter experts in finance collaborated to develop engaging and informative financial courses.</p>
                                        </div>
                                    </div>
                                    <div className="w-[95%] mx-auto lg:w-[50%] h-[500px] lg:h-full relative">
                                        <Image src={"/images/buylinkpro-img4.svg"} className="object-contain rounded-[10px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-[520px] rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 pt-7 overflow-hidden">
                                <h2 className="text-bold text-lg text-center">Track Your Order with Ease</h2>
                                <p className="text-sm mt-2 text-grey-color text-center mx-auto block w-[90%] lg:w-[60%]">Experience peace of mind as your purchase progresses from processing to shipment and delivery. Track, anticipate, and enjoy the journey of your order with confidence.</p>
                                <div className="w-full md:w-[90%] lg:w-full h-[300px] lg:h-[390px] mx-auto overflow-x-auto overflow-y-hidden slider__container">
                                    <div className="w-full h-full mt-3 mx-5 md:mx-auto lg:mx-0 relative">
                                        <Image src={"/images/buylinkpro-img15.svg"} className="object-cover lg:object-contain rounded-[20px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-auto lg:h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 pt-10 pb-10 lg:pb-0 lg:pl-5">
                                <div className="w-full lg:w-[33.333%] h-[300px] lg:h-full px-7 lg:pl-10">
                                    <div className="w-full h-[15%] flex items-center gap-2">
                                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                        <p className="text-lg xl:text-sm text-grey-color">Affiliate Marketer App</p>
                                    </div>
                                    <div className="w-full h-[85%] flex flex-col justify-around">
                                        <div>
                                            <h2 className="text-bold text-lg">Impact on Sales and Revenue</h2>
                                            <p className="text-sm mt-2 text-grey-color">Successful marketing efforts directly contribute to increased sales and revenue for the manufacturer.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-bold text-lg">Industry Expertise</h2>
                                            <p className="text-sm mt-2 text-grey-color">Working as a marketer for a manufacturer allows you to develop in-depth knowledge about a specific industry or product niche.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[250px] mx-auto lg:mx-0 lg:w-[33.333%] h-[400px] my-10 lg:my-0 lg:h-full">
                                    <div className="w-[220px] h-full mx-auto relative">
                                        <Image src={"/images/buylinkpro-img5.svg"} className="object-contain rounded-[10px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                    </div>
                                </div>
                                <div className="w-full lg:w-[33.333%] h-[320px] lg:h-full flex flex-col items-center px-7">
                                    <div className="w-full h-[15%] hidden lg:block"></div>
                                    <div className="w-full h-full lg:h-[85%] flex flex-col justify-around">
                                        <div>
                                            <h2 className="text-bold text-lg">Networking Opportunities</h2>
                                            <p className="text-sm mt-2 text-grey-color block w-full lg:w-[90%]">Working in manufacturing provides opportunities to build a professional network within the industry. </p>
                                        </div>
                                        <div>
                                            <h2 className="text-bold text-lg">Global Perspective</h2>
                                            <p className="text-sm mt-2 text-grey-color block w-full lg:w-[90%]">Many manufacturing companies operate on a global scale. Working in this environment exposes you to international markets, diverse consumer behaviors, and global marketing trends, broadening your perspective.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-auto lg:h-[500px] flex justify-center items-center rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 pt-0 lg:pt-10">
                                <div className="w-full flex flex-col lg:flex-row lg:w-[90%] h-auto lg:h-[95%]">
                                    <div className="w-full lg:w-[50%] h-[450px] lg:h-full mx-7 lg:mx-0">
                                        <div className="flex flex-col gap-0 lg:gap-5 mt-5 lg:mt-0">
                                            <div className="w-full h-auto lg:h-[15%] flex items-center gap-2">
                                                <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                                <p className="text-lg xl:text-sm text-grey-color">Manufacturer / Company App</p>
                                            </div>
                                            <p className="text-sm text-grey-color block w-[80%] mt-2 lg:mt-0">Manufacturers can hire marketers on their app to promote their products. The following are metrics that could be used</p>
                                        </div>
                                        <div className="w-full h-[300px] lg:h-[85%] flex flex-col gap-6 lg:gap-0 justify-around">
                                            <div className="mt-7 lg:mt-0">
                                                <h2 className="text-bold text-lg">Conversion Rates</h2>
                                                <p className="text-sm mt-2 text-grey-color block w-[80%]">Evaluate the historical conversion rates of affiliate marketers. High conversion rates indicate effective marketing strategies and audience engagement.</p>
                                            </div>
                                            <div>
                                                <h2 className="text-bold text-lg">Traffic Sources</h2>
                                                <p className="text-sm mt-2 text-grey-color block w-[80%]">Understand the sources of traffic that affiliates bring to the manufacturer's app. This analysis helps in identifying the most effective marketing channels.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[50%] h-[450px] lg:h-full">
                                        <div className="w-[90%] h-full mx-auto relative">
                                            <Image src={"/images/buylinkpro-img6.svg"} className="object-contain rounded-[10px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-[520px] flex justify-center rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 pt-10">
                                <div className="w-full overflow-hidden">
                                    <div className="w-full px-5">
                                        <h2 className="text-bold text-lg text-center">Navigate Your Dashboard Adventure</h2>
                                        <p className="text-sm mt-2 text-grey-color text-center">Embark on a journey of creative expression with our Buyer Dashboard</p>
                                    </div>
                                    <div className="w-full md:w-[90%] lg:w-full h-[320px] mx-auto lg:h-[400px] overflow-x-auto overflow-y-hidden slider__container">
                                        <div className="w-full h-full rounded-t-[30px] mt-7 mx-5 md:mx-auto lg:mx-0 relative">
                                            <Image src={"/images/buylinkpro-img16.svg"} className="object-cover lg:object-contain rounded-t-[30px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-[500px] rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 pt-10 pl-0 overflow-hidden">
                                <div className="w-full h-full flex gap-7 overflow-x-auto slider__container">
                                <div className="lg:w-[50%] h-full flex flex-col items-end pl-0 lg:pl-20 img__slider__box">
                                    <div className="w-full h-[40%] pl-5 lg:pl-0">
                                        <h2 className="text-bold text-lg">User-Friendly Cart Interface</h2>
                                        <p className="text-sm mt-2 text-grey-color block w-[80%]">A well-designed cart interface is crucial for a positive user experience. It should be intuitive, allowing buyers to easily add, remove, or update quantities of products.</p>
                                    </div>
                                    <div className="w-full h-[60%] md:h-[80%] lg:h-[60%] pl-5 lg:pl-0">
                                        <div className="w-full h-full relative">
                                            <Image src={"/images/buylinkpro-img7.svg"} className="object-cover rounded-t-[20px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-[50%] h-full flex flex-col items-start pr-0 lg:pr-20 img__slider__box">
                                    <div className="w-full h-[40%] pl-5 lg:pl-0">
                                        <h2 className="text-bold text-lg">Shipping Options and Cost Transparency</h2>
                                        <p className="text-sm mt-2 text-grey-color block w-[80%]">Offer various shipping options with transparent cost breakdowns. Buyers appreciate knowing shipping fees upfront, helping them make informed decisions during the checkout process.</p>
                                    </div>
                                    <div className="w-full h-[60%] md:h-[80%] lg:h-[60%] pl-5 lg:pl-0">
                                        <div className="w-full h-full relative">
                                            <Image src={"/images/buylinkpro-img8.svg"} className="object-cover rounded-t-[20px]" fill sizes="100%" alt="projects buylink pro Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-[600px] lg:h-[500px] flex flex-col rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 px-0 lg:px-20">
                                <div className="w-full h-[30%] flex flex-col justify-center gap-1 px-5 lg:pl-10">
                                    <div className="w-full flex items-center gap-2">
                                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                        <p className="text-lg xl:text-sm text-grey-color">Affiliate Marketer App</p>
                                    </div>
                                    <h2 className="text-bold text-lg mt-3">User-Friendly Store Builder</h2>
                                    <p className="text-sm text-grey-color">Provide a simple and intuitive interface for affiliate marketers to create their online stores.</p>
                                </div>
                                <div className="w-full h-[300px] lg:h-[80%] mt-12 lg:mt-0 overflow-hidden">
                                    <div className="w-full h-full flex overflow-y-hidden overflow-x-auto lg:overflow-hidden slider__container">
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img9.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img10.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img11.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 w-full h-[600px] lg:h-[500px] flex flex-col rounded-[30px] bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#131215] lg:to-[#131218] border-[#201846] border-2 lg:border-b-0 px-0 lg:px-20">
                                <div className="w-full h-[30%] flex flex-col justify-center mt-3 lg:mt-0 gap-1 px-5 lg:pl-10">
                                    <div className="w-full flex items-center gap-2">
                                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                                        <p className="text-lg xl:text-sm text-grey-color">ManufaMarketer App</p>
                                    </div>
                                    <h2 className="text-bold text-lg mt-3">Search and sort out affiliate marketers</h2>
                                    <p className="text-sm text-grey-color">This helps manufacturers search for affiliate marketers to promote their product and business</p>
                                </div>
                                <div className="w-full h-[300px] lg:h-[80%] mt-12 lg:mt-0 overflow-hidden">
                                    <div className="w-full h-full flex overflow-y-hidden overflow-x-auto lg:overflow-hidden slider__container">
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img12.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img13.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                                        </div>
                                        <div className="w-[33.333%] h-full relative overflow-x-hidden mobile">
                                            <Image src={"/images/buylinkpro-img14.svg"} className="object-contain" fill sizes="100%" alt="app Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
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
 
export default BuyLinkPro;