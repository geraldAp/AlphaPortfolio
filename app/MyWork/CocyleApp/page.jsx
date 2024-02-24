import EachWorksHeroSection from "../../../components/EachWorksHeroSection";
import MyWorksNavigation from "../../../components/MyWorksNavigation";
import CocyleHighlight from "../../../components/CocyleHighlight";
import ProblemSpace from "../../../components/ProblemSpace";
import HowAppWorks from "../../../components/HowAppWorks";

const CocyleApp = () => {

    return ( 
        <>
            <div className="w-screen h-screen overflow-x-hidden cocyle">
                <div className="w-[90%] xl:w-[80%] h-auto relative top-[17%] lg:top-[16.5%] my-0 mx-auto pb-20">
                    <div className="w-full h-full">
                        {/*----------NAVIGATION FOR COCYLE APP PAGE-------*/}
                        <MyWorksNavigation/>
                        <div className="w-[90%] lg:w-[80%] h-auto mx-auto lg:mx-0 lg:ml-auto">
                            {/*------HERO SECTION FOR COCYLE PAGE----------*/}
                            <EachWorksHeroSection
                            containerStyle = "bg-gradient-to-t from-[#121412] to-[#192914] border-[#4B6E29] border-2 border-b-0"
                            height = "h-auto lg:h-[200px]"
                            imageOne = "/images/cocyle-img1.svg"
                            imageTwo = "/images/cocyle-img2.svg"
                            imageThree = "/images/cocyle-img3.svg"
                            projectImageOne = "/images/cocyle-img4.svg"
                            appName = "Cocyle App" 
                            description = "Bismuth Inc. - January 2024"
                            overviewOne = "Join us in the journey to a greener, more sustainable world. Take the first step towards minimizing your carbon footprint and making a lasting impact on the planet. Our app is here to help you make a difference."
                            overviewTwo = "With Cocycle, giving and reducing your carbon footprint are seamlessly integrated into one meaningful experience.    Start making a difference today by downloading our app and taking the first step toward a brighter, cleaner, and kinder future for all."
                            />
                            {/*------HIGHLIGHT SECTION-----------*/}
                            <CocyleHighlight/>

                            {/*------PROBLEM SPACE SECTION-------*/}
                            <ProblemSpace
                            background = "bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#121412] lg:to-[#192914]"
                            title1 = "Unlocking a Greener Tomorrow"
                            info1 = "Unveiling the Challenges in College Donations and Sustainability"
                            problem1 = "Lack of Transparency in Donation Impact:"
                            problem2 = "Lack of Engagement and Awareness:"
                            problem3 = "Lack of Transparency in Donation Impact:"
                            problem4 = "Limited Funding for Educational Institutions"
                            description1 = "Donors often lack visibility into how their contributions positively impact the environment or the community."
                            description2 = "Many individuals may not be aware of the environmental impact associated with traditional donation methods or lack motivation to make sustainable choices."
                            description3 = "Donors often lack visibility into how their contributions positively impact the environment or the community."
                            description4 = "Colleges often face financial challenges, relying on donations for various programs and improvements."
                            errorImg = "/images/error.svg"
                            title2 = "Breaking Barriers, Building Bridges"
                            titleDescription = "The Challenge of Efficiently Connecting NGOs with Donors"
                            info2 = "In the realm of philanthropy, the vital link between non-governmental organizations (NGOs) and donors is essential for driving positive change. However, this connection often encounters hurdles that impede the seamless flow of support."
                            />

                            {/*------HOW THE APP WORKS---------  */}
                            <HowAppWorks
                            containerStyle = "bg-gradient-to-t from-[#171717] to-[#171717] lg:from-[#121412] lg:to-[#192914] border-[#4B6E29] border-2 lg:border-b-0"
                            title = "Intuitive design to facilitate easy navigation"
                            info = "With Cocycle, giving and reducing your carbon footprint are seamlessly integrated into one meaningful experience. Start making a difference today by downloading our app and taking the first step toward a brighter, cleaner, and kinder future for all."
                            function1 = "Embark on the Journey"
                            function2 = "Unlocking Trust"
                            function3 = "Explore Donations"
                            function4 = "Track Your Carbon Footprint"
                            description1 = "Navigating the Onboarding Odyssey in Our Case Study Adventure"
                            description2 = "A Voyage Through the Authentication Chronicles"
                            description3 = "Make A Request for donations"
                            description4 = "Up to date details of your personal and college footprint"
                            img1 = "/images/cocyle-img15.svg"
                            img2 = "/images/cocyle-img16.svg"
                            img3 = "/images/cocyle-img17.svg"
                            img4 = "/images/cocyle-img18.svg"
                            img5 = "/images/cocyle-img19.svg"
                            img6 = "/images/cocyle-img20.svg"
                            img7 = "/images/cocyle-img21.svg"
                            img8 = "/images/cocyle-img22.svg"
                            img9 = "/images/cocyle-img23.svg"
                            img10 = "/images/cocyle-img24.svg"
                            img11 = "/images/cocyle-img25.svg"
                            img12 = "/images/cocyle-img26.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CocyleApp;