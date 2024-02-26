/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				logoOrange1: '#ff8552',
				logoOrange: '#9B5C03',
				highlight: '#204b4f',
				backgroundBlue: '#a1c3c9',
				background1: '#e6d3b5',
				background2: '#043B48',
				background3: '#F7E7DE',
				background: '#ECF0F1',
				important1: '#EAC6A5',
				important: '#915D03',
				paragraph: '#043B48'
			},
			borderColor: {
				custom: '0 4px 6px -1px rgba(32, 75, 79, 0.8)'
			}
		}
	},
	plugins: []
};
