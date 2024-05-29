<template>
    <div class="headline">
        <div class="left_part">
            <div class="text1">A Digital Product Agency</div>
            <div class="text2">Leading digital agency with solid design and development expertise. We build readymade
                websites, mobile applications, and elaborate online business services.</div>
            <button>Contact Now</button>
        </div>
        <div class="right_part">
            <img src="../assets/headimg.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.headline {
    /* background-color: antiquewhite; */
    margin-top: 40px;
    margin-left: 68px;
    height: 608px;
    display: flex;
    justify-content: space-between;
}

.left_part {
    max-width: 40%;
    margin-left: 52px;
    margin-right: 32px;
    margin-top: 123px;
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
}

.text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
}

.text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 25.6px;
    letter-spacing: 0px;
    margin-top: 40px;
    color: #565656;
    max-width: 600px;
}

.left_part button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
    border-radius: 60px;
    background: #2639ED;
    font-size: 20px;
    font-family: AvertaDemoPECuttedDemo;
    color: white;
    width: 215px;
    height: 65px;
}

.right_part {
    max-width: 60%;
    overflow: hidden;
    /* background-color: red; */
}

.right_part img {
    height: 512px;
    max-width: 100%;
    border-radius: 0px 0px 0px 200px;
    /* margin-left: 64.5px;
    margin-bottom: 89px; */
}
</style>