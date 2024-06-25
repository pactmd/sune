<template>
    <div class="number-wrapper" :draggable="preview">
        <input class="number" type="number" v-model="number">
    </div>
</template>

<style scoped>
/* Removes arrows on number input */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.number-wrapper {
    display: flex;
    background-color: blue;
    /* height: 1em; */
}

.number {
    min-width: 1em;
    background-color: transparent;
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
}
</style>

<script setup lang="ts">
defineProps<{
    preview?: boolean
}>()

const number = ref(0)
</script>