import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let host =
  process.env.NODE_ENV === 'development' ? '192.168.0.19' : location.hostname
const ws = new WebSocket('ws://' + host + ':81')
ws.onopen = () => {
  console.log(
    `%cClient: %cConnected to ws://${host}:81`,
    'color: blue; font-weight: bold',
    'color: black; font-weight: normal'
  )
  store.commit('wsOpen')
}

ws.onclose = () => {
  console.log(
    `%cClient: %cDisconnected from ws://${host}:81!`,
    'color: blue; font-weight: bold',
    'color: black; font-weight: normal'
  )
  store.commit('wsClose')
}

ws.onmessage = e => {
  let msg = JSON.parse(e.data)
  switch (msg.type) {
    case 'status':
      store.commit('setState', msg.data)
      break
    case 'msg':
      console.log(
        `%cServer: %c${msg.data}`,
        'color: red; font-weight: bold',
        'color: black; font-weight: normal'
      )
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
