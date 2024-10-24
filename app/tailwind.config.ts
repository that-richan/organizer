import type { Config } from "tailwindcss";

export default {
	content: ["./*.html", "./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
