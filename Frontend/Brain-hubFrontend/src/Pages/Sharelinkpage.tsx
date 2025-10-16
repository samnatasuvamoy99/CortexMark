import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";




export function Sharelink() {

  const location = useLocation();
  const shareurl = location.state?.shareurl ?? "No link provided";

 const navigate = useNavigate();
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shareurl); // modern way
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
    navigate("/dashboard");
  }

  return <div className=" w-screen h-screen bg-purple-300 flex justify-center items-center">
    <div className="w-46 bg-gray-100 min-w-96 h-90 rounded-lg  shadow-lg border border-gray-300  hover-border-2 hover:border-purple-600">

      <div className="flex gap-2 text-xl text-purple-500 pt-4 justify-center items-center mr-5 ">
        <Logo />
        <b className="shadow rounded-md border">Second Brain</b>
      </div>
   
           <div className="items-center pt-8">
                 <b  className="flex justify-center"> Copy the link and share </b>

                  
                    <span className="text-sm text-gray-600 flex justify-center pt-2 break-all">{shareurl}</span>
                    
                     <div className="flex justify-center p-8">
                              <button
            onClick={copyToClipboard}
            className="px-3  shadow-xl  py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
           Copy
            
        </button>
                    
                     </div>
                
                
           </div>

    </div>

  </div>
}