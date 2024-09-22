<script lang="ts">
    import MaterialSymbolsLock from "~icons/material-symbols/lock";
    import MaterialSymbolsCheckRounded from "~icons/material-symbols/check-rounded";

    let isOn = false;
    let isCorrect = false;
    export let question = 0;

    export function showQuestion() {
        isCorrect = false;
        isOn = true;
    }

    export function correctAnswer() {
        isCorrect = true;
        isOn = false;
    }
    export function reset() {
        isCorrect = false;
        isOn = false;
    }
</script>

<label class="swap swap-flip" class:swap-active={isOn}>
    <div class="swap-on card bg-base-200 text-primary-content shadow-xl">
        <div class="card-body mx-8">
            <h2 class="card-title justify-center text-base-content">
                {question}
            </h2>
        </div>
    </div>
    <div
        class="swap-off card bg-base-200 text-primary-content shadow-xl"
        class:bg-green-800={isCorrect}
    >
        <div class="card-body mx-8">
            <h2 class="card-title justify-center text-base-content">
                {#if isCorrect}
                    <MaterialSymbolsCheckRounded />
                {:else}
                    <MaterialSymbolsLock />
                {/if}
            </h2>
        </div>
    </div>
</label>
