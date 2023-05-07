<script setup>
import { defineProps } from 'vue';
const {data} = defineProps(['data'])
</script>
<template>
    <div class="card">
        <img :src="data.img" alt="">
        <div class="card-text">
            <h2>{{ data.name }}</h2>
            <p>{{ data.questions.length }} questions</p>
        </div>
    </div>
</template>
<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card-text {
  padding: 5px 10px;
}

.card-text h2 {
  font-weight: bold;
}</style>
