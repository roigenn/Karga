<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-4 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="/../../../template/assets/app-received-img2.png"
          alt=""
        />
      </div>

      <h5>Seni Tanımıyorum.</h5>
      <p>
        Yarışmaya başvurabilmek için Öz Gelecek testini çözmen gerekiyor. Karga
        Karga Müneccim değil.
      </p>
      <button>Şimdi Çöz ></button>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey self-future-not-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/self-future-not-solved.css";
</style>
