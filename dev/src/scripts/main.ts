import { createApp } from "vue";
import router from '../router/index'
import "../assets/css/style.css";
import App from "../views/App.vue";

const app = createApp(App)
app.use(router)

app.mount("#app");
