import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "@/components/BaseButton.vue";

import "@/assets/reset.css";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.mount("#app");
