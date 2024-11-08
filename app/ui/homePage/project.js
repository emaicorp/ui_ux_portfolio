import ProjectCard from "../components/projectCard"
export default function Projects (){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />
            <ProjectCard label={"project 1"} image={"/projectImages/project.svg"} text={"project 1 text"} />

        </div>
    )
}