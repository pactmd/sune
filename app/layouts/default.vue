<template>
    <div class="layout">
        <header class="header-wrapper">
            <div class="profile-wrapper">
                <Avatar></Avatar>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.header-wrapper {
    display: flex;
    justify-content: flex-end;
}

.profile-wrapper {
    padding: 6px;
    background-color: grey;
    border-radius: 0 0 0 8px;
}
</style>

<style>
@import 'assets/styles/global.css'
</style>