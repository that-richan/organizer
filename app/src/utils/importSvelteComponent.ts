import type { ComponentType } from "svelte";

// Deno does not support declare module.
export async function importSvelteComponent(
	importCallback: () => Promise<{ default?: ComponentType }>,
): Promise<ComponentType> {
	const imported = await importCallback();
	if (!imported.default) {
		throw new Error("Did not find a default export");
	}
	return imported.default;
}
