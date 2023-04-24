<template>
  
  <div class="hatter">
    <div v-if="isLoading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div v-else class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
          v-for="item in paginatedItems"
          :key="item.id"
        >
          <div
            class="card text-light"
            :class="{ 'opacity-80': item.aktiv == 0 }"
          >
            <div>
              <img
                :src="'data:image/png;base64,' + item.kep"
                class="card-img-top kepkeret"
                alt="Item Image"
                style="object-fit: cover"
              />
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ item.termekNev }}</h5>
              <p
                class="card-text text-truncate"
                style="max-height: 2.4rem; overflow: hidden"
                :title="item.leiras"
              >
                {{ item.leiras }}
              </p>
              <p class="card-text">{{ item.ar }} Ft</p>
              <a
                class="button-active"
                :href="item.link"
                v-if="item.aktiv == 1"
                target="_blank"
                role="button"
                >Megtekintés</a
              >

              <p
                class="button-inactive"
                :href="item.link"
                v-else
                target="_blank"
              >
                Nincs Készleten
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <nav aria-label="" class="modal-5">
          <ul class="pagination modal-5">
            <li
              class="page-item"
              @click="currentPage--"
              :disabled="currentPage === 1"
            >
              <a class="prev fa fa-arrow-left" href="#"></a>
            </li>
            <li
              v-for="pageNumber in pageCount"
              :key="pageNumber"
              :class="{ active: currentPage === pageNumber }"
            >
              <a class="" href="#" @click="currentPage = pageNumber">{{
                pageNumber
              }}</a>
            </li>
            <li @click="currentPage++" :disabled="currentPage === pageCount">
              <a class="next fa fa-arrow-right" href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "TemekekView",
  components: {},
  data() {
    return {
      isLoading: true,
      currentPage: 1,
      pageSize: 9,
      items: [
        {
          kep: "",
          leiras: "",
          ar: 0,
          darab: 0,
          termekNev: "",
          aktiv: 0,
          link: "",
        },
      ],
    };
  },
  methods: {
    refreshData() {
      // You can use this method to refresh the data
      // whenever you need to update the items array.
      // For example, you can call this method after
      // adding, editing or deleting items.
    },
    adatlekeres() {
      axios
        .get("https://192.168.50.39:5001/Termekek/basic")
        .then((response) => {
          if (response.status == 200) {
            let d = response.data;
            console.log(d);
            if (this.items.aktiv != "0") {
              this.items = d;
              this.refreshData();
            } else {
              alert("Error");
            }
          }
          this.isLoading = false; // Set isLoading to false after data is loaded
        });
    },
  },
  mounted: function () {
    this.adatlekeres();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.pageSize);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.items.slice(startIndex, startIndex + this.pageSize);
    },
  },
};
</script>

<style scoped>
body {
  background-color: #555;
  text-align: center;
  font-family: arial;
  display:flex;
  align-items: center;
  justify-content: center;
}
.hatter {
  background: url("../assets/bg.png") no-repeat center center;
  background-size: cover;
  text-align: center;
  font-family: arial;
  opacity: 1;
}
.card {
  margin-bottom: 20px;
  background-color: #4e5760;
}

.kepkeret {
  border: 4px solid #d439dc;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #22daff;
  border-left-color: #22daff;
  width: 300px;
  height: 300px;
}
.opacity-80 {
  opacity: 0.8;
}

.button-active {
  background-color: #d439dc;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-active:focus {
  outline: 0;
}

.button-active:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-active:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-active {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}

.button-inactive {
  background-color: #22daff;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-inactive:focus {
  outline: 0;
}

.button-inactive:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-inactive:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-inactive {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}
.pagination {
  margin: 0;
}

.pagination li {
  display: inline-block;
  margin-right: 5px;
}

.pagination li a {
  background-color: #555;
  border-color: #555;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 5px;
}

.pagination li a:hover {
  background-color: #777;
  border-color: #777;
  color: #fff;
  text-decoration: none;
}

.pagination li.disabled a {
  background-color: #999;
  border-color: #999;
  color: #fff;
  cursor: not-allowed;
}

.pagination li.active a {
  background-color: #00e5ff;
  border-color: #00e5ff;
  color: #fff;
  text-decoration: none;
}



</style>
<style lang="scss">

.searchLabel{
  width: 100%;
  max-width: 300px;
}
.searchInput{
  width: 100%;
  display: flex;
  padding: 15px;
  background-color: #22daff;
  border: 2px solid black;
  color: #111;
  font-size: 15px;
  box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
  height: 58px;    
  transform: skew(-3deg, 1deg);
  font-family: 'Knewave', cursive;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:focus,
  &:valid{
    outline: none;
    ~ ul li{
      @for $i from 1 through 6 {
        &:nth-child(#{$i}){
          &::before{
            filter: blur(20px);
            transform: translate(0, -35px) rotate(-210deg);
          }
          &::after{
            filter: blur(0);
            transform: scale(1) rotate(0);
          }
        }
      }
      @for $i from 1 through 6{
        &:nth-child(#{$i}){
          &::after{
            transition-delay: 200ms + ($i * 200ms);
          }
        }
      }
    }
  }
}
.searchLabel{
  position: relative;
}
.searchUl{
  position: absolute;
  top: 38px;
  left: -4px;
  margin: 0;
  list-style: none;
  padding-left: 22px;
  position: absolute;
  display: flex;
  pointer-events: none;
  transition: 200ms;
  li{
    letter-spacing: 3px;
    text-transform: uppercase;
    color: transparent;
    pointer-events: none;
    transition: 500ms ease-in-out;
    ::selection{
      color: transparent;
    }
    &::after,
    &::before{
      color: black;
      position: absolute;
      transition: 500ms ease-in-out;
    }
    &::before{
      top: -20px;
    }
    &::after{
      top: -63px;
      transform: scale(0) rotate(210deg);
      filter: blur(20px);
    }
    $chars: k,e,r,e,s,s;
    @each $char in $chars {
      $i: index($chars, $char);
      $x: index($chars, $char);
      $i: $i * 200;
      $y: $x * 12;
      &[#{$char}]::before{
        content: attr($char) quote($char);
        transition-delay: $i+ms;
      }
      &[#{$char}]::after{
        content: attr($char) quote($char);
        left: unquote($y+'px');
        color: #343a40;
      }
    }
  }
}
</style>