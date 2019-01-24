<template>
  <v-toolbar fixed app>
    <v-toolbar-title>Light Stick</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon large flat>
        <v-icon
          :color="ledState ? 'green' : 'red'"
          @click="$store.commit('toggle')"
        >
          power_settings_new
        </v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopToolbar',
  computed: {
    ledState () {
      return this.$store.state.ledState
    }
  }
}
</script>

<style>
</style>
