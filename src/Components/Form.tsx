import { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
	return (
		<div className="mt-20 px-20 py-14 rounded-xl max-w-96 mx-auto shadow-lg bg-slate-800 max-h-min">
			{children}
		</div>
	);
}
