<template>
  <div class="bg-dark">
  <div >
    <div class="px-4 py-5 px-md-5 text-center text-lg-start">
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1
              class="my-5 display-3 fw-bold ls-tight"
              style="color: aqua; font-weight: bold"
            >
              Gyűjtsd be az édességet <br />
              <span style="color: blueviolet; font-weight: lighter"
                >A világ bármely részéről!</span
              >
            </h1>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card laböl" style="border-color: grey">
              <div class="card-body py-5 px-md-5 bg-dark">
                <form>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      placeholder="Felhasználó neved, pl. user1234"
                      v-model="FelhasznaloNevReg"
                    />
                    <label class="form-label" for="form3Example3"
                      >Felhasználónév</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      placeholder="Teljes Neved"
                      v-model="TeljesNev"
                    />
                    <label class="form-label" for="form3Example3">Neved</label>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      placeholder="user1234@pindurcandy.hu"
                      v-model="Email"
                    />
                    <label class="form-label" for="form3Example3"
                      >Email cím</label
                    >
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      placeholder="Jelszó"
                      v-model="JelszoReg"
                    />
                    <label class="form-label" for="form3Example4">Jelszó</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      placeholder="Jelszó Ismét"
                      v-model="JelszoUjra"
                    />
                    <label class="form-label" for="form3Example4"
                      >Jelszó ismét</label
                    >
                  </div>
                  <div id="szia"></div>
                  <!-- Submit button -->
                  <input
                    type="button"
                    class="btn btn-outline-info btn-block mb-4"
                    @click="registrySubmit()"
                    value="Regisztráció"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>
<style lang="css">
.laböl {
  color: white;
}
.hatter{
  background-image: url('../assets/regbg.jpg') no-repeat center center;
  background-size: cover;
}
</style>

<script>
import axios from "axios";
import sha256 from "sha256";
export default {
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      FelhasznaloNevReg: "",
      JelszoReg: "",
      JelszoUjra: "",
      TeljesNev: "",
      Email: "",
    };
  },
  methods: {
    refreshData() {},
    generateSalt(lengt) {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < lengt; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    /*atvalt(event){
      const file = event.target.files[0];
      const reader = new FileReader();
      /*reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split('data:image/png;base64,')[1];
        this.image = base64;
        console.log(this.image)
      };

      reader.onload = () => {
        const blob = new Blob([reader.result], { type: file.type });
        this.image = blob;
        console.log(this.image);
      };
    },*/
    async registrySubmit() {
      let userSalt = this.generateSalt(64);
      let body = {
        id: 0,
        felhasznaloNev: this.FelhasznaloNevReg,
        teljesNev: this.TeljesNev,
        salt: userSalt,
        hash: sha256(sha256(this.JelszoReg + userSalt).toString()).toString(),
        email: this.Email,
        key: "",
        //image: this.image,
      };
      if (
        this.Email == "" ||
        this.FelhasznaloNevReg == "" ||
        this.TeljesNev == ""
      ) {
        document.getElementById(
          "szia"
        ).innerHTML = `<div  class="p-1" style="color: red">
                      <p>Töltsön ki minden mezőt!</p> </div>`;
      } else {
        await axios
          .post(this.$store.state.API_URL + "Registry", body)
          .then((response) => {
            if (response.status == 200) {
              document.getElementById(
                "szia"
              ).innerHTML = `<div  class="p-1" style="color: lightgreen">
                      <p>Megerősítő email elküldve!</p> </div>`;
              alert("Kiment a mail!");
            }
            else if(response.status == 210){
              document.getElementById(
                "szia"
              ).innerHTML = `<div  class="p-1" style="color: yellow">
                      <p>Emailcím már létezik</p> </div>`;
            }
          })
          .catch((error) => {
            alert(error);
          });
        console.log(body);
      }
    },
    ellenorzes(Jelszo, JelszoUjra) {
      if (Jelszo != JelszoUjra) {
        //this.JelszoReg = "";
        this.JelszoUjra = "";
        alert("Hibás ismételt jelszómegadás!");
      } else {
      }
    },

    closeClick() {
      this.$router.push("/");
    },
  },
  mounted: function () {
    this.refreshData();
  },
};
</script>


