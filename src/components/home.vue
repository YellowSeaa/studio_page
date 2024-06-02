<template>
    <div class="main-page">
        <!-- 此处加个class和style -->
        <TopBar class="fixed-top" />
        <Headline style="margin-top: 116px;"/>
        <Piece1 />
        <Piece2 />
        <Piece3 />
        <Piece4 />
        <Piece5 />
        <BottomBar />
    </div>
</template>

<script>
import TopBar from './TopBar.vue';
import Headline from './Headline.vue';
import Piece1 from './Piece1.vue';
import Piece2 from './Piece2.vue';
import Piece3 from './Piece3.vue';
import Piece4 from './Piece4.vue';
import Piece5 from './Piece5.vue';
import BottomBar from './BottomBar.vue';

export default {
    name: 'MainPage',
    components: {
        TopBar,
        Headline,
        Piece1,
        Piece2,
        Piece3,
        Piece4,
        Piece5,
        BottomBar
    }
};
</script>

<style scoped>
.main-page {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #ffffff;
    max-width: 1440px;
    /* 设置最大宽度 */
    margin-left: auto;
    /* 左侧自动填充 */
    margin-right: auto;
    /* 右侧自动填充 */
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* 可以根据需要设置宽度 */
  z-index: 999; 
  background-color: white; /* 可以根据需要设置背景颜色 */
  /* 其他样式属性 */
}
</style>