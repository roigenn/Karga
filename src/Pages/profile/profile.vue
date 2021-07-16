<template>
  <main class="mx-0 mx-lg-5 position-relative">
    <section class="d-flex flex-column flex-xl-row justify-content-between">
      <div class="d-flex mb-4 mb-xl-0 mx-auto mx-xl-0">
        <div class="d-flex mr-3">
          <div class="img-box">
            <img
              class="img-fluid"
              src="/../../../template/assets/images/profile/profile-ico1.png"
              alt=""
            />
          </div>
        </div>
        <div class="d-flex mr-3">
          <div class="img-box">
            <img
              class="img-fluid"
              src="/../../../template/assets/images/profile/profile-ico2.png"
              alt=""
            />
          </div>
        </div>
        <div class="d-flex mr-3">
          <div class="img-box">
            <img
              class="img-fluid"
              src="/../../../template/assets/images/profile/profile-ico1.png"
              alt=""
            />
          </div>
        </div>
        <div class="d-flex mr-3">
          <div class="img-box">
            <img
              class="img-fluid"
              src="/../../../template/assets/images/profile/profile-ico2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class=" mb-4 mb-xl-0">
        <div class="text-center mb-3">
          <img
            src="/../../../template/assets/images/profile/profile-avatar1.png"
            alt=""
          />
        </div>
        <p class="ft-t1 text-center">Murat Turan, MsC</p>
        <p class="ft-t2 text-center">Università degli studi di Pavia</p>
      </div>

      <div class="grey-box radius-20 mx-auto mx-xl-0">
        <span class="font-weight-bold">100</span>&nbsp;Followers -
        <span class="font-weight-bold">100</span>&nbsp;Following
      </div>
    </section>

    <hr class="mw-495" />

    <section class="mt-4">
      <h3 class="ft-tb1 text-center">Bio</h3>
      <textarea class="ft-default gr-oultine-box w-100">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </textarea
      >
    </section>

    <hr class="mt-38 mb-0" />
    <section class="mt-4">
      <h3 class="ft-tb1 text-center">Eğitim Bilgileri</h3>
      <div class="row mx-0 mt-3">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <textarea
            rows="5"
            class="ft-default gr-oultine-box mh-122 h-100% w-100"
          >
Gaziantep Üniversitesi - Mühendislik Fakültesi Elektrik Elektronik Mühendisliği
Lisans
2016-2022
                            </textarea
          >
        </div>
        <div class="col-lg-6">
          <textarea rows="5" class="ft-default gr-oultine-box mh-122 w-100">
Bialystok Technology University - Faculty of Engineering Computer Engineering
Bachelors
2019-2020
                            </textarea
          >
        </div>
      </div>
    </section>

    <div class="mt-34 d-flex">
      <router-link
        tag="a"
        class="d-flex mx-auto py-2 px-4 ft-t4 gr-oultine-box"
        :key="'profileEdit'"
        :to="{ name: 'profileEdit' }"
      >
        <div class="mr-4 my-auto ft-1">
          Profili Düzenle
        </div>
        <img
          class="my-auto"
          src="/../../../template/assets/images/profile/profile-ico3.png"
          alt=""
        />
      </router-link>
    </div>
  </main>
</template>
<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey profile-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/profile.css";
</style>
