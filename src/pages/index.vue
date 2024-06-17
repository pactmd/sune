<template>
    <div
        :style="{backgroundColor: activeColor}"
        class="draggable"
        draggable="true"
        @dragstart="console.log('dragstart')"
    >
    </div>
    <div
        class="dragTarget"
        @dragover.prevent="console.log('dragover')"
        @dragenter.prevent
        @drop="handleDrop"
    >
    </div>
    <p>Hello World!</p>
</template>

<script setup lang="ts">
const activeColor = ref("red");

function handleDrop() {
    if (activeColor.value === "red") {
        activeColor.value = "blue"
    } else {
        activeColor.value = "red"
    }
}
</script>

<style scoped>
.draggable {
    height: 50px;
    width: 50px;
}
.dragTarget {
    background-color: green;
    height: 100px;
    width: 100px;
}
</style>