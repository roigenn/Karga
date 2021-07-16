<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-5 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="/../../../template/assets/images/app-received-img3.png"
          alt=""
        />
      </div>

      <h5>Portföyünde En Az 9 Kişi Olmalı!</h5>
      <p>
        Portföyünde 9’dan daha az kişi var.<br />
        Adam toplayıp gelmelisin.
      </p>
      <button>Şimdi Bul ve Ekle ></button>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey people1-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/people1.css";
</style>
