import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService, { RegisterResponse } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";

const Signup = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [confirmPassword,setConfirmPassword] = useState<string>("")

  const { mutate,reset} = useMutation({mutationFn:authService.register});


  const onRegisterSuccess = useCallback((responseData:RegisterResponse)=>{
    
      const {success,message} = responseData;
           if(success){
           console.log(message);
            navigate("/login");
           }else{
            console.error("ERROR WHILE REGISTERING. PLEASE TRY AGAIN");
           }
  },[])

  const onRegisterError = (error)=>{
    console.error(`ERROR WHILE REGISTERING. PLEASE TRY AGAIN, ${error}`);

}

const handleRegister = useCallback((username:string,password:string)=>{
  console.log("username",username)
  console.log("password",password)

  mutate(
   {
     username,
     password:window.btoa(password),
   },
   {
     onSuccess: onRegisterSuccess,
     onError: onRegisterError,
     onSettled:()=>reset()
   }
  )
// return username;
},[])

  return (
    <>
      <div className=" overflow-auto font-sans bg-slate-950 min-h-screen  p-15">
        <div className="pt-14 px-10 mx-auto block text-center">
          <h1 className=" text-gray-50 text-6xl font-bold uppercase my-5 drop-shadow-lg">
            Chess
          </h1>
          <p className=" text-gray-50 text-lg">
            Play with your friends online 🐴
          </p>
        </div>
        <form className=" flex flex-col m-10 px-5 py-12 rounded-xl max-w-72 mx-auto" onSubmit={(e)=>{
      if(e){
        e.preventDefault();
      }
      return
    }}>
      <input
        type="email"
        placeholder="Email"
        value={username}
		onChange={(e)=>setUsername(e.target.value)}
        className="mb-4 py-2 bg-slate-950 border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors
        "
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
		onChange={(e)=>setPassword(e.target.value)}
        className="mb-4 py-2 bg-slate-950 border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
		onChange={(e)=>setConfirmPassword(e.target.value)}
        className="mb-4 py-2 bg-slate-950 border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors"
      />

      <button className="blocktext-slate-900 p-2 mt-8 text-md rounded-sm cursor-pointer bg-slate-100 hover:bg-white transition-colors" onClick={()=>handleRegister(username,password)}>
        Sign Up
      </button>

      <p className="my-2 mx-auto text-gray-200 text-sm">
        Already have an account?{' '}
        <span
          onClick={() => {
            navigate("/login")
          }}
          className="underline cursor-pointer hover:text-gray-50"
        >
          Login
        </span>
      </p>
    </form>
      </div>
    </>
  );
};

export default Signup;

