import { createApp } from "vue";
import { createPinia } from "pinia";
import "reset-css/reset.css";
import "../assets/css/style.css";
import SidePanel from "../views/side_panel/SidePanel.vue";

const app = createApp(SidePanel);
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
