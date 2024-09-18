<template>
    <span class="avatar" :class="avatarStatus">
        D
    </span>
</template>

<script setup lang="ts">
const avatarStatus = ref<AvatarStatus>("online");
</script>

<style scoped>
.avatar {
    display: flex;
    justify-content: center;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 100%;
}

.avatar .online {
    background-color: lightgreen;
}

.avatar .offline {
    background-color: lightcoral;
}
</style>