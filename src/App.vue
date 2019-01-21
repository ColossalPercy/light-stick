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
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-bottom-nav :active.sync="activeView" fixed mandatory :value="true" color="blue">
        <v-btn flat value="gradient">
          <span>Gradient</span>
          <v-icon>gradient</v-icon>
        </v-btn>
        <v-btn flat value="presets">
          <span>Presets</span>
          <v-icon>save</v-icon>
        </v-btn>
        <v-btn flat value="image">
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
      activeView: 'presets',
      tabOrder: ['gradient', 'presets', 'image']
    }
  },
  computed: {
    ledState () {
      return this.$store.state.ledState
    }
  }
}
</script>
