import "./i18n.ts";
import { mount } from "svelte";
import { importSvelteComponent } from "./utils/importSvelteComponent.ts";

// Not using top-level await here because it causes the Promise to be indefinitely pending (some sort of circular dependency is happening probably)
importSvelteComponent(() => import("./App.svelte")).then((App) => {
	mount(App, {
		target: document.body,
	});
});
