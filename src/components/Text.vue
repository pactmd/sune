<template>
    <div class="text-wrapper" :draggable="preview">
        <Number v-if="hasNumber && !preview"></Number>
        <input class="text" type="text" v-model="text">
    </div>
</template>

<style scoped>
.text-wrapper {
    background-color: red;
}
</style>

<script setup lang="ts">
defineProps<{
    preview?: boolean
}>()

const hasNumber = ref(false)
const text = ref("")
</script>