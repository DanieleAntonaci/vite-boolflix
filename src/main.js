import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar, faUserSecret } from '@fortawesome/free-solid-svg-icons'

// struttura per html
/* <font-awesome-icon icon="fa-solid fa-user-secret" /> */

/* add icons to the library */
library.add(faUserSecret, faStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
