import { getLocaleFromNavigator, init, register } from "svelte-i18n";

register("cs", () => import("./i18n/cs.json"));
register("en", () => import("./i18n/en.json"));

init({
	fallbackLocale: "en",
	initialLocale: localStorage.getItem("locale") ?? getLocaleFromNavigator(),
});
