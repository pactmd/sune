<template>
    <div :style="{ flexDirection: props.tiledata.direction, backgroundColor: randomColor() }" class="tile">
        <p v-if="!props.tiledata.children">Editable</p>
        <template v-for="(tile, index) in props.tiledata.children">
            <Tile :tiledata="tile"> </Tile>
            <div v-if="index < props.tiledata.children!.length - 1" class="tile-split" :class="props.tiledata.direction"></div>
        </template>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    tiledata: TileData,
}>()

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    const h = randomInt(0, 360);
    const s = randomInt(42, 98);
    const l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
}
</script>

<style scoped>
.tile {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 20px;
    border-radius: 20px;
}

.tile-split {
    cursor: ew-resize;
    width: 10px;
    height: 100%;
    background-color: black;
}

.tile-split:hover {
    background-color: lightblue;
}

.tile-split.column {
    cursor: ns-resize;
    width: 100%;
    height: 10px;
}
</style>