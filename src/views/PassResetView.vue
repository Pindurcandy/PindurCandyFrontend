<template>
  <!-- Section: Design Block -->
  <section class="">
    <!-- Jumbotron -->
    <div class="px-4 py-5 px-md-5 text-center text-lg-start bg-dark">
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1
              class="my-5 display-3 fw-bold ls-tight"
              style="color: aqua; font-weight: bold"
            >
              Elfelejtetted a jelszavad? <br />
              <span style="color: blueviolet; font-weight: lighter"
                >Semmi probléma, küldünk emlékeztetőt!</span
              >
            </h1>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card laböl" style="border-color: grey">
              <div class="card-body py-5 px-md-5 bg-dark">
                <form>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      placeholder="user1234@pindurcandy.hu"
                      v-model=EmailCim
                    />
                    <label class="form-label" for="form3Example3" style="color:white"
                      >Email cím</label
                    >
                  </div>
                  <div id="szia">

                  </div>
                  <!-- Submit button -->
                  <input
                  type="button"
                    @click="eMailKuldes(EmailCim)"
                    class="btn btn-outline-info btn-block mb-4"
                    value="Email küldése"
                  />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
<!-- Section: Design Block -->
</template>
<script>
import axios from "axios";
export default {
  name: "ElfelejtettJelszo",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      EmailCim: "",
    };
  },
  methods: {
    refreshData() {},
    eMailKuldes(EmailCim) {
      axios
        .post(this.$store.state.API_URL + "Jelszo/" + EmailCim)
        .then((response) => {
          let uzi = response.data;
          document.getElementById("szia").innerHTML=`<div  class="p-1" style="color: lightgreen">
                      <p>Kód kiküldve</p> </div>`
          alert(uzi);
        })
        .catch((error) => {
          alert(error);
        });
        this.EmailCim="";
    },

    closeClick() {
      this.EmailCim = "";
      this.$router.push("/");
    },
  },
  mounted: function () {
    this.refreshData();
  },
};
</script>

<style>
</style>
