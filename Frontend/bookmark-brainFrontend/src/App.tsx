
import {Siderbar} from"./components/Siderbar";

import{Signup} from "./Pages/Signup";
import {Signin} from "./Pages/Signin";
import {Sharelink} from "./Pages/Sharelinkpage"
import {CreateContent} from "./components/CreateContent";
 import{Dashboard} from "./Pages/Allcontents"


import { BrowserRouter,  Route, Routes} from 'react-router-dom';
function App() {
    
  return(
             
          <BrowserRouter>
             
                   
             <Routes>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/createcontent" element={<CreateContent open={true} onClose={() => {}} />} />
                <Route path ="/sharelink1" element={<Sharelink/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                
             </Routes>
          
          
          </BrowserRouter>       

        
      )     
       
  
}

export default App
