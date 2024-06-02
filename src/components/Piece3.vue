<template>
    <div class="piece">
        <div class="left_part">
            <!-- <img src="../assets/piece3.png" alt=""> -->
            <vue3VideoPlay
        width="100%"
        height="100%"
        :src="options.src"
        :type="options.type"
        :autoPlay="false"
      />
        </div>
        <div class="right_part">
            <div class="text1">APP演示视频</div>
            <div class="text2">在左侧的视频中，我们将详细向您展示软件的试卷整理、精选题目、习题编写以及错题整理等功能。通过观看此视频，您将全面了解本APP构建的一套高效试题练习整理流程，为您的学习提供强有力的支持。</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  src: "http://sp-input.oss-cn-shanghai.aliyuncs.com/Act-m3u8-segment/e5cb860711c445078c54f93b53a987bd/piece3.m3u8", //视频源
  type: "m3u8", //视频类型
});
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
    overflow: hidden;
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

.videoplay{
    height: 100%;
    width: 100%;
}
</style>