import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "./postcss.config.ts";

export default defineConfig({
	build: {
		target: "esnext",
	},
	plugins: [
		svelte({
			compilerOptions: {
				hmr: true,
				compatibility: {
					/*
						TODO Disable this when no packages need it.
						Current list of packages that need backwards compatibility:
						- svelte-spa-router (Will be updated soon though, hopefully)
						- svelte-i18n
						- @iconify/svelte
					*/
					componentApi: 4,
				},
			},
		}),
	],
	css: {
		postcss,
	},
});
