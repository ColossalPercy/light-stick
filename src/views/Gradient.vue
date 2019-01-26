<template>
  <div>
    <v-layout>
      <v-flex>
        <p class="display-1">Gradient</p>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-switch label="Reversed" v-model="reversed" class="mt-1"></v-switch>
      </v-flex>
    </v-layout>

    <v-layout column>
      <v-item-group>
        <v-flex v-for="(gradient, i) in gradients" :key="i" xs12 mb-4>
          <v-item @change="gradChange(gradient.data)">
            <v-card
              class="pa-2"
              slot-scope="{ active, toggle }"
              :color="active ? 'blue' : ''"
              @click="toggle"
            >
              <p class="title mb-1">{{ gradient.name }}</p>
              <div :style="{height: '30px', background: gradCalc(gradient.data)}"></div>
            </v-card>
          </v-item>
        </v-flex>
      </v-item-group>
    </v-layout>
  </div>
</template>

<script>
import gradients from '../data/gradients.json'
import sender from '../utils/sender'

export default {
  data () {
    return {
      gradients,
      reversed: false
    }
  },
  methods: {
    gradCalc (g) {
      let css = 'linear-gradient(to '
      css += this.reversed ? 'left' : 'right'
      if (typeof g[0] === 'string') {
        let delta = 100 / (g.length - 1)
        for (let i in g) {
          css += `, ${g[i]} ${i * delta}%`
        }
        css += ')'
      } else if (typeof g[0] === 'object') {
        for (let stop of g) {
          css += `, ${stop.color} ${stop.pos}%`
        }
        css += ')'
      }
      return css
    },
    gradChange (g) {
      sender.gradient(g)
    }
  }
}
</script>
