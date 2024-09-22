<script lang="ts">
    import BinaryInput from "$lib/components/BinaryInput.svelte";

    let targetNumbers = [randomNumber(), randomNumber(), randomNumber()]; // Startwerte für Zielzahlen
    let currentTargetIndex = 0; // Index der aktuellen Zielzahl
    let score = 0; // Punktzahl
    let level = 1;

    // Erzeugt eine zufällige Zielzahl
    function randomNumber(): number {
        return Math.floor(Math.random() * 256); // Für ein 8-Bit-Binärsystem
    }

    // Überprüft, ob der eingegangene Wert der aktuellen Zielzahl entspricht
    function checkMatch(event: CustomEvent<{ decimal: number }>): void {
        //console.log(event.detail.decimal + " == " + targetNumbers[currentTargetIndex]);
        if (event.detail.decimal === targetNumbers[currentTargetIndex]) {
            score++;
            targetNumbers.push(randomNumber()); // Neue Zahl hinzufügen
            currentTargetIndex++; // Zum nächsten Kärtchen wechseln
            highlightAndRemoveCurrentCard();
        }
    }

    // Lässt das aktuelle Kärtchen grün aufleuchten und verschwinden
    function highlightAndRemoveCurrentCard(): void {
        const card = document.querySelector(`#card-${currentTargetIndex}`);
        card.classList.add("btn-success");
        setTimeout(() => {
            card.remove();
            targetNumbers.shift(); // Entfernt die erste Zahl im Array
            currentTargetIndex--; // Korrigiert den Index nach dem Entfernen der Karte
        }, 1000);
    }
</script>

<div class="flex justify-between">
    <div></div>
    <div class="basis-1/2 flex justify-center">
        <div class="mt-48">
            <BinaryInput on:update={checkMatch} />

            <div class="flex">

            </div>
        </div>
    </div>

    <div class="flex-end">
        <div class="stats shadow pr-10">
            <div class="stat">
                <div class="stat-title">Score</div>
                <div class="stat-value text-primary">{score}</div>
            </div>
        </div>
    </div>
</div>
