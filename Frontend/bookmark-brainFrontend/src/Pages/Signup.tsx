import { Input } from "../components/input"
import { Button } from "../components/Button";
import { Submit } from "../icons/Submit"
import { Logo } from "../icons/Logo"
//import { Signin } from './Signin';
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function Signup() {

  const [loading, setLoading] = useState(false);
  // canect to the backend

  const usernameRef = useRef<HTMLInputElement>(null); 
  const emailRef = useRef<HTMLInputElement>(null); 
  const passwordRef = useRef<HTMLInputElement>(null);

 const navigate =  useNavigate();

  async function signup() {
  const username = usernameRef.current?.value;
  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;

  if (!username || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    setLoading(true); // start loading
     await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      username,
      email,
      password,
    });

    

    alert("You have signed up!");

  } catch (err: any) {


    console.error("Signup error:", err);

    alert(err.response?.data?.message || "Signup failed. Please try again.");
      
    navigate("/dashboard");

  } finally {
    setLoading(false); // stop loading
  }
}



  return <div className="h-screen w-screen bg-purple-300
    flex justify-center items-center">
    <div className="bg-gray-100 rounded-xl border-1 border-gray-100 shadow-lg border min-w-96 h-90">
             
      <div className="flex gap-2 text-xl text-purple-500 pt-4 justify-center items-center mr-5 ">
        <Logo />
       
          <b className="shadow rounded-md border">Second Brain</b>
      </div>

      <div className="  mt-5 rounded-xl pt-5 justify-items-center">
        
        <div>
          <Input reference={usernameRef} placeholder="Username" type="text" />
        </div>
        <div>
          <Input reference={emailRef} placeholder="Email" type="text" />
        </div>
        <div>
          <Input reference={passwordRef} placeholder="Password" type="password" />
        </div>
         
         

      </div>

      <div className="flex justify-center mt-2 mb-12">
        <Button  onClick={signup} variant="primary" styleType="primarystyle" text="Signup" endIcon={<Submit />} fullwidth={true} loading={loading} />
      </div>

    </div>
  </div>
}