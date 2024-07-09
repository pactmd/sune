<template>
    <div class="tile-container">
        <Tile :level="tiledata.level" :horizontal="tiledata.horizontal"></Tile>
    </div>
</template>

<script setup lang="ts">
import type { TileData } from '~/types/tiledata';

const tiledata: TileData = reactive({
    level: 0,
    horizontal: [
        {
            level: 1,
            horizontal: [
                {
                    level: 2,
                    horizontal: [
                        {
                            level: 3,
                            horizontal: []
                        }
                    ]
                }
            ]
        }
    ]
})
</script>

<style scoped>
.tile-container {
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 40px;
    width: 100%;
    height: 100%;
}
</style>