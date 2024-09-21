<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { binaryArrayToDecimal } from "$lib/scripts/binaryUtils";

    const dispatch = createEventDispatcher<{
        update: { decimal: number };
    }>();

    export let count: number = 8;
    let values: boolean[] = Array(count).fill(false);
    let decimalValue: number = 0;

    // Reagiere auf Änderungen im Array `values`
    $: {
        decimalValue = binaryArrayToDecimal(values.map((v) => (v ? 1 : 0)));
        dispatch("update", {
            decimal: decimalValue,
        });
    }

    // Methode, um alle Kästchen grün aufleuchten zu lassen
    export function highlightBoxes(): void {
        document.querySelectorAll(".swap").forEach((el) => {
            el.classList.add("btn-success");
            setTimeout(() => el.classList.remove("btn-success"), 500);
        });
    }
</script>

<div class="container">
    {#each Array(count) as _, index}
        <label class="swap text-2xl">
            <input type="checkbox" bind:checked={values[index]} />
            <div
                class="btn swap-on btn-primary text-2xl flex items-center justify-center w-20 h-20"
            >
                <div class="m-5">1</div>
            </div>
            <div
                class="btn swap-off text-2xl flex items-center justify-center w-20 h-20"
            >
                <div class="m-5">0</div>
            </div>
        </label>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
</style>
