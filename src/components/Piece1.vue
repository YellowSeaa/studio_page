<template>
    <div class="piece">
        <div class="left_part">
            <div class="text1">Our Client</div>
            <div class="text2">Several selected clients, who already believe in our service.</div>
        </div>
        <div class="right_part">
            <img src="../assets/piece1_1.png" alt="">
            <img src="../assets/piece1_2.png" alt="">
            <img src="../assets/piece1_3.png" alt="">
            <img src="../assets/piece1_4.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.piece {
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-right: 120px;
    margin-left: 120px;
    height: 124px;
}

.left_part {
    display: flex;
    flex-direction: column;
}

.text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
    font-weight: normal;
    line-height: 56px;
    letter-spacing: 0px;
}

.text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 18px;
    font-weight: normal;
    line-height: 28.8px;
    letter-spacing: 0px;
    color: #757575;
}

.right_part{
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    align-items: center;
}

.right_part img{
    height: 50px;
    margin-right: 59px;
}
</style>