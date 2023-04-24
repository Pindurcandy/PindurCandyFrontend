import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from "vuejs-paginate-next";
createApp(App).use(store).use(router).use(Paginate).mount('#app');
