module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  border: "hsl(var(--border))",
		},
	  },
	},
	plugins: [require("@tailwindcss/typography")],
  };
  