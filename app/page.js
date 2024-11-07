import Image from "next/image";
import NavBar from "@/app/ui/includes/navBar"
import HerosSection from "./ui/homePage/hero";
import AboutMe from "./ui/homePage/aboutMe";

export default function Home() {
  return (
    <div>
      <div className="mt-36"></div>
<NavBar/>
<HerosSection/>
<AboutMe/>
    </div>
    
  );
}
