<template>
    <QuestionHeader />
    <div>
        <QuestionVue :currentQuestion="quiz.questions[currentQuestionIndex]"/>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import QuestionVue from '../components/Question.vue';
import QuestionHeader from '../components/QuestionHeader.vue';
import quizQuestion from '../../data/quizes.json'
import { ref } from 'vue';
const route = useRoute()
const id = parseInt(route.params.id)
const quiz = quizQuestion.find(q => q.id === id)
const currentQuestionIndex = ref(0)
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