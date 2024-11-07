import Image from "next/image";
import NavBar from "@/app/ui/includes/navBar"
import HerosSection from "./ui/homePage/hero";
import AboutMe from "./ui/homePage/aboutMe";
import Services from "./ui/homePage/services";

export default function Home() {
  return (
    <div>
      <div className="mt-36"></div>
<NavBar/>
<HerosSection/>
<AboutMe/>
<Services/>
    </div>
    
  );
}
