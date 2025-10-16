
import { ShareIcon } from "../icons/Shareicon";
import {Deletecard} from "../icons/deletecard";

interface Cardprops{
        title: string,
        link: string,
        type: "twitter"|"youtube"
}
export function Card( {title , link , type}:Cardprops) {
       


  return <div>
      <div className="p-4 bg-white rounded-md border 
        border-gray-200 hover:border-2
        hover:border-purple-300
        w-64 h-80 overflow-hidden flex flex-col">
         <div className="flex justify-between ">

           <div className="flex items-center text-md">
                  <div className="text-gray-500 pt-1 pr-3">
                     <ShareIcon/> 
                  </div>
                <p>{title}</p>

           </div >

           <div className="flex items-center">
                <div className="pr-2">
                     <a href={link} 
                    target="_blank" 
              className="p-2 rounded-md">
                <ShareIcon  />
                     </a> 
                </div>

                 <div className=" hover:text-red-500" >
                  <Deletecard/>

                  </div>  
                   
           </div>
                        
         </div>

          <div className="pt-3">
             
             {type === "youtube" && link && (
  <iframe
    className="w-full"
    src={link.replace("watch", "embed").replace("?v=", "/")}
    title="YouTube video player"
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
)}

{type === "twitter" && link && (
  <blockquote className="twitter-tweet  ">
    <a href={link.replace("x.com", "twitter.com")}></a>
  </blockquote>
)}
 
   </div> 
                   
      </div>

    </div>
  
}




































































