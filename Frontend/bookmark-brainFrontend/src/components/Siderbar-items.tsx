import type { ReactElement } from "react"

export function SiderbarItem({text , icon}:{
     text:string,
     icon:ReactElement
}){
     return <div className="flex  text-gray-500 cursor-pointer  hover:bg-gray-200 rounded 
     w-48 pl-3 hover:text-purple-600 transition-all duration-1000">

            <div className="p-2">
                   {icon}
            </div>

             <div className="p-2">
                   {text}
            </div>

             
     </div>
}