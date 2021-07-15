<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-5 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="./assets/images/app-received-img3.png"
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
  computed: {
    ...mapMutations({
      setClass: { name: "d-flex bg-grey application-received-page" }
    })
  }
};
</script>
<style scoped>
/*@import "/../../../template/assets/css/self-future-not-solved.css";*/
</style>
