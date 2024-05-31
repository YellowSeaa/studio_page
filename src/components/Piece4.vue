<template>
    <div class="piece">
        <div class="top_part">
            <div class="top_text1">What our happy client say</div>
            <div class="top_2text2">Several selected clients, who already believe in our service.</div>
        </div>
        <div class="bottom_part">
            <div class="bottom_1">
                <img src="../assets/piece4.png" alt="">
            </div>
            <div class="bottom_2">
                <div class="bottom_text1">Matthew Paul</div>
                <div class="bottom_text2">Perfect, very good job! Thank you for the amazing design and work. Really
                    impressed with the high quality and quick turnaround time. Highly recommend.</div>
                <div class="select">
                    <div class="option" style="background: #2639ED;"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                </div>
            </div>
            <div class="bottom_3">
                <img src="../assets/piece4.png" alt="" class="img120">
                <img src="../assets/piece4.png" alt="" class="img98" style="left: 0px;top: 58px;">
                <img src="../assets/piece4.png" alt="" class="img98" style="left: 98px;top: 257px;">
                <img src="../assets/piece4.png" alt="" class="img68" style="left: 0px;top: 203px;">
                <img src="../assets/piece4.png" alt="" class="img68" style="left: 240px;top: 227px;">
                <img src="../assets/piece4.png" alt="" class="img54">
            </div>
        </div>
    </div>
</template>

<style scoped>
.piece {
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 597px;
    margin-top: 117px;
    margin-left: 107px;
    margin-right: 69px;
}

.top_part {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top_text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
    font-weight: normal;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0px;

    color: #000000;
}

.top_text2 {
    margin-top: 17px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 18px;
    font-weight: normal;
    line-height: 28.8px;
    text-align: center;
    letter-spacing: 0px;

    color: #757575;
}

.bottom_part {
    margin-top: 113px;
    display: flex;
    justify-content: space-between;
    height: 389px;
    align-items: center;
    width: 100%;
}

.bottom_1 {
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 500px 0px 500px 500px;
    width: 389px;
    height: 389px;
}

.bottom_1 img {
    width: 100%;
    height: 100%;
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 500px 0px 500px 500px;
}

.bottom_2 {
    display: flex;
    flex-direction: column;
    margin-left: 67px;
    margin-top: 84px;
    width: 412px;
    max-width: 600px;
}

.bottom_text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    text-align: left;
    letter-spacing: 0px;

    color: #000000;
}

.bottom_text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 25.6px;
    letter-spacing: 0px;
    margin-top: 21px;
    color: #565656;
}

.bottom_3 {
    position: relative;
    width: 348px;
    height: 355px;
    margin-left: 38px;
}

.img120 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    left: 124px;
    top: 107px;
    width: 120px;
    height: 120px;
    opacity: 1;
}

.img98 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    width: 98px;
    height: 98px;
    opacity: 1;
}

.img68 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    width: 68px;
    height: 68px;
    opacity: 1;

}

.img54 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    left: 200px;
    top: 30px;
    width: 54px;
    height: 54px;
    opacity: 1;
}

.select{
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 180px;
}

.option{
    border-radius: 500px 500px 500px 500px;
    width: 16px;
    height: 16px;
    background: #E7F0FC;
}
</style>