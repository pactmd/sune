<template>
    <div class="number-wrapper" :class="{warning}">
        <button class="counter" @click="number--"></button>
        <div class="number-border" :class="{warning}">
            <div class="number-box">
                <contenteditable
                    class="number"
                    tag="span"
                    v-model.number="number"
                    :contenteditable="true"
                    :no-html="true"
                    :no-nl="true"
                    @keypress="checkNumber"
                ></contenteditable>
                <!-- <span ref="number" class="number" @keypress="checkNumber" contenteditable="true"></span> -->
            </div>
        </div>
        <button class="counter" @click="number++"></button>
    </div>
</template>

<script setup lang="ts">
// TODO: use this as long as this is not implemented:
// https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing
import contenteditable from 'vue-contenteditable';

const warning = ref(false);
// TODO: because contenteditable needs a string this will log a warning
// however it needs to be a number for math operations
const number = ref(Number.MAX_VALUE);

function checkNumber(event: KeyboardEvent) {
    if (isNaN(Number(event.key)) || number.value > 10) {
        event.preventDefault();
        warning.value = true;
        setTimeout(() => {
            warning.value = false;
        }, 1000);
    }
}
</script>

<style scoped>
/* TODO: will need this if actually using inputs */
/* Removes arrows on number input */
/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */

.number-wrapper {
    display: flex;
    align-items: center;
    justify-content: left;
}

.number-wrapper.warning {
    animation: shake 0.2s ease-in-out 0s 3;
}

.number-border {
    --hex-min-height: 2rem;
    --hex-min-width: calc(var(--hex-min-height) * (1/cos(30deg)));
    --hex-border-padding: 2px;

    padding: var(--hex-border-padding);
    background-color: black;

    clip-path: polygon(
        0% calc(100% - calc(var(--hex-min-height) / 2)),
        0% calc(var(--hex-min-height) / 2),
        calc(var(--hex-min-width) / 2 + var(--hex-border-padding)) calc(var(--hex-min-height) / -2),
        calc(100% - calc(var(--hex-min-width) / 2) - var(--hex-border-padding)) calc(var(--hex-min-height) / -2),
        100% calc(var(--hex-min-height) / 2),
        100% calc(100% - (var(--hex-min-height) / 2)),
        calc(100% - calc(var(--hex-min-width) / 2) - var(--hex-border-padding)) calc(100% + calc(var(--hex-min-height) / 2)),
        calc(var(--hex-min-width) / 2 + var(--hex-border-padding)) calc(100% + calc(var(--hex-min-height) / 2))
    );
    transition: background-color 0.2s;
}

.number-border.warning {
    animation: turn-red 1s linear 0s 1;
}

@keyframes shake {
    0% {margin-left: 0rem;}
    25% {margin-left: 0.5rem;}
    75% {margin-left: -0.5rem;}
    100% {margin-left: 0rem;}
}

@keyframes turn-red {
    0% {background-color: red;}
    90% {background-color: red;}
}

.number-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffff4;
    min-height: var(--hex-min-height);
    min-width: var(--hex-min-width);
    max-width: calc(var(--hex-min-width) * 4);
    clip-path: polygon(
        0% calc(100% - calc(var(--hex-min-height) / 2)),
        0% calc(var(--hex-min-height) / 2),
        calc(var(--hex-min-width) / 2) calc(var(--hex-min-height) / -2),
        calc(100% - calc(var(--hex-min-width) / 2)) calc(var(--hex-min-height) / -2),
        100% calc(var(--hex-min-height) / 2),
        100% calc(100% - (var(--hex-min-height) / 2)),
        calc(100% - calc(var(--hex-min-width) / 2)) calc(100% + calc(var(--hex-min-height) / 2)),
        calc(var(--hex-min-width) / 2) calc(100% + calc(var(--hex-min-height) / 2))
    );
}

.number {
    overflow-wrap: break-word;
    max-inline-size: calc(var(--hex-min-width) * 4);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

.counter {
    width: 0.75rem;
    height: 0.75rem;
    padding: 0;
    border: black solid 1px;
}
</style>