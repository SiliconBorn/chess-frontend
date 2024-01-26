import { useNavigate } from 'react-router-dom';



export default function Landing() {
	const navigate = useNavigate();


	return (
		<>
			{/* <div className=" overflow-auto font-sans bg-slate-950 min-h-screen  p-15">
				<div className="pt-14 px-10 mx-auto block text-center">
					<h1 className=" text-gray-50 text-6xl font-bold uppercase my-5 drop-shadow-lg">
						Chess
					</h1>
					<p className=" text-gray-50 text-lg">
						Play with your friends online 🐴
					</p>
				</div>
				{form === 'login' && <Login onSetForm={handleSetForm} />}
				{form === 'signup' && <Signup onSetForm={handleSetForm} />}
			</div> */}


			<button onClick={()=> navigate("/login")}>LOGIN</button>
			<button onClick={()=> navigate("/signup")}>REGISTER</button>
		</>
	);
}