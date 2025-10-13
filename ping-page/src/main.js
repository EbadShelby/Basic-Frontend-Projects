import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faXTwitter, faInstagram);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
