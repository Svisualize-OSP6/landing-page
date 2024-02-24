/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				logoOrange1: '#ff8552',
				logoOrange: '#503416',
				highlight: '#204b4f',
				background0: '#124e78',
				background1: '#114B56',
				background2: '#043B48',
				background: '#a1c3c9',
				important1: '#EAC6A5',
				important: '#73624A',
				paragraph: '#043B48'
			},
			borderColor: {
				custom: '0 4px 6px -1px rgba(32, 75, 79, 0.8)'
			}
		}
	},
	plugins: []
};
