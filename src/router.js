import VueRouter from 'vue-router'

import Colour from './views/Colour.vue'
import Gradient from './views/Gradient.vue'
import Image from './views/Image.vue'
import Text from './views/Text.vue'

export default new VueRouter({
  routes: [
    { path: '/colour', component: Colour },
    { path: '/gradient', component: Gradient },
    { path: '/image', component: Image },
    { path: '/text', component: Text },
    { path: '*', redirect: '/colour' }
  ],
  mode: 'history'
})
