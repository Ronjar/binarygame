<script lang="ts">
    import "../app.css";

    import MaterialSymbolsDarkModeRounded from "~icons/material-symbols/dark-mode-rounded";
    import MaterialSymbolsLightModeRounded from "~icons/material-symbols/light-mode-rounded";
    import MaterialSymbolsVideogameAssetRounded from '~icons/material-symbols/videogame-asset-rounded'
</script>

<div class="min-h-screen">
    <header>
        <div class="p-2">
            <div
                class="navbar bg-base-300 flex justify-between items-center p-2 rounded-2xl"
            >
                <a
                    href="/"
                    class="btn btn-ghost rounded-2xl m-2 text-xl flex items-center"
                >
                    <MaterialSymbolsVideogameAssetRounded class="text-accent fill-current h-8 w-8" />
                    <span class="text-2xl text-accent">Binary Game</span>
                </a>
                    <label
                        class="btn btn-ghost rounded-2xl swap swap-rotate w-12 h-12 m-2"
                    >
                        <!-- this hidden checkbox controls the state -->
                        <input
                            type="checkbox"
                            class="theme-controller"
                            value="dracula"
                        />
                        <MaterialSymbolsLightModeRounded
                            class="swap-off fill-current h-8 w-8"
                        />
                        <MaterialSymbolsDarkModeRounded
                            class="swap-on fill-current h-8 w-8"
                        />
                    </label>
            </div>
        </div>
    </header>
    <main class="flex-1 p-4">
        <slot />
    </main>
</div>