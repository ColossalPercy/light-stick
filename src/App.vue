<template>
  <div id="app">
    <v-app dark>
      <top-toolbar/>

      <v-content>
        <v-container>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>

      <bottom-nav/>
    </v-app>
  </div>
</template>

<script>
import TopToolbar from './components/TopToolbar.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  components: {
    TopToolbar,
    BottomNav
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
