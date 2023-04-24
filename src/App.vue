<template>
  <section>
    <nav class="navbar navbar-expand-lg navszin">
      <img class="navbar-brand kep" src="../src/assets/logo.png" href="/" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-left-square-fill" viewBox="0 0 16 16">
  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707z"/>
</svg></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Főoldal <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/termekek">Termékek</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/rolunk">Rólunk</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Felhasználó
            </a>
            <!--Bejelentkezoresz:D-->
            <div
              class="dropdown-menu bg-dark dropdown-dark text-light statebe"
              id="csere"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <h2 class="centered" v-if="!logged">Bejelentkezés</h2>
              <div v-else>
                <h2 class="centered">
                  Bejelentkezett felhasználó
                </h2>
                <img
                  class="profilkep"
                  :src="'data:image/png;base64,' + this.$store.state.Image"
                />
                <p
                  class="text-center"
                >
                  {{ this.$store.state.teljesNev }}
                  <p
                  style="
                    font-size: 12px;
                    color: gray;
                    text-decoration: initial;
                    margin: auto;
                    width:50%;
                  "
                >
                  &nbsp;@{{ this.$store.state.felhasznaloNev }}
                </p>
              </p>
                
              </div>

              <form class="px-4 py-3">
                <div class="form-group" v-if="!logged">
                  <label class="centered" for="exampleDropdownFormEmail1"
                    >Felhasználói adatok</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="user1234"
                    v-model="FelhasznaloNev"
                  />
                </div>
                <div class="form-group" v-if="!logged">
                  <label for="exampleDropdownFormPassword1">Jelszó</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="Jelszó"
                    v-model="Jelszo"
                  />
                </div>
                <div id="error"></div>
                <button
                  type="button"
                  class="btn btn-outline-info"
                  v-if="!logged"
                  @click="loginClick(FelhasznaloNev, Jelszo)"
                >
                  Bejelentkezés
                </button>
                <button
                  type="submit"
                  class="btn btn-outline-info"
                  v-else
                  @click="logoutClick()"
                >
                  Kijelentkezés
                </button>
              </form>
              <a href="/register" class="dropdown-item loglink" v-if="!logged">
                Regisztráció
              </a>
              <a href="/passreset" class="dropdown-item loglink" v-if="!logged">
                Elfelejtetted a jelszót?
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </section>
  <section class="zarcsiktorles">
    <router-view></router-view>
  </section>
</template>

<style lang="css">
.kep {
  width: 10%;
}
.loglink {
  color: rgba(255, 255, 255, 0.5);
}
html {
  background-color: #343a40;
}
</style>
<script>
import axios from "axios";
import sha256 from "sha256";
import { mapMutations } from "vuex";

export default {
  name: "FelhasznalokView",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      logged: this.$store.state.logged,
      userName: "a",
      lekertSalt: "",
      password: "a",
      tomb: [],
      sikeresBejelentkezes: false,
      felhasznalok: [],
      felhasznalokSzuroNelkul: [],
      felhasznalokSzama: 0,
      Image: this.$store.state.API_IMAGE_URL,
      modalTitle: "Új felhasználó hozzáadása",
      felhasznaloAdatFNevFilter: "",
    };
  },
  computed: mapMutations(["logout"]),
  data() {
    return {
      FelhasznaloNev: "",
      Jelszo: "",
      logged: this.$store.state.logged,
      aktiv: this.$store.state.aktiv,
    };
  },
  methods: {
    refreshData() {},
    closeClick() {
      this.$router.push("/");
    },
    logoutClick() {
      this.logout;
      this.logged = false;
      this.felhasznaloNev = "";
      this.closeClick();
    },
    loginClick(FelhasznaloNev, Jelszo) {
      axios
        .post(this.$store.state.API_URL + "Login/SaltRequest/" + FelhasznaloNev) // https://192.168.50.39:7148/Login/u1/p1?username=u1
        .then((response) => {
          let lekertSalt = response.data;
          let tmpHash = sha256(Jelszo + lekertSalt).toString();
          let url =
            this.$store.state.API_URL +
            "Login?nev=" +
            FelhasznaloNev +
            "&tmpHash=" +
            tmpHash;
          axios
            .post(url)
            .then((response) => {
              if (response.status == 200) {
                let d = response.data;
                var data = JSON.parse(d);
                if (data.Jogosultsag != "-1") {
                  this.logged = true;
                  this.$store.state.logged = true;
                  this.$store.state.Uid = data.Uid;
                  this.$store.state.teljesNev = data.TeljesNev;
                  this.$store.state.jogosultsag = data.Jogosultsag;
                  this.$store.state.Image = data.Image;
                  this.$store.state.felhasznaloNev = FelhasznaloNev;
                  alert(
                    "Sikeres bejelentkezés: " + this.$store.state.teljesNev
                  );
                  console.log(response.data);
                  document.getElementById("error").innerHTML = "";
                  //console.log(response.data)
                  //console.log(tomb)
                  this.refreshData();
                  this.closeClick();
                } else {
                  document.getElementById("error").innerHTML =
                    "<p style='color:red'>Hibás Jelszó!</p>";
                }
              } else {
                document.getElementById("error").innerHTML =
                  "<p style='color:red'>Inaktív felhasználó/Hibás felhasználónév!</p>";
              }
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          document.getElementById("error").innerHTML =
            "<p style='color:red'>Hibás/nincs ilyen, felhasználónév!</p>";

          if (error.response.status == 400) {
            alert(error.response.data);
          } else {
            document.getElementById("error").innerHTML =
              "<p style='color:red'>Inaktív felhasználó/Hibás felhasználónév!</p>";
          }
        });
    },
  },
  mounted: function () {
    this.refreshData();
  },
};
</script>
<style>
body {
  padding: 0px;
  margin: 0px;
}
.centered {
  text-align: center;
}

.profilkep {
  border: 4px solid #d439dc;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #22daff;
  border-left-color: #22daff;
  width: 100px;
  height: 100px;
}
.statebe h2 {
  font-size: 30px;
  padding-top: 1rem;
}
.statebe p {
  font-size: 10px;
}
.navszin {
  background: rgb(56, 56, 56);
  background: linear-gradient(
    90deg,
    rgba(56, 56, 56, 1) 0%,
    rgba(212, 57, 220, 1) 47%,
    rgba(0, 212, 255, 1) 100%
  );
}
.nav-link {
  color: white;
}
.nav-link:hover {
  background: linear-gradient(45deg, #22daff, #d439dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -o-transition: all 3s ease-out;
}

.zarcsiktorles {
  padding: 0;
  margin: 0;
}
</style>

