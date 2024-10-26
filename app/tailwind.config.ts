import type { Config } from "tailwindcss";

export default {
	content: ["./*.html", "./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#679B9B",
				},
				secondary: {
					DEFAULT: "#FF9A76",
				},
				tertiary: {
					DEFAULT: "#637373",
				},
				surface: {
					DEFAULT: "#FFEADB",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
