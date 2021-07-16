<template>
  <main class="mx-0 mx-lg-5 position-relative w-100">
    <div class="mx-auto d-flex flex-column justify-content-center">
      <div class="text-center mb-3">
        <img
          src="/../../../template/assets/images/profile/profile-avatar1.png"
          alt=""
        />
      </div>
      <div class="d-flex">
        <p class="br-outline p-2 mx-auto ft-tb2 bg-white">
          Profil fotoğrafını güncelle
        </p>
      </div>

      <div class="mb-2 text-center">
        <input
          class="br-outline py-2 px-3 mx-auto max-w-327"
          type="text"
          placeholder="Ad / Soy ad"
        />
      </div>

      <div class="text-center">
        <input
          class="br-outline py-2 px-3 mx-auto max-w-327"
          type="text"
          placeholder="Üniversite"
        />
      </div>
    </div>

    <div class="mt-81 text-center">
      <textarea class="edit-input" type="text" name="" id=""></textarea>
    </div>

    <div class="mt-81 text-center">
      <textarea class="edit-input" type="text" name="" id=""></textarea>
    </div>

    <div class="mt-4 ft-2">
      <router-link
        tag="button"
        class="mx-auto py-2 ft-t2 br-outline w-193 bg-white"
        :key="'profile'"
        :to="{ name: 'profile' }"
      >
        Kaydet
      </router-link>
    </div>
  </main>
</template>
<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "d-flex bg-grey profile-edit-page"
    });
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/profile.css";
</style>
