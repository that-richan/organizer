import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: "selector",
	content: ["./*.html", "./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Oxanium", ...defaultTheme.fontFamily.sans],
			},
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
