<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-5 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="/../../../template/assets/images/app-received-img1.png"
          alt=""
        />
      </div>
      <div class="my-3">
        <img
          src="/../../../template/assets/images/app-received-img5.png"
          alt=""
        />
      </div>
      <h5>Başvurun Alınmıştır</h5>
      <p>
        Yarışma başvurunuz başarılı bir<br />
        şekilde alınmıştır.
      </p>
      <button>Ana Sayfaya Dön ></button>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey application-received-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/application-received.css";
</style>
