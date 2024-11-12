

export default function HeadingsDiv ({heading , content}){
    return(
        <div className="items-center justify-center flex flex-col">
        <h1 className="head-text text-center">
            {heading}
        </h1>
        <p className="text-center w-1/2">{content}</p>

    </div>
    )
}