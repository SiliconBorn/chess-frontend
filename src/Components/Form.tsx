import { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
	return (
		<div className="my-10 px-10 md:px-20 py-14 rounded-xl max-w-80 md:max-w-96 mx-auto shadow-lg bg-slate-900  max-h-100 opacity-90">
			{children}
		</div>
	);
}
