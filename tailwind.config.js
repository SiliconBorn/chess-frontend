/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				lg: 'rgba(255, 5, 255, 1) 5px 5px 0px',
			},
		},
	},
	plugins: [],
};
