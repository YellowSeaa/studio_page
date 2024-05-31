<template>
    <div class="bottombar">
        <div class="left_part">
            <div class="left_text1">A+ Studio</div>
            <div class="left_text2">Leading digital agency with solid design and development expertise. We build
                readymade websites, mobile applications, and elaborate online business services.</div>
            <div class="left_bottom">
                <img src="../assets/piece4.png" alt="">
                <img src="../assets/piece4.png" alt="">
                <img src="../assets/piece4.png" alt="">
            </div>
        </div>
        <div class="right_part">
            <div class="block">
                <div class="block_title">What We Do</div>
                <div class="block_items">
                    <div class="itme_text">Web Design
                        <br>App Design
                        <br>Social Media Manage
                        <br>Market Analysis Project</div>
                </div>
            </div>
            <div class="block">
                <div class="block_title">Company</div>
                <div class="block_items">
                    <div class="itme_text">About Us
                        <br>Career
                        <br>Become Investor</div>
                </div>
            </div>
            <div class="block">
                <div class="block_title">Support</div>
                <div class="block_items">
                    <div class="itme_text">FAQ
                        <br>Policy
                        <br>Business</div>
                </div>
            </div>
            <div class="block">
                <div class="block_title">Contact</div>
                <div class="block_items">
                    <div class="itme_text">WhatsApp
                        <br>Support 24</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bottombar {
    margin-top: 107px;
    margin-left: 120px;
    margin-right: 120px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
}

.left_part {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    max-width: 30%;
}

.left_text1 {
    font-family: ProximaNova;
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    letter-spacing: 0px;

    color: #000000;

}

.left_text2 {
    margin-top: 26px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 14px;
    font-weight: normal;
    line-height: 22.4px;
    letter-spacing: 0px;

    color: #565656;
}

.left_bottom {
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    margin-top: 20px;
    margin-bottom: 80px;
}

.left_part img {
    width: 36px;
    height: 36px;
    border-radius: 500px 500px 500px 500px;
}

.right_part {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
    margin-top: 60px;
}

.block {
    margin-left: 80px;
    max-width: 150px;
}

.block_title {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 0px;

    color: #000000;
}

.itme_text {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 14px;
    font-weight: normal;
    line-height: 28px;
    letter-spacing: 0px;

    color: #000000;
}

.block_items{
    margin-top: 24px;
}
</style>