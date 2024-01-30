const alertTypeClasses: Record<string, string> = {
	error: 'bg-pink-600 hover:bg-pink-500 ',
	primary: 'bg-sky-700 hover:bg-sky-600 ',
	secondary: 'bg-slate-700 hover:bg-slate-600 ',
};

const iconTypeSrc: Record<string, string> = {
	error: './cross.png',
	success: './tick.png',
	warning: './exclamation.png',
};

export default function Alert() {
	const type: string = 'secondary';
	const icon: string = 'warning';
	const msg: string = 'Login Successfull';

	return (
		<div
			className={`${alertTypeClasses[type]}opacity-90 flex items-center absolute top-4 left-1/2 md:left-auto -translate-x-1/2 md:-translate-x-0 md:top-10 md:right-10 text-white alert-error px-6 md:px-8 py-4 md:py-6 shadow-md highlight-white/20  cursor-pointer rounded-lg min-w-max`}
		>
			{msg}
			<img src={`${iconTypeSrc[icon]}`} width={25} className="ml-2" />
		</div>
	);
}
