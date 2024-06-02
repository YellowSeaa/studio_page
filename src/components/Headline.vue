<template>
    <div class="headline">
        <div class="left_part">
            <div class="text1">一个专注高效的学习帮手</div>
            <div class="text2">试卷簿APP，针对平板无纸化学习中的试题练习与整理，为用户提供一个优雅、高效且易于使用的学习软件，填补学生无纸化学习中的需求</div>
            <button>立即下载</button>
        </div>
        <div class="right_part">
            <div class="rectangle1"></div>
            <div class="rectangle2"></div>
            <img src="../assets/headimg1.png" alt="">
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
    min-width: 817px;
    height: 100%;
    overflow: auto;
    position: relative;
    /* background-color: red; */
}

.right_part img {
    height: 512px;
    width: 754px;
    /* min-width: 754px; */
    /* border-radius: 0px 0px 0px 200px; */
    position: absolute;
    top: 0px;
    right: 0px;
    /* margin-left: 64.5px;
    margin-bottom: 89px; */
}

.rectangle1{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 129px;
    height: 129px;
    background: #DAE9FF;
    border-radius: 500px 500px 500px 500px;
}

.rectangle2{
    position: absolute;
    bottom: 0px;
    right: 120px;
    width: 178px;
    height: 178px;
    background: #FFF5DB;
    border-radius: 0px 0px 100px 0px;
}
</style>