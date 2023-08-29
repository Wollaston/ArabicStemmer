/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: ['garden']
	},

	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
