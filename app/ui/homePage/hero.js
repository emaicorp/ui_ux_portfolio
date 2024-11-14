import Image from "next/image";
export default function HerosSection({ animationClass, userdata }) {
  return (
    <div className="animated-container ">
      <div
        className={`${
          animationClass ? "slide-in" : "slide-out"
        } container px-20 mt-5`}
      >
        <div className="grid grid-cols-2  gap-x-4 text-white gap-4  h-fit  ">
          <div className="  ">
            <p className="md:text-[24px]">Hi I am</p>
            <h6 className="text-mainColor md:text-[32px]">{userdata.name}</h6>
            <div className="md:leading-[10px]">
              <h1 className="md:text-[80px] md:leading-[80px] font-[1000]">
                {userdata.first_work}
              </h1>
              <h1 className="md:text-[80px] md:leading-[80px] font-[1000] mx-11 md:mx-48">
                {userdata.second_work}
              </h1>
            </div>
            <p className="w-100 mt-5">{userdata.intro_text}</p>
            <a type="button" href="#contact" className="btn btn-primary w-[158px] text-center mt-5 cursor-pointer block">Hire Me</a>
            
          </div>
          <div className="h-[476px] w-full">
            <div className="w-full h-[90%] z-[-999]">
              <Image
                src={userdata.images.hero_url}
                // layout="fill"
                width={0}
                height={0}
                alt="User Image 1"
                className="object-contain relative"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex justify-center space-x-4  text-center  mt-4">
              <a
                href={userdata.social_links.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linksImage/Facebook.svg"
                  width={20}
                  height={20}
                  alt="Facebook"
                />
              </a>
              <a
               href={userdata.social_links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linksImage/Instagram.svg"
                  width={20}
                  height={20}
                  alt="Instagram"
                />
              </a>
              <a
               href={userdata.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linksImage/LinkedIn.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
              </a>
              <a
                href={userdata.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
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
    </div>
  );
}
