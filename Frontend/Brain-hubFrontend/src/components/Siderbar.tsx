import {SiderbarItem} from "./Siderbar-items.js"
import {TwitterIcon} from "../icons/Twitter.js";
import{YoutubeIcon} from "../icons/Youtube.js";
import{LinkIcon}   from "../icons/Link.js";
import{DocumentIcon} from "../icons/Document.js";
import{TagIcon}  from "../icons/Tag.js";
import {Logo} from "../icons/Logo.js"



export function Siderbar(){
        


    return <div className="h-screen bg-white border-r border-gray-300 rounded  w-80 left-0 top-0 ">
         
          <div className="flex gap-2 text-xl  pt-6 items-center pl-6">
                <Logo/>
               <b className="text-purple-600 text-2xl">Second Brain</b> 
          </div>

        <div className="pt-8 ">  
              <SiderbarItem text="Twitter" icon={<TwitterIcon />} />
              <SiderbarItem text="Videos" icon={<YoutubeIcon/>}/>
              <SiderbarItem text="Documents" icon={<DocumentIcon/>}/>
              <SiderbarItem text="Link" icon={<LinkIcon/>}/>
              <SiderbarItem text="Tag" icon={<TagIcon/>}/>
        </div>

    </div>
}