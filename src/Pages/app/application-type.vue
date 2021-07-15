<template>
  <main class="mx-0 mx-lg-5 position-relative py-5 py-md-0 ">
    <div class="row mx-0">
      <div class="col-lg-6 mb-4 mb-lg-0 border-right-lg">
        <div class="card-box mx-auto pb-5">
          <div class="position-relative">
            <img
              class="w-100 h-auto"
              src="../../.././template/assets/images/type-img1.png"
              alt=""
            />
            <button class="outline-blue ">Şimdi Başvur></button>
          </div>
          <h5 class="mx-3">Ekibimi kendim oluşturacağım</h5>
          <p class="mx-3">
            Portföyünüzdeki kişilerden ekibinizi kendiniz oluşturun.
          </p>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card-box mx-auto pb-5">
          <div class="position-relative">
            <img
              class="w-100 h-auto"
              src="../../.././template/assets/images/type-img1.png"
              alt=""
            />
            <button class="outline-blue ">Şimdi Başvur ></button>
          </div>
          <h5 class="mx-3">Ekibimi kendim oluşturacağım</h5>
          <p class="mx-3">
            Öz Gelecek Raporunuza göre Karga Karga sizin için<br />
            en ideal ekibi oluştursun.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapMutations({
      setClass: { name: "d-flex bg-grey application-received-page" }
    })
  }
};
</script>
<style scoped>
@import "../../.././template/assets/css/application.css";
</style>
