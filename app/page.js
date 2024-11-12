import Image from "next/image";
import NavBar from "@/app/ui/includes/navBar"
import HerosSection from "./ui/homePage/hero";
import AboutMe from "./ui/homePage/aboutMe";
import Services from "./ui/homePage/services";
import Projects from "./ui/homePage/project";
import Testimonials from "./ui/homePage/testimonials";
import Contact from "./ui/homePage/contact";

export default function Home() {
  return (
    <div>
      <div className="mt-36"></div>
<NavBar/>
<HerosSection/>
<AboutMe/>
<Services/>
<Projects/>
<Testimonials/>
<Contact/>
    </div>
    
  );
}
