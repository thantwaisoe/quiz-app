<script setup>
import { ref } from 'vue'

const data = defineProps(['currentQuestion'])
const emitter = defineEmits(['optionSelected'])
const { currentQuestion: question } = data

const currentQuestionIndex = ref(0)
const handleSelect = (value) =>{
    emitter('optionSelected', value)
    currentQuestionIndex.value++
}

</script>
<template>
    <div class="question-container">
        <h1 class="question">{{ question[currentQuestionIndex].text }}?</h1>
    </div>
    <div v-for="option in question[currentQuestionIndex].options" :key="option.id" class="option-container">
        <div class="option" @click="handleSelect(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <p class="option-value">{{ option.text }}</p>
        </div>
    </div>
</template>



<style scoped></style>