<script setup>
import { ref, watch } from 'vue';
import q from '../../data/quizes.json'
import Card from '../components/Card.vue'
import { useRouter } from 'vue-router';
const quizes = ref(q)
let searchTerm = ref('')
const router = useRouter()
const navigateToQuiz = (id) => {
    router.push(`/quiz/${id}`)
}
// like useEffect in Vue use watch
watch(searchTerm, () => {
    quizes.value = q.filter(row => row.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})
</script>
<template>
    <div>
        <header>
            <h1>Quizes</h1>
            <input type="text" v-model.trim="searchTerm" placeholder="Search ...">
        </header>
        <div class="cards-container">
            <Card
              :data="quiz"
              v-for="quiz in quizes"
              :key="quiz.id"
              @click="navigateToQuiz(quiz.id)"
            />
        </div>
    </div>
</template>
<style scoped>
header {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

header h1 {
    font-weight: bold;
    margin-right: 25px;
}

header input {
    border: none;
    background: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

/*Cards */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>