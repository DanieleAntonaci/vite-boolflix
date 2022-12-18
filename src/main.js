import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


// struttura per html
/* <font-awesome-icon icon="fa-solid fa-user-secret" /> */

/* add icons to the library */
library.add(fasStar, farStar)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
