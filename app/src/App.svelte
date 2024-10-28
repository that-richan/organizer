<!-- TODO Remove once stores are not used -->
<svelte:options runes={false} />

<script lang="ts">
    import "./assets/css/main.css";
    import Router from "svelte-spa-router";
    import { routes } from "./routes";
    import { isLoading } from "svelte-i18n";
    import Icon from "@iconify/svelte";
    import LocaleSwitcher from "./components/LocaleSwitcher.svelte";
</script>

{#if $isLoading}
    <Icon icon="mdi:loading" class="animate-spin m-auto" width="50%" />
{:else}
    <Router {routes} />
{/if}

<LocaleSwitcher />