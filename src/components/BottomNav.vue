<template>
  <v-bottom-nav fixed mandatory :active.sync="activeTab" :value="true" color="blue">
        <v-btn to="/colour" flat value="colour">
          <span>Colour</span>
          <v-icon>color_lens</v-icon>
        </v-btn>
        <v-btn to="/gradient" flat value="gradient">
          <span>Gradient</span>
          <v-icon>gradient</v-icon>
        </v-btn>
        <v-btn to="/text" flat value="text">
          <span>Text</span>
          <v-icon>text_fields</v-icon>
        </v-btn>
        <v-btn to="/image" flat value="image">
          <span>Image</span>
          <v-icon>photo</v-icon>
        </v-btn>
      </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      activeTab: location.pathname.substring(1)
    }
  }
}
</script>

<style>
</style>
