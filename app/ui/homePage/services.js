import Card from "@/app/ui/components/card";
import { FaLaptop, FaMobileAlt, FaPencilRuler, FaVectorSquare } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen mt-5 px-20 items-center justify-center">
        <div className="items-center justify-center flex flex-col">
            <h1 className="head-text text-center">
                Services
            </h1>
            <p className="text-center w-1/2">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

        </div>
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
