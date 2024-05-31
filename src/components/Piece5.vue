<template>
    <div class="a">
        <div class="piece">
            <div class="rectangle"></div>
            <div class="main">
                <div class="left_part">
                    <div class="text1">Subscribe Newsletter</div>
                    <div class="text2">I will update good news and promotion service not spam</div>
                </div>
                <div class="right_part">
                    <div class="back"></div>
                    <div class="input">
                        <input type="text" placeholder="Enter your email address..">
                        <button>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.piece {
    /* background-color: aqua; */
    position: relative;
    margin-top: 92px;
    margin-left: 82px;
    margin-right: 86px;
    height: 387px;
}

.main {
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 38px;
    top: 0px;
    border-radius: 75px;
    opacity: 1;
    width: 97%;
    /* max-width: 100%; */
    height: 292px;
    background-color: #F4F9FF;
}

.rectangle {
    position: absolute;
    left: 0px;
    top: 153px;
    width: 178px;
    height: 178px;
    transform: rotate(90deg);
    border-radius: 0px 0px 100px 0px;
    opacity: 1;

    background: #FFF5DB;
}

.left_part {
    display: flex;
    flex-direction: column;
    margin-left: 92px;
    margin-top: 98px;
    width: 40%;
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
    font-size: 18px;
    font-weight: normal;
    line-height: 28.8px;
    letter-spacing: 0px;

    color: #757575;
}

.right_part {
    position: relative;
    width: 60%;
    margin-left: 10px;
}

.back {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 80%;
    height: 292px;
    opacity: 1;
    border-radius: 380px 250px 250px 500px;
    background: #2639ED;
}

.input {
    position: absolute;
    right: 98px;
    top: 106px;
    width: 80%;
    height: 80px;
    border-radius: 60px;
    opacity: 1;

    box-sizing: border-box;
    border: 1px solid #F1F1F1;
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    background-color: white;

    display: flex;
    justify-content: space-between;
}

.input button {
    border-radius: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 39.2%;
    background: #2639ED;

    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: 1.04px;

    color: #FFFFFF;
}

.input input {
    border: none;
    /* 移除边框 */
    outline: none;
    /* 移除聚焦时的外边框 */
    width: 55%;
    border-radius: 60px;
    margin-left: 30px;
    font-size: 16px;
}
</style>