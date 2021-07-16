<template>
  <main class="mx-0 mx-lg-5 position-relative">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active my-auto"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          class="my-auto"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          class="my-auto"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="3"
          class="my-auto"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/../../../template/assets/images/bg-4.jpeg"
            alt="First slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <img
          class="img-fluid"
          src="/../../../template/assets/images/arrow-left.png"
          alt=""
        />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <img
          class="img-fluid"
          src="/../../../template/assets/images/arrow-right.png"
          alt=""
        />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey competition-slide-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/competition-slide.css";
</style>
