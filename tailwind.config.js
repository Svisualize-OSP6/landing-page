/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'logoOrange': '#ff8552',
        'highlight': '#f2bb05',
        'background0': '#124e78',
        'background1': '#114B56',
        'background': '#043B48',
        'important': '#EAC6A5',
        'paragraph': '#5395A2'
			}
		}
	},
	plugins: []
};
