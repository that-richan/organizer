import type { RouteDefinition, WrappedComponent } from "svelte-spa-router";
import { wrap, type WrapOptions } from "svelte-spa-router/wrap";
import { importSvelteComponent } from "./utils/importSvelteComponent.ts";

const svelteRoutes = import.meta.glob("./routes/**/*.svelte");

function importRoute(
	path: string,
	opts: Omit<WrapOptions, "asyncComponent"> = {},
): WrappedComponent {
	const route = svelteRoutes[`./routes/${path}.svelte`];
	return wrap({
		asyncComponent: async () => {
			return {
				default: await importSvelteComponent(route),
			};
		},
		...opts,
	});
}

export const appRoutes = {
	"/": importRoute("app/Home"),
	"*": importRoute("NotFound"),
} satisfies RouteDefinition;

export const routes = {
	"/": importRoute("Home"),
	"/app": importRoute("app/layout"),
	"/app/*": importRoute("app/layout"),
	"*": importRoute("NotFound"),
} satisfies RouteDefinition;
