import ProjectCard from "../components/projectCard"
import HeadingsDiv from "../components/headingDiv"
export default function Projects ({animationClass}){
    return (
        <div className={`px-20 ${animationClass ? 'slide-in-left' : 'slide-out-left'} `}>
             <HeadingsDiv 
             className="mt-7 mb-7"
      heading="Projects"
      content="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="flex w-full gap-3 justify-center align-center mt-7 mb-7">
        <button className=" active btn btn-neutral">All</button>
        <button className=" active btn btn-neutral">UI/UX</button>
        <button className=" active btn btn-primary">Web Design</button>
        <button className=" active btn btn-neutral">App Design</button>
        <button className=" active btn btn-neutral">Graphics Design</button>



      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-7">
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />

        </div>
        </div>
    )
}