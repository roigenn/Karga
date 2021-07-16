<template>
  <div class="position-relative" style="height: 100vh; display:flex">
    <aside id="sideBar" class="my-auto">
      <div class="py-3 text-center">
        <img src="/../../../template/assets/images/nav/logo.png" class="logo" />
      </div>
      <ul class="list-group position-relative list-group-flush mx-0 px-0">
        <router-link tag="li" :key="'home'" :to="{ name: 'home' }">
          <a class="list-group-item mb-3 active"> Anasayfa </a>
        </router-link>

        <router-link tag="li" :key="'profile'" :to="{ name: 'profile' }">
          <a class="list-group-item mb-3 active"> Profil </a>
        </router-link>

        <router-link tag="li" :key="'selfFuture'" :to="{ name: 'selfFuture' }">
          <a class="list-group-item mb-3 active"> Özgelecek </a>
        </router-link>

        <router-link tag="li" :key="'createTeam'" :to="{ name: 'createTeam' }">
          <a class="list-group-item mb-3 active"> Yarışma </a>
        </router-link>

        <router-link
          tag="li"
          :key="'teamBuilding'"
          :to="{ name: 'teamBuilding' }"
        >
          <a class="list-group-item mb-3 active"> Ekibim </a>
        </router-link>
        <template v-if="!isAuthenticated">
          <router-link tag="li" :key="'login'" :to="{ name: 'login' }">
            <a class="list-group-item mb-3 active"> Login </a>
          </router-link>
        </template>
        <template v-else>
          <router-link tag="li" :key="'home'" :to="{ name: 'home' }">
            <a class="list-group-item mb-3 active" @click="logout"> Logout </a>
          </router-link>
        </template>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      console.log("logout");
      this.$store.commit("clearToken");
    }
  }
};
</script>
