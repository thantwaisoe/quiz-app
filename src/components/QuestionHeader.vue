<template>
    <header>
        <h4>{{ header }} Questions</h4>
        <div class="bar">
            <div class="completion" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<script setup>
const {header, barPercentage} = defineProps(['header', 'barPercentage'])
</script>

<style scoped></style>