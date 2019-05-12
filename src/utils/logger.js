let logger = {
  client: (msg) => {
    console.log(
      `%cClient: %c${msg}`,
      'color: blue; font-weight: bold',
      'color: black; font-weight: normal'
    )
  },
  server: (msg) => {
    console.log(
      `%cServer: %c${msg}`,
      'color: red; font-weight: bold',
      'color: black; font-weight: normal'
    )
  }
}

export default logger
