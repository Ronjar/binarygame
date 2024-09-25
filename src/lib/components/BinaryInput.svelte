<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { binaryArrayToDecimal } from "$lib/scripts/binaryUtils";

    const dispatch = createEventDispatcher<{
        update: { decimal: number };
    }>();

    export let count: number = 2;
    let values: boolean[] = Array(count).fill(false);
    let decimalValue: number = 0;
    let sumEnabled = false;
    let indicatorsEnabled = false;

    let ignoreReactivity = false;

    let enabled = true;

    export function disable() {
        enabled = false;
    }
    export function enable() {
        enabled = true;
    }

    export function setCount(newCount: number) {
        ignoreReactivity = true;
        count = newCount;
        values = Array(count).fill(false);
    }

    export function setSumEnabled(enabled: boolean) {
        sumEnabled = enabled;
    }
    export function setIndicatorsEnabled(enabled: boolean) {
        indicatorsEnabled = enabled;
        console.log("Indicators enabled: " + enabled);
    }

    // Reagiere auf Änderungen im Array `values`
    $: {
        decimalValue = binaryArrayToDecimal(values.map((v) => (v ? 1 : 0)));
        if (!ignoreReactivity) {
            dispatch("update", {
                decimal: decimalValue,
            });
        }
        ignoreReactivity = false;
    }

    export function reset(): void {
        ignoreReactivity = true;
        values = Array(count).fill(false);
    }

    // Methode, um alle Kästchen grün aufleuchten zu lassen
    export function highlightBoxes(): void {
        document.querySelectorAll(".swap").forEach((el) => {
            el.classList.add("btn-success");
            setTimeout(() => el.classList.remove("btn-success"), 500);
        });
    }
</script>

<div class="flex flex-row justify-center gap-3">
    {#each Array(count) as _, index}
        <div>
            <label class="swap text-2xl">
                <input type="checkbox" bind:checked={values[index]} disabled='{!enabled}' />
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
            {#if indicatorsEnabled}
                <p class="w-full flex justify-center">
                    {Math.pow(2, count - 1 - index)}
                </p>
            {/if}
        </div>
    {/each}
    {#if sumEnabled}
        <p class="text-2xl flex items-center justify-center w-20 h-20">
            {decimalValue}
        </p>
    {/if}
</div>
