<template>
    <div v-for="(tile, index) in tileprop.horizontal" :key="index" :style="{backgroundColor: backgroundColor}" class="tile">
        <Tile :level="tile.level" :horizontal="tile.horizontal"></Tile>
    </div>
</template>

<script setup lang="ts">
import type { TileData } from '~/types/tiledata';

const tileprop = defineProps<TileData>()

const colors = ['red', 'blue', 'orange', 'yellow'];
const backgroundColor = ref(colors[tileprop.level])
</script>

<style scoped>
.tile {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
</style>