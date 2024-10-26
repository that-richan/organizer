<script lang="ts">
    import "./assets/css/main.css";
    import Router from "svelte-spa-router";
    import { routes } from "./routes";
</script>

<main class="grid-container">
    <Router {routes} />
</main>
