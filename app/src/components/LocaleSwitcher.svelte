<!-- TODO Remove once stores are not used -->
<svelte:options runes={false} />

<script lang="ts">
    import { locale as currentLocale, locales } from "svelte-i18n";

    currentLocale.subscribe((value) => {
        localStorage.setItem("locale", value);
    });
</script>

<div class="fixed bottom-2 right-2 rounded bg-tertiary p-1 group">
    <div class="grid gap-4">
        {#each $locales.toSorted((first) => first === $currentLocale ? 1 : -1) as locale, index}
            <button
                class:hidden={index < $locales.length - 1}
                class:group-hover:block={index < $locales.length - 1}
                class="p-2 text-white hover:text-secondary"
                onclick={() => {
                    currentLocale.set(locale);
                }}
            >
                {locale}
            </button>
        {/each}
    </div>
</div>