<template>
  <main
    class="mx-0 mx-lg-5 position-relative d-flex flex-column mb-5 mb-md-0 pb-5 pb-md-0"
  >
    <div class="row mx-0">
      <div class="col-12 mb-5">
        <h5>
          Ekibinizde
          <img
            src="/../../../template/assets/images/portfolio/port-ico32.png"
            width="69px"
            height="73px"
            alt=""
          />
          rolüne sahip kullanıcıları görüntülüyorsunuz.
        </h5>
      </div>
      <card></card>
      <card></card>
      <card></card>
      <card></card>

      <card></card>
      <card></card>
      <card></card>
      <card></card>

      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </div>

    <button>Davet Gönder</button>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "../../components/contest-invitation-card.vue";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey contest-invite-page"
    });
  },
  components: { Card }
};
</script>
<style scoped>
@import "/../../../template/assets/css/contest-invite.css";
</style>
