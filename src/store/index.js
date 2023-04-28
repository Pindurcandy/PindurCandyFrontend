import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    Id: 0,
    FelhasznaloNevReg: "",
    JelszoReg: "",
    JelszoUjra: "",
    TeljesNev: "",
    Email: "",
    kezdoIskolaId: 15,
    jog: 0,
    aktiv: 1,
    termekaktiv: 1,
    image: "",
    Image: "",
    Salt: "",
    Hash: "",
    API_URL: "https://localhost:5001/",
    API_IMAGE_URL: "https://localhost:5001/Image/",
    API_URL_Mobil: "http://localhost:5001/",
    logged: false,
    Uid: "",
    teljesNev: "",
    jogosultsag: 0,
    felhasznaloNev: "",
    felhasznaloModositas: false,
    kep: "",
    leiras: "",
    ar: 0,
    darab: 0,
    termekNev: "",
    link: "",
    
  /*felhasznalo: {
      id: 0,
      felhasznaloNev: "",
      teljesNev: "",
      image: "",
      salt: "",
      hash: "",
      email: "",
      jogosultsag: 0,
      aktiv: 0,
    },*/
  },
  getters: {},
  mutations: {
    logout(state) {
      let url = state.API_URL + "Logout/" + state.Uid;
      axios
        .post(url)
        .then((response) => {
          if (response.status == 200) {
            state.logged = false;
            state.Uid = "";
            state.teljesNev = "";
            state.jogosultsag = 0;
            alert(response.data);
            document.getElementById("loginButton").innerHTML = "Login";
          } else {
            alert(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {},
  modules: {},
});
