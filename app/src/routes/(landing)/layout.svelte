<script lang="ts">
    import Router from "svelte-spa-router";
    import { landingRoutes } from "../../routes";
    import { _ } from "svelte-i18n";
</script>

<header class="grid-container bg-primary drop-shadow-xl">
    <div class="flex justify-between items-center p-4">
        <h1 class="text-5xl">Organizer</h1>
        <a href="#/app">{$_("landing.layout.goToApp")}</a>
    </div>
</header>

<main class="grid-container">
    <div class="bg-secondary p-4 drop-shadow-xl">
        <Router routes={landingRoutes} />
    </div>
</main>