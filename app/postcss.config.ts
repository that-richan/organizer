import type { Config } from "postcss-load-config";
import tailwindConfig from "./tailwind.config.ts";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
	plugins: [tailwind(tailwindConfig), autoprefixer()],
} satisfies Config;
