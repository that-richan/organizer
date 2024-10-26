<script lang="ts">
    import Router from "svelte-spa-router";
    import { appRoutes } from "../../routes";
</script>

<Router prefix="/app" routes={appRoutes} />