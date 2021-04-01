<template>
  <div class="home">
    <div class="text" :class="{ show }">
      Colmon.fr
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    show: false,
  }),

  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  },
};
</script>

<style scoped>
@keyframes blink {
  0% { background-color: #000; color: #FFF; letter-spacing: 5px; }
  50% { background-color: #FFF; color: #000; letter-spacing: 10px; }
  100% { background-color: #000; color: #FFF; letter-spacing: 5px; }
}

.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: blink 10s cubic-bezier(1, 0, 0, 1) infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  font-size: 11vw;
  margin-bottom: 50px;
  opacity: 0;
}

.show {
  opacity: 1;
  margin: 0;
}

@media screen and (min-width: 500px) {
  .text { font-size: 80px }
}

</style>
