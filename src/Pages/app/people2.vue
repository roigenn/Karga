<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-5 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="/../../../template/assets/images/app-received-img4.png"
          alt=""
        />
      </div>
      <p>
        Portföyünüzde [IKON] rolüne sahip<br />
        kimse bulunmamaktadır.
      </p>
      <button>Şimdi Bul ve Ekle ></button>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey people2-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/people2.css";
</style>
