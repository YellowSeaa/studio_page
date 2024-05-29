<template>
    <div class="piece">
        <div class="left_part">
            <div class="text1">How can we help your Business ?</div>
            <div class="text2">We build readymade websites, mobile applications, and elaborate online business services.
            </div>
        </div>
        <div class="right_part">
            <div class="block_row" style="margin-top: 79px;">
                <div class="block">
                    <img src="../assets/piece2_1.png" alt="">
                    <div class="block_text1">Business Idea Planning</div>
                    <div class="block_text2">We present you a proposal and discuss niffty-gritty like</div>
                </div>
                <div class="block">
                    <img src="../assets/piece2_2.png" alt="">
                    <div class="block_text1">Financial Planning System</div>
                    <div class="block_text2">Protocols apart from aengage models, pricing billing</div>
                </div>
            </div>
            <div class="block_row">
                <div class="block">
                    <img src="../assets/piece2_3.png" alt="">
                    <div class="block_text1">Development Website and App</div>
                    <div class="block_text2">Communication protocols apart from engagement models</div>
                </div>
                <div class="block">
                    <img src="../assets/piece2_4.png" alt="">
                    <div class="block_text1">Market Analysis Project</div>
                    <div class="block_text2">Protocols apart from aengage models, pricing billing</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.piece {
    /* background-color:rgb(0, 255, 115); */
    display: flex;
    justify-content: space-between;
    margin-top: 94px;
    margin-left: 82px;
    height: 867px;
    background-image: url('../assets/piece2_background.png');
    background-size: 100% 100%;
            background-repeat: no-repeat;
}

.left_part {
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    max-width: 358px;
    margin-left: 38px;
    margin-right: 91px;
    margin-top: 220px;
}

.right_part {
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: space-around;
    margin-right: 183px;
}

.text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
    font-weight: normal;
    line-height: 56px;
    letter-spacing: 0px;

    color: #000000;
}

.text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 25.6px;
    letter-spacing: 0px;

    color: #565656;
}

.block_row {
    /* background-color: bisque; */
    display: flex;
    flex-direction: column;
    margin-left: 34px;
}

.block {
    /* background-color: #000000; */
    display: flex;
    height: 379px;
    width: 308px;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid #F2F2F2;
    border-radius: 40px;
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.05);
}

.block img {
    margin-top: 63px;
}

.block_text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0px;

    margin-top: 54px;
    margin-left: 38px;
    margin-right: 38px;
}

.block_text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 22.4px;
    text-align: center;
    letter-spacing: 0px;

    color: #757575;

    margin-top: 27px;
    margin-left: 31px;
    margin-right: 31px;
}
</style>