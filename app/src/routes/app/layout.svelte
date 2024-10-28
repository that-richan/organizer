<script lang="ts">
    import Router from "svelte-spa-router";
    import Icon from "@iconify/svelte";
    import { appRoutes } from "../../routes";
    import { _ } from "svelte-i18n";

    interface MenuItem {
        title: string;
        href: string;
    }

    const menuItems: MenuItem[] = $derived([
        {
            title: $_("app.layout.menu.home"),
            href: "#/app"
        },
    ]);
</script>

<header class="grid-container p-4">
    <div class="bg-primary p-4 rounded-lg drop-shadow-xl flex flex-col gap-2">
        <h1 class="text-xs leading-none">Organizer</h1>
        <hr>
        <div class="flex justify-between">
            <nav class="flex items-center">
                <ul class="leading-none flex items-center">
                    {#each menuItems as item}
                        <li><a href={item.href}>{item.title}</a></li>
                    {/each}
                </ul>
            </nav>
    
            <a href="#/app/user">
                <Icon icon="mdi:user" class="h-full" height={24} />
            </a>
        </div>
    </div>
</header>

<main class="grid-container p-4 pt-0">
    <div class="bg-secondary rounded-lg p-4 drop-shadow-xl">
        <Router prefix="/app" routes={appRoutes} />
    </div>
</main>