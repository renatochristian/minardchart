/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx}"],
	theme: {
		extend: {
			backgroundImage: {
				minard: "url('./background_minard.png')",
			},
		},
	},
	plugins: [],
};
