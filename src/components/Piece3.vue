<template>
    <div class="piece">
        <div class="left_part">
                <img src="../assets/piece3.png" alt="">
                <!-- <VideoPlayer videoSrc="../assets/cockatoo.mp4" coverSrc="../assets/piece1_1.png" /> -->
        </div>
        <div class="right_part">
            <div class="text1">Great Digital Product Agency since 2016 </div>
            <div class="text2">Our Business Plan is a written document describing a company's core business activites,
                Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality
                Product with modern idea accordingly their budgets and according thir reuirements.</div>
        </div>
    </div>
</template>

<script>
import VideoPlayer from './videoplayer.vue';

export default {
    name: 'App',
    components: {
        VideoPlayer
    }
};
</script>

<style scoped>
.piece {
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    margin-top: 146px;
    margin-left: 120px;
    margin-right: 120px;
    height: 436px;
}

.left_part {
    width: 550px;
    height: 372px;
    /* background-color: bisque; */
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 32px;
}

.left_part img {
    /* width: 100%;
    height: 100%; */
    width: 550px;
    height: 372px;
    object-fit: cover;
    /* 使图片覆盖整个容器 */
    object-position: center;
    /* 居中显示图片 */
}

.right_part {
    display: flex;
    flex-direction: column;
    width: 532px;
    max-width: 550px;
    margin-left: 119px;
}

.text1 {
    margin-top: 82px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
    font-weight: normal;
    line-height: 56px;
    letter-spacing: 0px;

    color: #000000;
}

.text2 {
    margin-top: 30px;
    margin-bottom: 122px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 25.6px;
    letter-spacing: 0px;

    color: #565656;
}
</style>