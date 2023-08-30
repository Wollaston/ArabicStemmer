/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: ['emerald']
	},

	plugins: [require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
