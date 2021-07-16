<template>
  <main class="mx-0 mx-lg-5 position-relative py-5 py-lg-0">
    <div class="row mx-0">
      <div class="col-lg-6 col-xl-4 mb-5 mb-xl-0">
        <div class="card-box mx-auto">
          <img
            class="w-100 h-auto"
            src="/../../../template/assets/images/satellite.png"
            alt=""
          />
          <h5>Uzay Kategorisi</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <button class="outline-blue ">Şimdi Başvur ></button>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4 mb-5 mb-xl-0">
        <div class="card-box mx-auto">
          <img
            class="w-100 h-auto"
            src="/../../../template/assets/images/satellite.png"
            alt=""
          />
          <h5>Uzay Kategorisi</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <button class="outline-blue ">Şimdi Başvur ></button>
        </div>
      </div>
      <div class="col-lg-12 col-xl-4 mb-5 mb-xl-0">
        <div class="card-box mx-auto">
          <img
            class="w-100 h-auto"
            src="/../../../template/assets/images/satellite.png"
            alt=""
          />
          <h5>Uzay Kategorisi</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <button class="outline-blue ">Şimdi Başvur ></button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey categories-page"
    });
  }
};
</script>
<style scoped>
/*@import "/../../../template/assets/css/self-future-not-solved.css";*/
</style>
