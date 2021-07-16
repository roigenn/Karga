<template>
  <main class="mx-0 mx-lg-5 position-relative d-flex flex-column py-4 py-lg-0">
    <div class="row mx-0 my-auto">
      <div class="col-md-4 mb-3 mb-lg-0 border-right-md">
        <div class="card-box mx-auto">
          <h5>1. Ekip Üyesi</h5>
          <div class="text-center">
            <img
              class=""
              src="/../../../template/assets/images/portfolio/avatar1.png"
              width="136px"
              height="136px"
              alt=""
            />
            <p>Deniz Can Ilgın</p>
            <div>
              <img
                src="/../../../template/assets/images/portfolio/port-ico1.png"
                alt=""
              />
              <img
                src="/../../../template/assets/images/portfolio/port-ico2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 mb-lg-0 border-right-md">
        <div class="card-box mx-auto">
          <h5>2. Ekip Üyesi</h5>
          <div class="text-center">
            <div>
              <router-link
                tag="button"
                :key="'applicationReceived'"
                :to="{ name: 'applicationReceived' }"
              >
                <i class="fas fa-plus"></i>
              </router-link>
            </div>
            <div>
              <img
                src="/../../../template/assets/images/portfolio/port-ico3.png"
                alt=""
              />
              <img
                src="/../../../template/assets/images/portfolio/port-ico4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 mb-lg-0">
        <div class="card-box mx-auto">
          <h5>3. Ekip Üyesi</h5>
          <div class="text-center">
            <router-link
              tag="button"
              :key="'applicationReceived'"
              :to="{ name: 'applicationReceived' }"
            >
              <i class="fas fa-plus"></i>
            </router-link>
            <div>
              <img
                src="/../../../template/assets/images/portfolio/port-ico3.png"
                alt=""
              />
              <img
                src="/../../../template/assets/images/portfolio/port-ico4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      tag="button"
      :key="'applicationReceived'"
      :to="{ name: 'applicationReceived' }"
    >
      <i class="fas fa-plus">Ekibimi Oluştur</i>
    </router-link>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey team-building-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/team-building.css";
</style>
