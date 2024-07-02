<template>
    <Number></Number>
    <!-- <div class="new-number-wrapper">
        <div class="new-number-triange-left"></div>
        <div class="new-number">3</div>
        <div class="new-number-triange-right"></div>
    </div> -->

    <!-- <div class="preview-wrapper">
        <Number class="preview-item" :preview="true"></Number>
        <Text class="preview-item" :preview="true"></Text>
    </div>
    <hr>

    <div class="input-sizer">
        <input class="test-sizer" type="text">
    </div> -->
    <!-- <div
        class="number"
        draggable="true"
        @dragstart="handleDragStart"
    >
        1
    </div>

    <div
        class="text"
        id="text-id"
        @dragover.prevent="console.log('dragover')"
        @dragenter.prevent
        @drop="handleDrop"
    >
    </div> -->
</template>

<script setup lang="ts">
function handleDragStart(event: DragEvent) {
    if (event.target instanceof Element) {
        event.dataTransfer?.setData("text", event.target.id)
    }
}

function handleDrop(event: DragEvent) {
    if (event.target instanceof Element) {
        let id = event.dataTransfer?.getData("text");
        event.target.appendChild(document.getElementById(id!)!);
    }
}
</script>

<style scoped>
</style>