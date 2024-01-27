/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import authService, { AuthCred, AuthSuccessResponse } from "../../services/authService";
import { AxiosResponse } from "axios";
import TokenManager from "../../utils/TokenManager";
import { useRecoilState } from "recoil";
import { authState } from "../../recoil/atoms/Auth";


const Login = () => {
  const navigate = useNavigate();
  const [ authToken,setAuthToken] = useRecoilState(authState);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  
  const { mutate,reset} = useMutation({mutationFn:authService.login});

  const onLoginSuccess = useCallback((responseData:AuthSuccessResponse)=>{
    
      const {token} = responseData;
           if(token){
            TokenManager.set(token);
            // LOGIC to navigate and store the token
            setAuthToken(token);
            navigate("/user/Game");
           }else{
            console.error("ERROR WHILE LOGIN. PLEASE TRY AGAIN");
           }
  },[])

  const onLoginError=(error)=>{
          console.error("ERROR WHILE LOGIN. PLEASE TRY AGAIN");
      
  }

  const handleLogin = useCallback((username:string,password:string)=>{
       console.log("username",username)
       console.log("password",password)

       mutate(
        {
          username,
          password:window.btoa(password),
        },
        {
          onSuccess: onLoginSuccess,
          onError: onLoginError,
          onSettled:()=>reset()
        }
       )
  // return username;
  },[])

  return (
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
        type="username"
        placeholder="username"
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

      <button className="blocktext-slate-900 p-2 mt-8 text-md rounded-sm cursor-pointer bg-slate-100 hover:bg-white transition-colors" onClick={()=>handleLogin(username,password)}>
        Login
      </button>

      <p className="my-2 mx-auto text-gray-200 text-sm">
        Doesn't have an account?{" "}
        <span
          onClick={() => {
            // onSetForm("signup");
            navigate("/signup");
          }}
          className="underline cursor-pointer hover:text-gray-50"
        >
          Sign up
        </span>
      </p>
    </form>
	</div>
  );
};

export default Login;
