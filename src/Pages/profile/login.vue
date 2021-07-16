<template>
  <div class="bg-white">
    <header class="header-1 px-md-5 px-3 py-md-5 py-3 text-right">
      <a
        class="btn px-5 rounded-pill custom-text-primary custom-border-primary bird-24"
        href="#"
        >Kayıt Ol</a
      >
    </header>
    <div class="w-190 p-md-5 p-4">
      <div class="auth-wrapper mx-auto">
        <div class="text-center">
          <h1
            class="custom-text-primary font-futura-normal bird-34 d-inline-block auth-heading"
          >
            kargakarga
          </h1>
        </div>
        <form role="form" @submit.prevent="onSubmit">
          <div class="pt-5"></div>
          <label class="auth-label ml-4 custom-text-secondary">E-mail</label>
          <div
            class="input-group rounded-pill auth-input overflow-hidden px-3 py-1"
          >
            <input type="email" class="form-control border-0 no-focus" />
            <div class="input-group-append">
              <span
                class="input-group-text bg-transparent border-0 custom-text-secondary"
                ><i class="fa fa-at fa-lg"></i
              ></span>
            </div>
          </div>

          <div class="pt-4"></div>
          <label class="auth-label ml-4 custom-text-secondary">Şifre</label>
          <div
            class="input-group rounded-pill auth-input overflow-hidden px-3 py-1"
          >
            <input type="password" class="form-control border-0 no-focus" />
            <div class="input-group-append">
              <span
                class="input-group-text bg-transparent border-0 custom-text-secondary"
                ><i class="fa fa-eye-slash fa-lg"></i
              ></span>
            </div>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-1 py-3"
          >
            <div class="custom-control custom-switch">
              <input
                checked
                type="checkbox"
                class="custom-control-input"
                id="customSwitch"
              />
              <label
                class="custom-control-label custom-text-secondary"
                for="customSwitch"
                >Beni Hatırla</label
              >
            </div>
            <span class="custom-text-secondary small">Şifremi Unuttum</span>
          </div>

          <div
            class="pt-3 d-flex align-items-center justify-content-between"
            style="gap:0px 20px"
          >
            <a class="btn btn-light custom-border-primary rounded-pill px-5"
              ><img
                src="/../../../template/assets/images/google.png"
                height="20px"
            /></a>
            <button
              type="submit"
              class="btn custom-background-primary custom-border-primary rounded-pill text-white flex-fill"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="position-absolute bottom-0 text-center w-100">
      <img
        class="img-fluid"
        src="/../../../template/assets/images/auth-footer.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("setClass", {
      name: "pb-5"
    });
  },
  methods: {
    onSubmit() {
      this.$store.commit("setToken", "2222");
    }
  }
};
</script>
<style scoped>
@import "/../../../template/assets/css/auth.css";
</style>
