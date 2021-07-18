<template>
  <div class="position-relative" style="">
    <aside id="sideBar" class="my-auto">
      <div class="py-3 text-center">
        <img src="/../../../template/assets/images/nav/logo.png" class="logo" />
      </div>
      <ul class="list-group position-relative list-group-flush mx-0 px-0">
        <router-link tag="li" :key="'home'" :to="{ name: 'home' }">
          <a class="list-group-item mb-3">
            <div class="mr-2">
              <img
                width="42px"
                height="auto"
                src="/../../../template/assets/images/nav/nav-ico1.png"
                alt=""
              />
            </div>
            <div class="my-auto">
              Anasayfa
            </div>
          </a>
        </router-link>

        <router-link tag="li" :key="'profile'" :to="{ name: 'profile' }">
          <a class="list-group-item mb-3 active">
            <div class="mr-2">
              <img
                width="42px"
                height="auto"
                src="/../../../template/assets/images/nav/nav-ico2.png"
                alt=""
              />
            </div>
            <div class="my-auto">
              Profil
            </div>
          </a>
        </router-link>

        <router-link tag="li" :key="'selfFuture'" :to="{ name: 'selfFuture' }">
          <a class="list-group-item mb-3 ">
            <div class="mr-2">
              <img
                width="42px"
                height="auto"
                src="/../../../template/assets/images/nav/nav-ico3.png"
                alt=""
              />
            </div>
            <div class="my-auto">
              Öz Gelecek
            </div>
          </a>
        </router-link>

        <router-link tag="li" :key="'createTeam'" :to="{ name: 'createTeam' }">
          <a class="list-group-item mb-3">
            <div class="mr-2">
              <img
                width="42px"
                height="auto"
                src="/../../../template/assets/images/nav/nav-ico4.png"
                alt=""
              />
            </div>
            <div class="my-auto">
              Yarışma
            </div>
          </a>
        </router-link>

        <router-link
          tag="li"
          :key="'teamBuilding'"
          :to="{ name: 'teamBuilding' }"
        >
          <a class="list-group-item mb-3">
            <div class="mr-2">
              <img
                width="42px"
                height="auto"
                src="/../../../template/assets/images/nav/nav-ico5.png"
                alt=""
              />
            </div>
            <div class="my-auto">
              Ekibim
            </div>
          </a>
        </router-link>
        <template v-if="!isAuthenticated">
          <router-link tag="li" :key="'login'" :to="{ name: 'login' }">
            <a class="list-group-item mb-3 ">
              <div>
                <img
                  width="42px"
                  height="auto"
                  src="/../../../template/assets/images/nav/nav-ico6.png"
                  alt=""
                />
              </div>
              <div class="my-auto">
                Giriş
              </div>
            </a>
          </router-link>
        </template>
        <template v-else>
          <router-link tag="li" :key="'home2'" :to="{ name: 'home' }">
            <a class="list-group-item mb-3 " @click="logout">
              <div>
                <img
                  width="42px"
                  height="auto"
                  src="/../../../template/assets/images/nav/nav-ico6.png"
                  alt=""
                />
              </div>
              <div class="my-auto">
                Çıkış
              </div>
            </a>
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
