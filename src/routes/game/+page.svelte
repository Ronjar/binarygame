<script lang="ts">
    import BinaryInput from "$lib/components/BinaryInput.svelte";
    import QuestionCard from "$lib/components/QuestionCard.svelte";
    import { generateQuestions } from "$lib/scripts/generateQuestions";
    import { onMount } from "svelte";

    let questionCard: QuestionCard[] = [];
    let binaryInput: BinaryInput;
    let currentQuestionIndex = 0; // Index der aktuellen Zielzahl
    let score = 0; // Punktzahl
    let level = 0;

    // Überprüft, ob der eingegangene Wert der aktuellen Zielzahl entspricht
    function checkMatch(event: CustomEvent<{ decimal: number }>): void {
        console.log(event.detail.decimal + " == " + questionCard[currentQuestionIndex].question);
        alert(event.detail.decimal + " == " + questionCard[currentQuestionIndex].question);
        if (
            event.detail.decimal === questionCard[currentQuestionIndex].question
        ) {
            binaryInput.disable();
            score++;
            saveGame();
            questionCard[currentQuestionIndex].correctAnswer();
            nextQuestion();
        }
    }

    function getQuestions() {
        let nextLevel = generateQuestions(level);
        binaryInput.setCount(nextLevel.bitCount);
        binaryInput.setSumEnabled(nextLevel.isSumEnabled);
        console.log(nextLevel.areIndicatorsEnabled);
        binaryInput.setIndicatorsEnabled(nextLevel.areIndicatorsEnabled);
        for (let i = 0; i < 3; i++) {
            questionCard[i].setQuestion(nextLevel.numbers[i]);
        }
    }

    function nextQuestion() {
        console.log(questionCard[currentQuestionIndex].question);
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex >= 3) {
                newLevel();
            }
            binaryInput.reset();
            questionCard[currentQuestionIndex].showQuestion();
            binaryInput.enable();
        }, 1000);
    }

    function firstQuestion() {
        if (currentQuestionIndex >= 3) {
            newLevel();
        }
        setTimeout(() => {
            questionCard[currentQuestionIndex].showQuestion();
        }, 1000);
    }

    function newLevel() {
        currentQuestionIndex = 0;
        level++;
        getQuestions();
        for (let i = 0; i < questionCard.length; i++) {
            questionCard[i].reset();
        }
    }

    onMount(() => {
        console.log("Mounted");
        loadGame();
        newLevel();
        firstQuestion();
    });

    function loadGame() {
        let storedScore = localStorage.getItem('score');
        let storedLevel = localStorage.getItem('level');
        score = storedScore ? parseInt(storedScore) : 0;
        level = storedLevel ? parseInt(storedLevel) : 0;
    }

    function saveGame() {
        localStorage.setItem('score', score.toString());
        localStorage.setItem('level', level.toString());
    }
</script>

<div class="flex justify-between">
    <div></div>
    <div class="basis-1/2 flex justify-center">
        <div class="mt-48 w-full">
            <div class="w-full flex justify-center">
                <BinaryInput on:update={checkMatch} bind:this={binaryInput} />
            </div>
            <div class="mt-8 space-x-4 flex justify-center">
                <QuestionCard bind:this={questionCard[0]} />
                <QuestionCard bind:this={questionCard[1]} />
                <QuestionCard bind:this={questionCard[2]} />
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
