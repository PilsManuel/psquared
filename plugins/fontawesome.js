import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faLightbulb,
  faPuzzlePiece,
  faTools,
  faCode,
  faLaptopCode,
  faGlobe,
  faDesktop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLightbulb,
  faPuzzlePiece,
  faTools,
  faCode,
  faLaptopCode,
  faGlobe,
  faDesktop,
  faMobileAlt
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
