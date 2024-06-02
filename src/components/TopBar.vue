<template>
    <div class="bar">
        <div class="name">试卷簿</div>
        <div class="label">
            <div @click="roll(0)">首页</div>
            <div @click="roll(650)">支持平台</div>
            <div @click="roll(900)">特色与优势</div>
            <div @click="roll(1850)">APP演示</div>
            <div @click="roll(2400)">团队介绍</div>
            <div @click="roll(3000)">订阅我们</div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    roll(where) {
      console.log('Div 被点击了！');
      // 在这里可以执行你想要的函数逻辑
      document.documentElement.scrollTop = where;
    }
  }
}
</script>

<style scoped>
.bar {
    display: flex;
    justify-content: space-between;
    padding-top: 42px;
    padding-left: 120px;
    padding-right: 120px;
    padding-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* x-offset y-offset blur spread color */
    /* margin-top: 42px;
    margin-left: 120px;
    margin-right: 120px; */
}

.name {
    font-family: '黑体';
    font-size: 27.15px;
    font-weight: normal;
    line-height: 38px;
    letter-spacing: 0px;
    color: #000000;
}

.label{
    display: flex;
    justify-content: space-around;
    width: 645px;
    height: 20px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    align-items: center;
    height: 100%;
}
</style>