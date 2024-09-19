<template>
    <span class="avatar" :class="userStatus">
        L
    </span>
</template>

<script setup lang="ts">
const userStatus = ref<userStatus>("offline");
</script>

<style scoped>
.avatar {
    display: flex;
    width: 36px;
    height: 36px;
    line-height: 36px;
    justify-content: center;
    border-radius: 100%;
}

.avatar.offline {
    background-color: lightcoral;
}

.avatar.online {
    background-color: lightgreen;
}
</style>