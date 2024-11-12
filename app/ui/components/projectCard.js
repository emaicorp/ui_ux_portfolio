import Image from "next/image"
export default function ProjectCard({image , label , text}){
    return(
        <div className="w-full">
            <div className="rounded ">
                <Image
                src={image}
                height={0}
                width={0}
                alt={label}
                style={{width :'100%',height : '100%'}}
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