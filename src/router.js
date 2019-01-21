import VueRouter from 'vue-router'

import Gradient from './views/Gradient.vue'
import Image from './views/Image.vue'
import Presets from './views/Presets.vue'

export default new VueRouter({
  routes: [
    { path: '/gradient', component: Gradient },
    { path: '/image', component: Image },
    { path: '/presets', component: Presets },
    { path: '*', redirect: '/presets' }
  ],
  mode: 'history'
})
