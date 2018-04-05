<template>
  <div>
    <div class="wrapper">
      <div class="item">
        <strong>Svelte component</strong>
        <transition mode="out-in">
          <HelloAdapter :key="message" :message="message" />
        </transition>
      </div>

      <div class="item">
        <strong>HTMLElement (Expected behavior)</strong>
        <transition mode="out-in">
          <p :key="message">{{ message }}</p>
        </transition>
      </div>
    </div>

    <button @click="toggle">Toggle</button>
  </div>
</template>

<script>
import HelloAdapter from './HelloAdapter'

export default {
  components: {
    HelloAdapter
  },

  data() {
    return {
      message: 'foo'
    }
  },

  methods: {
    toggle() {
      this.message = this.message === 'foo' ? 'bar' : 'foo'
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
}

.item {
  margin-right: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: 2000ms;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
