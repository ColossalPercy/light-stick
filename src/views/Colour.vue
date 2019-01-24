<template>
  <div>
    <v-layout>
      <p class="display-1">Colour</p>
    </v-layout>
    <v-layout column>
      <v-flex>
        <p class="title mb-0">Hue</p>
      </v-flex>
      <v-flex>
        <v-slider
          class="custom-slider hue-slider px-1"
          max="360"
          v-model="hue"
          always-dirty
          color="blue"
          @change="colorChange"
        ></v-slider>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex>
        <p class="title mb-0">Lightness</p>
      </v-flex>
      <v-flex>
        <v-slider
          class="custom-slider lightness-slider px-1"
          v-model="lightness"
          always-dirty
          color="blue"
          @change="colorChange"
        ></v-slider>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs4 offset-xs4>
        <v-card height="100px" class="pa-2">
          <v-flex fill-height :style="{ backgroundColor: color}"></v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import send from '../utils/send'

export default {
  data () {
    return {
      hue: 0,
      lightness: 50
    }
  },
  computed: {
    color () {
      return `hsl(${this.hue},100%,${this.lightness}%)`
    }
  },
  methods: {
    colorChange () {
      send.color({
        h: this.hue,
        s: 100,
        l: this.lightness
      })
    }
  }
}
</script>

<style>
.custom-slider .v-slider__track-fill {
  height: 6px;
}
.custom-slider .v-slider__track {
  height: 6px;
}
.custom-slider .v-slider__track__container {
  height: 6px;
}
.custom-slider .v-slider__thumb {
  width: 36px;
  height: 36px;
}
.hue-slider .v-slider__track-fill {
  background: transparent !important;
}
.hue-slider .v-slider__track {
  background: linear-gradient(
    to right,
    #ff0000 0%,
    #ffff00 17%,
    #00ff00 33%,
    #00ffff 50%,
    #0000ff 67%,
    #ff00ff 83%,
    #ff0000 100%
  ) !important;
}
</style>
