<script lang="ts">
    import QuestionCard from "$lib/components/QuestionCard.svelte";
    let questioncard: QuestionCard;
</script>
<QuestionCard bind:this={questioncard} question={10} />

<div class="btn button primary" on:click={() => questioncard.showQuestion()}>Click</div>
<div class="btn button primary" on:click={() => questioncard.correctAnswer()}>Click</div>