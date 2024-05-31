<template>
  <div class="video-player">
    <div class="cover" v-if="!isPlaying" @click="playVideo">
      <img :src="coverSrc" alt="Video cover" />
      <button class="play-button">Play</button>
    </div>
    <video ref="video" :src="videoSrc" @canplay="onCanPlay" @ended="onVideoEnded" controls></video>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'VideoPlayer',
  props: {
    videoSrc: {
      type: String,
      required: true
    },
    coverSrc: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const video = ref(null);
    const isPlaying = ref(false);

    const playVideo = () => {
      if (video.value) {
        video.value.play().then(() => {
          isPlaying.value = true;
        }).catch(error => {
          console.error("Error attempting to play video:", error);
        });
      }
    };

    const onCanPlay = () => {
      if (video.value) {
        video.value.controls = true;
      }
    };

    const onVideoEnded = () => {
      isPlaying.value = false;
    };

    return {
      video,
      isPlaying,
      playVideo,
      onCanPlay,
      onVideoEnded
    };
  }
};
</script>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  cursor: pointer;
}

.video-player video {
  width: 100%;
  display: block;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.cover img {
  width: 100%;
  height: 100%;
  display: block;
}

.play-button {
  position: absolute;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
</style>
