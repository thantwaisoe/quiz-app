<script setup>
const data = defineProps(['currentQuestion'])
const emitter = defineEmits(['optionSelected'])
const { currentQuestion: question } = data

</script>
<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}?</h1>
    </div>
    <div v-for="option in question.options" :key="option.id" class="option-container">
        <div class="option" @click="emitter('optionSelected', option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <p class="option-value">{{ option.text }}</p>
        </div>
    </div>
</template>



<style scoped></style>