import Image from "next/image"
export default function ProjectCard({image , label , text}){
    return(
        <div className="">
            <div>
                <Image
                src={image}
                height={100}
                width={100}
                alt={label}
                />
            </div>
            <div>

            <h5 className="text-mainColor">{label}</h5>
            </div>
            <div>
                <p>{text}</p>
            </div>

        </div>
    )
}