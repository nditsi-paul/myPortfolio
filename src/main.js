import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

/* Import font awesome core and icon components */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Import specific icons */
import { 
  faEnvelope,
  faBars,
  faXmark,
  faDownload,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { 
  faFacebook,
  faGithub, 
  faInstagram, 
  faLinkedin, 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


/* Add icons to the library */
library.add(faEnvelope, faBars, faXmark, faFacebook, faInstagram, faLinkedin, faGithub, faWhatsapp, faDownload, faLocationDot, faPhone);

const app = createApp(App);

/* Register the component globally */
app.component('fa-icon', FontAwesomeIcon);


// How to use the icons in the components

 //<template>
 // <fa-icon icon="fa-solid fa-house" />
 // <fa-icon :icon="['fas', 'user']" />
 // </template> 

app.use(router);
app.mount('#app');