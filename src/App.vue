<template>
  <div id="app">
    <v-app dark>
      <v-toolbar fixed app>
        <v-toolbar-title>Light Stick</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon large flat>
            <v-icon
              :color="ledState ? 'green' : 'red'"
              @click="$store.commit('toggle')"
            >power_settings_new</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <v-container>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
      <v-bottom-nav fixed mandatory :active.sync="activeTab" :value="true" color="blue">
        <v-btn to="colour" flat value="colour">
          <span>Colour</span>
          <v-icon>color_lens</v-icon>
        </v-btn>
        <v-btn to="gradient" flat value="gradient">
          <span>Gradient</span>
          <v-icon>gradient</v-icon>
        </v-btn>
        <v-btn to="text" flat value="text">
          <span>Text</span>
          <v-icon>text_fields</v-icon>
        </v-btn>
        <v-btn to="image" flat value="image">
          <span>Image</span>
          <v-icon>photo</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: location.pathname.substring(1)
    }
  },
  computed: {
    ledState () {
      return this.$store.state.ledState
    }
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
