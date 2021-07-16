<template>
  <main class="position-relative w-100 d-flex align-items-center py-3">
    <div class="tab-box1 d-flex flex-column my-auto w-100">
      <div class="w-100">
        <ul
          id="tabs1"
          class="nav nav-tabs justify-content-between w-100 border-0 mb-5 mt-2 px-1"
        >
          <li class="nav-item my-auto">
            <a
              href=""
              data-target="#myTeam"
              data-toggle="tab"
              class="nav-link active"
              >Ekibim</a
            >
          </li>
          <li class="nav-item my-auto">
            <a href="" data-target="#myTeams" data-toggle="tab" class="nav-link"
              >Bulunduğum Ekiplerim</a
            >
          </li>
          <li class="nav-item my-auto">
            <a
              href=""
              data-target="#MyTeamsInvites"
              data-toggle="tab"
              class="nav-link"
              >Ekip Davetlerim</a
            >
          </li>
        </ul>
      </div>

      <br />

      <div id="tabsContent1" class="tab-content position-relative">
        <div id="myTeam" class="myteam tab-pane fade active show">
          <div class="d-flex flex-wrap">
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
            <card></card>
            <card></card>
            <card></card>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "../../components/portfolio-card.vue";
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey portfolio-page"
    });
  },
  components: { Card }
};
</script>
<style scoped>
@import "/../../../template/assets/css/portfolio.css";
</style>
