<template>
    <div class="tile-container">
        <Tile :tiledata="tiledata"></Tile>
    </div>
</template>

<script setup lang="ts">

// const tiledata: TileData = reactive({
//     horizontal: true,
//     children: [{
//         children: [{}, {}]
//     }, {}]
// })

const tiledata: TileData = reactive({
    children: [{
        horizontal: true,
        children: [{}, {}]
    }, {}, {}]
})

</script>

<style scoped>
.tile-container {
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
}
</style>