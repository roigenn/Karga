<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-4 py-md-0">
    <div class="card-box">
      <div>
        <img
          class="img-fluid"
          src="../../template/assets/images/app-received-img2.png"
          alt=""
        />
      </div>

      <h5>HOŞGELDİN</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione
        quam rerum possimus non labore molestias saepe voluptas sunt,
        accusantium animi. Architecto exercitationem in laboriosam ullam, dolor
        minima recusandae repellendus.
      </p>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import { mutations } from "../store/modules/other";
import { router } from ".././router";
export default {
  created() {
    console.log("HOMEEEEE");

    if (!this.$store.getters.isAuthenticated) {
      router.push("/login");
    }
    this.$store.commit("setClass", {
      name: "d-flex bg-grey self-future-not-page"
    });
  }
};
</script>
<style scoped>
@import "/../../template/assets/css/self-future-not-solved.css";
</style>
