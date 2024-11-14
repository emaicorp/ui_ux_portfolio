
export default function Link({ref,name}){
    return(
        <a href={ref}  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray- block hover:text-mainColor">{name}</a>

    )
}