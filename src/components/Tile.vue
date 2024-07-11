<template>
    <div :style="{ flexDirection: props.tiledata.direction, backgroundColor: randomColor() }" class="tile">
        <p v-if="!props.tiledata.children">Editable</p>
        <div v-for="(tile, index) in props.tiledata.children" :key="index" class="tile-content">
            <Tile :tiledata="tile"> </Tile>
        </div>
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

.tile-content {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
</style>