<template>
    <div>
        <vue3VideoPlay
        width="800px"
        title="冰河世纪"
        :src="options.src"
        :type="options.type"
        :autoPlay="false"
      />
    </div>
  </template>
  <script setup lang="ts">
  import { reactive } from "vue";
  const options = reactive({
    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
    type: "m3u8", //视频类型
  });
  </script>
  
  <style scoped></style>