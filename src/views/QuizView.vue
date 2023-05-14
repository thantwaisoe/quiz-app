<template>
    <QuestionHeader :header="questionHeader" :barPercentage="barPercentage" />
    <div v-if="!showResult">
        <QuestionVue :currentQuestion="quiz.questions"
         @optionSelected="clickOnSelect" />
    </div>
    <Result v-else :correctAnsCount="numberOfCorrectAnswer" :totalAnsCount="quiz.questions.length"/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import QuestionVue from '../components/Question.vue';
import QuestionHeader from '../components/QuestionHeader.vue';
import Result from '../components/Result.vue'
import quizQuestion from '../../data/quizes.json'
import { computed, ref } from 'vue';
const route = useRoute()
const id = parseInt(route.params.id)
const quiz = quizQuestion.find(q => q.id === id)
let currentQuestionIndex = ref(0)
const numberOfCorrectAnswer = ref(0)
let showResult = ref(false)

// for Header 1/2 Questions
const questionHeader = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`)
// Status Bar Value Calculating
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)
// For counting correct Answer
const clickOnSelect = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswer.value++
    }
    currentQuestionIndex.value++
    if(currentQuestionIndex.value  === quiz.questions.length ){
        showResult.value =true
    }
}
</script>

<style>
header {
    margin-top: 30px;
}

h4 {
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    height: 100%;
    /* make dynamic  */
    width: 0%;
    background-color: bisque;
}

.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background: rgb(224, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>