import Vue from 'vue'
import Vuex from 'vuex'
import logger from './utils/logger'
import Color from 'color'
import Gradient from '../../gradient/src/gradient'

Vue.use(Vuex)

let host = process.env.NODE_ENV === 'development' ? '192.168.0.19' : location.hostname
const ws = new WebSocket('ws://' + host + ':81')
ws.onopen = () => {
  logger.client(`Connected to ws://${host}:81`)
  store.commit('wsOpen')
}

ws.onclose = () => {
  logger.client(`Disconnected from ws://${host}:81`)
  store.commit('wsClose')
}

ws.onmessage = e => {
  let msg = JSON.parse(e.data)
  switch (msg.type) {
    case 'state':
      store.commit('setState', msg.data)
      logger.server(`LED = ${msg.data === '1' ? 'ON' : 'OFF'}`)
      break
    case 'msg':
      logger.server(msg.data)
      break
    case 'count':
      store.commit('setCount', msg.data)
      logger.server(`Light contains ${msg.data} LEDs`)
      break
  }
}

export const store = new Vuex.Store({
  state: {
    ledState: false,
    ledCount: 0,
    wsConnected: false,
    wsOpenDialog: true,
    wsCloseDialog: false,
    host
  },
  mutations: {
    setState: (state, s) => {
      state.ledState = s === '1'
    },
    setCount: (state, c) => {
      state.ledCount = c
    },
    wsOpen: state => {
      state.wsConnected = true
      state.wsOpenDialog = false
    },
    wsClose: state => {
      state.wsConnected = false
      state.wsCloseDialog = true
    }
  },
  actions: {
    send (context, type, msg) {
      let data = {
        type,
        led: msg
      }

      logger.client('Sending colour data to server!')
      ws.send(JSON.stringify(data))
    },
    toggle: context => {
      if (context.state.wsConnected) {
        context.state.ledState = !context.state.ledState
        context.dispatch('send', 'state', context.state.ledState ? 1 : 0)
      }
    },
    sendColor (context, color) {
      color = Color.hsl(color).rgb().round().color
      let led = new Array(context.state.ledCount).fill(color)
      context.dispatch('send', 'static', led)
    },
    sendGradient (context, grad) {
      let led = new Gradient({ colors: grad, steps: context.state.ledCount }).toArray()
      led = led.map(x => x.rgb().round()).map(y => y.color)
      context.dispatch('send', 'static', led)
    }
  }
})
