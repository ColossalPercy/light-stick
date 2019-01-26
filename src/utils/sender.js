import store from '../store'
import logger from './logger'
import Color from 'color'
// import Gradient from 'gradient'

let ws = store.state.ws
const LED_COUNT = 60

let sender = {
  send (type, msg) {
    if (store.state.wsConnected) {
      let data = {
        type,
        led: msg
      }

      logger.client('Sending colour data to server!')
      ws.send(data)
    } else {
      logger.client('Not connected to server! Colour data not sent!')
    }
    console.log(type, msg)
  },
  color (col) {
    let led = []

    col = Color.hsl(col)

    for (let i = 0; i < LED_COUNT; i++) {
      let rgb = col.rgb().color.map(x => Math.round(x))
      led.push(rgb)
    }

    sender.send('static', led)
  },
  gradient (grad) {
    console.log(grad)
    // if (typeof grad[0] === 'string') {
    //   // let points = grad.length - 1
    //   // let delta = 100 / points

    //   let led = Gradient(grad, LED_COUNT)
    //   console.log(led)
    // } else if (typeof grad[0] === 'object') {

    // }
  }
}

export default sender
