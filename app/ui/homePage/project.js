import ProjectCard from "../components/projectCard";
import HeadingsDiv from "../components/headingDiv";
export default function Projects({ animationClass, userdata }) {
  const projects = userdata.projects;
  const services = userdata.services;
  return (
    <div
      className={`px-20 ${
        animationClass ? "slide-in-left" : "slide-out-left"
      } `}
    >
      <HeadingsDiv
        className="mt-7 mb-7"
        heading="Projects"
        content={projects.text}
      />
      <div className="flex w-full gap-3 justify-center align-center mt-7 mb-7">
        <button className=" active btn btn-primary">All</button>

        {Object.entries(services)
          .filter(([key]) => key !== "text")
          .map(([key, service]) => (
            <button
              className=" active btn btn-neutral"
              key={key}
              value={service.service}
            >
              {service.service}
            </button>
          ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-7">
  {Object.entries(projects)
    .filter(([key]) => key !== "text")
    .map(([key, project]) => (
      <ProjectCard
        label={project.name}
        image={project.image_url}
        text={project.text}
        key={project.id || project.name + key}  // Use a unique identifier if available
      />
    ))}
</div>

    </div>
  );
}
