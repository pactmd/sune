<template>
    <div class="tile-wrapper">
        <div v-for="(_, columnIndex) in props.tiledata.children" :key="columnIndex" :style="{backgroundColor: randomColor()}" class="tile column">
            <div v-for="(row, rowIndex) in props.tiledata.children[columnIndex]" :key="rowIndex" :style="{backgroundColor: randomColor()}" class="tile row">
                <Tile :depth="props.depth + 1" :tiledata="row"></Tile>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    depth: number,
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
.tile-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 40px;
}

.tile {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    gap: 40px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
</style>