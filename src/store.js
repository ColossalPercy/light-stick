import Vue from 'vue'
import Vuex from 'vuex'
import logger from './utils/logger'

Vue.use(Vuex)

let host =
  process.env.NODE_ENV === 'development' ? '192.168.0.19' : location.hostname
// const ws = new WebSocket('ws://' + host + ':81')
const ws = {}
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
    case 'status':
      store.commit('setState', msg.data)
      break
    case 'msg':
      logger.server(msg.data)
      break
  }
}

const store = new Vuex.Store({
  state: {
    ledState: false,
    ws,
    wsConnected: false,
    wsOpenDialog: true,
    wsCloseDialog: false,
    host
  },
  mutations: {
    setState: (state, s) => {
      state.ledState = s === '1'
    },
    toggle: state => {
      if (state.wsConnected) {
        state.ledState = !state.ledState
        ws.send(state.ledState ? 1 : 0)
      }
    },
    wsOpen: state => {
      state.wsConnected = true
      state.wsOpenDialog = false
    },
    wsClose: state => {
      state.wsConnected = false
      state.wsCloseDialog = true
    }
  }
})

export default store
