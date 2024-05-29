<template>
    <div class="bar">
        <div class="name">A Studio</div>
        <div class="label">
            <div>Home</div>
            <div>What We Do</div>
            <div>Service</div>
            <div>Project</div>
            <div>Blog</div>
            <div>Contact</div>
        </div>
    </div>
</template>

<style scoped>
.bar {
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
    margin-left: 120px;
    margin-right: 120px;
}

.name {
    font-family: ProximaNova;
    font-size: 27.15px;
    font-weight: normal;
    line-height: 38px;
    letter-spacing: 0px;
    color: #000000;
}

.label{
    display: flex;
    justify-content: space-around;
    width: 645px;
    height: 20px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    align-items: center;
    height: 100%;
}
</style>