<template>
    <div class="tile-container">
        <div class="tile-area">
            <Tile :depth="0" :tiledata="tiledata"></Tile>
        </div>
    </div>
</template>

<script setup lang="ts">
// import type { TileData } from '~/types/tiledata';

const tiledata: TileData = reactive({
    id: "id1",
    children: [
        [
            {
                id: "id2",
                children: []
            },
            {
                id: "id3",
                children: []
            }
        ],
        [
            {
                id: "id4",
                children: []
            }
        ]
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

.tile-area {
    width: 100%;
    height: 100%;
    border: 5px solid black;
    border-radius: 20px;
}
</style>