<template>
  <div id="app">
    <v-app dark>
      <v-toolbar fixed>
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
      <!-- <nav
        class="v-toolbar v-toolbar--fixed theme--dark"
        data-booted="true"
        style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);"
      >
        <div class="v-toolbar__content" style="height: 64px;">
          <div class="v-toolbar__title headline text-uppercase">
            <span>Light Stick</span>
          </div>
        </div>
      </nav>-->
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    ledState () {
      return this.$store.state.ledState
    }
  }
}
</script>
