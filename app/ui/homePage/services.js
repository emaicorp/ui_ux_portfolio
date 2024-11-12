import Card from "@/app/ui/components/card";
import { FaLaptop, FaMobileAlt, FaPencilRuler, FaVectorSquare } from 'react-icons/fa';
import HeadingsDiv from "../components/headingDiv";
const Services = () => {
  return (
    <div className=" mt-5 px-20 items-center justify-center">
      <HeadingsDiv 
      heading="Services"
      content="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
    
        <div>
            <p></p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <Card
          title="UI/UX"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          Icon={FaPencilRuler}
        />
        <Card
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          Icon={FaLaptop}
        />
        <Card
          title="App Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          Icon={FaMobileAlt}
        />
        <Card
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          Icon={FaVectorSquare}
        />
      </div>
    </div>
  );
};

export default Services;
