<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}?</h1>
    </div>
    <div v-for="option in question.options" :key="option.id" class="option-container">
        <div class="option">
            <p class="option-label">{{ option.label }}</p>
            <p class="option-value">{{ option.text }}</p>
        </div>
    </div>
</template>

<script setup>
const data = defineProps(['currentQuestion'])
const {currentQuestion: question} = data

</script>

<style scoped></style>