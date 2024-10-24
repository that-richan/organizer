import { mount, type Component } from "svelte";

// Deno does not support declare module.
const App = ((await import("./App.svelte")) as { default: Component }).default;

mount(App, {
	target: document.body,
});
