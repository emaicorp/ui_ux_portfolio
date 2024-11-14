import * as FaIcons from "react-icons/fa";
import Card from "@/app/ui/components/card";
import HeadingsDiv from "../components/headingDiv";

const Services = ({ animationClass, userdata }) => {
  const services = userdata.services;

  return (
    <div className="animated-container" id="services">
    <div className={`${animationClass ? "slide-in-right" : "slide-out-right"} mt-16 px-20 items-center justify-center`}>
      <HeadingsDiv
        heading="Services"
        content={services.text}
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {Object.entries(services)
          .filter(([key]) => key !== "text")
          .map(([key, service]) => {
            const IconComponent = FaIcons[service.icon]; // dynamically access the icon
            return (
              <Card
                key={key}
                title={service.service}
                description={service.text}
                Icon={IconComponent} // Pass as a component reference
              />
            );
          })}
      </div>
    </div>
    </div>
  );
};

export default Services;
