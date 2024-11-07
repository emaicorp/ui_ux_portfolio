import Image from "next/image";

export default function AboutMe (){
    return(
        <div className="container px-20 mt-5">
            <div className="grid grid-cols-2 ">
                <div className="relative h-[476px]">
                    <Image
                    src="/userImages/hero_image2.svg"
                    layout="fill"
                    alt="about Me Image"
                    className="relative"

                    />
                </div>
                <div className="">
                    <h1>About Me</h1>
                    <p></p>
                </div>

            </div>

        </div>
    )
}