<template>
  <!-- class'ı parametre ile değişecek -->
  <div class="default-container ml-0 p-0" :class="getClass">
    <router-view name="leftBlank"></router-view>
    <router-view name="sidebar"></router-view>

    <fade-transition origin="center" mode="out-in" :duration="100">
      <router-view />
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import { mapGetters } from "vuex";
export default {
  components: {
    FadeTransition
  },
  computed: {
    ...mapGetters(["getClass"])
  }
};
</script>

<style></style>
