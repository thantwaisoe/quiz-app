<template>
    <div class="result">
        <p>Your Result is</p>
        <h1>{{ correctAnsCount }} / {{ totalAnsCount }}</h1>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script setup> 
const {correctAnsCount, totalAnsCount} = defineProps(['correctAnsCount', 'totalAnsCount'])
</script>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 25px;
}
h1{
    font-size: 80px;
}
</style>