/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				"tall--xs":{"raw":"(max-height: 380px)"},
				'tall--s': { 'raw': '(min-height: 700px)' },
				'tall1': { 'raw': '(min-height: 830px)' },
				// => @media (min-height: 800px) { ... }
				'tall2': { 'raw': '(min-height: 913px)' },
				'tall3': { 'raw': '(min-height: 1050px)' },
			}
		},
	},
	plugins: [
		require("tailwindcss-rtl")
	],
};
