const express = require('express')
const gpio = require('rpi-gpio')

const RED_GPIO_PIN = 11
const GREEN_GPIO_PIN = 13
const BLUE_GPIO_PIN = 15

gpio.setup(RED_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_HIGH)

const app = express()

app.get('/red/:value', (req, res) => {
  const value = req.params.value

  if (value === "1") {
    gpio.write(RED_GPIO_PIN, false)
    res.send('ok')
  }
  else {
    gpio.write(RED_GPIO_PIN, true)
    res.send('ok')
  }
})

// Listen on port 3000
const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Listening at http://%s:%s', host, port)
})
