import store from '../store'
import logger from './logger'
import Color from 'color'

let ws = store.state.ws
const LED_COUNT = 60

let send = {
  send (msg) {
    if (store.state.wsConnected) {
      logger.client('Sending colour data to server!')
      ws.send(msg)
    } else {
      logger.client('Not connected to server! Colour data not sent!')
    }
  },
  color (col) {
    let msg = {
      type: 'color',
      led: []
    }

    col = Color.hsl(col)

    for (let i = 0; i < LED_COUNT; i++) {
      let rgb = col.rgb().color.map(x => Math.round(x))
      msg.led.push(rgb)
    }

    send.send(msg)
  },
  gradient (grad) {
    console.log(grad)
  }
}

export default send
