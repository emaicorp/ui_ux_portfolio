import Image from "next/image"
export default function HerosSection (){
    return (
        <div className="container px-20 mt-5">
            <div className ="md:grid grid-cols-2  gap-x-4 text-white gap-4  h-fit  ">
                <div className="  ">
                    <p className="md:text-[24px]">Hi I am</p>
                    <h6 className="text-mainColor md:text-[32px]">Gift Temzy</h6>
                    <div className="leading-[10px] flex md:block space-x-3 md:space-x-0">
                    <h1 className="md:text-[80px] leading-[80px] font-[1000]">UI & UX</h1>
                    <h1 className="md:text-[80px] leading-[80px] font-[1000] mx-48">Designer</h1>
                    </div>
                    <p className="w-100 mt-5">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                    </p>
                    <button className="btn btn-primary w-[188px] mt-5">Hire Me</button>
                    </div>
                    <div className="h-[476px] w-full" >
                        <div className="w-full h-[90%]">
                            <Image
                                src='/userImages/hero_image.svg'
                                // layout="fill"
                                width={0}
                                height={0}
                                alt="User Image 1"
                                className="object-contain relative"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="flex justify-center space-x-4  text-center  mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/linksImage/Facebook.svg"
                                    width={20}
                                    height={20}
                                    alt="Facebook"
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/linksImage/Instagram.svg"
                                    width={20}
                                    height={20}
                                    alt="Instagram"
                                />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/linksImage/LinkedIn.svg"
                                    width={20}
                                    height={20}
                                    alt="LinkedIn"
                                />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/linksImage/Twitter.svg"
                                    width={20}
                                    height={20}
                                    alt="Twitter"
                                />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
    )
}