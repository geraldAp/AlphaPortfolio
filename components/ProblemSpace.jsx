import Image from "next/image";

const ProblemSpace = ({info1, info2, description1, description2, description3, description4, errorImg, title1, title2, problem1, problem2, problem3, problem4, titleDescription, background}) => {
    return ( 
        <>
            <div className="mt-20 w-full h-auto" id="problem-space">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-[7px] h-[7px] rounded-full bg-grey-color"></div>
                        <p className="text-lg xl:text-sm text-grey-color">Problem Space</p>
                    </div>
                    <div className="mt-5 w-full lg:w-[45%]">
                        <h2 className="text-2xl lg:text-xl font-extrabold lg:font-bold">{title1}</h2>
                        <p className="text-xs text-grey-color mt-1">{info1}</p>
                    </div>
                </div>
                <div className="w-full h-auto lg:h-[300px] flex flex-col gap-5 mt-10">
                    <div className="w-full h-auto lg:h-[50%] gap-10 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[50%] h-full rounded-[20px] p-5 gray__border">
                            <h2 className="text-lg font-bold">{problem1}</h2>
                            <p className="text-sm  text-grey-color mt-3">{description1}</p>
                        </div>
                        <div className="w-full lg:w-[50%] h-full rounded-[20px] p-5 gray__border">
                            <h2 className="text-lg font-bold">{problem2}</h2>
                            <p className="text-sm  text-grey-color mt-3">{description2}</p>
                        </div>
                    </div>
                    <div className="w-full h-[50%] gap-10 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-[50%] h-full rounded-[20px] p-5 gray__border">
                            <h2 className="text-lg font-bold">{problem3}</h2>
                            <p className="text-sm  text-grey-color mt-3">{description3}</p>
                        </div>
                        <div className="w-full lg:w-[50%] h-full rounded-[20px] p-5 gray__border">
                            <h2 className="text-lg font-bold tracking-wider">{problem4}</h2>
                            <p className="text-sm  text-grey-color mt-3">{description4}</p>
                        </div>
                    </div>
                </div>
                <div className={`${background} mt-10 w-full h-[350px] lg:h-[250px] rounded-[30px] px-5 md:px-0 flex flex-col items-start md:items-center justify-center`}> 
                    <Image src={errorImg} sizes="15px" width={50} height={50} priority={true} className="rounded-full" alt="home Essandoh Prince Takyi's portfolio website UI/UX product designer"/>
                    <h1 className="mt-3 text-lg md:text-xl font-bold">{title2}</h1>
                    <p className="text-xs mt-1 text-grey-color">{titleDescription}</p>
                    <p className="text-sm mt-5 text-grey-color text-left md:text-center inline-block w-full md:w-[70%]">{info2}</p>
                </div>
            </div>
        </>
     );
}
 
export default ProblemSpace;