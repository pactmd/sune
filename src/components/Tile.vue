<template>
    <splitpanes class="default-theme" :horizontal="props.tiledata.horizontal">
        <pane v-if="!props.tiledata.children?.length" :style="{backgroundColor: randomColor()}">Editable</pane>
        <pane v-for="(tile, index) in props.tiledata.children" :style="{backgroundColor: randomColor()}">
            <div class="padder">
                <Tile :tiledata="tile"></Tile>
            </div>
        </pane>
    </splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css'

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
.splitpanes__pane {
    display: flex;
    justify-content: center;
    align-items: center;
}

.padder {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
</style>