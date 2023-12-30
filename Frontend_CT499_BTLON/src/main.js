import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'

import router from "./router";
// import 'bulma/css/bulma.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
createApp(App).use(router).mount("#app");