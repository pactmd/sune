<template>
    <div :style="{width: numWidth + 'rem'}" class="new-number"></div>

    <input type="range" min="0" max="10" v-model="numWidth">
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
const numWidth = ref(2)

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

.new-number {
    --hex-height: 2rem;
    --hex-min-width: calc(var(--hex-height) * (1/cos(30deg)));
    background-color: green;
    height: var(--hex-height);
    min-width: var(--hex-min-width);
    clip-path: polygon(
        0% 50%,
        calc(var(--hex-min-width) / 2) -50%,
        calc(100% - calc(var(--hex-min-width) / 2)) -50%,
        100% 50%,
        calc(100% - calc(var(--hex-min-width) / 2)) 150%,
        calc(var(--hex-min-width) / 2) 150%
    );
}


.input-sizer {
    display: inline-grid;
}

.preview-wrapper {
    display: flex;
    background-color: gray;
}

.preview-item {
    margin: 10px;
    padding: 10px;
}

.text {
    border: 2px solid blue;
    height: 2em;
    width: 100px;
}

.number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: red;
    -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
}
</style>