import Image from "next/image";
import Link from "../components/link";

export default function Footer({link,userdata}) {
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="logo text-white h-100 w-[130px] mx-auto mb-5">
        <Image
          src={userdata.logo}
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
          alt="Temzy Designer"
          className=""
        />
      </div>

      <div className="nav-items flex-grow text-center block  mb-2">
        <ul className="flex justify-center space-x-6">
        {link.map((links,index) => (
                <li className="text-white" key={index}><Link ref= {links.path} name={links.text}  /></li>
    
            ))}
        
        </ul>
      </div>

      <div className="quick-actions md:block space-x-4  mx-auto">
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
      <div className="bg-black text-center mt-5 p-4">
        <p>&copy; {new Date().getFullYear()} <span className="text-mainColor">Gift Olungwe</span> All Rights Reserved</p>
      </div>
    </div>
  );
}
