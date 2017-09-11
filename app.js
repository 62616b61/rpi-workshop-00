const gpio = require('rpi-gpio')

const RED_GPIO_PIN = 11
const GREEN_GPIO_PIN = 13
const BLUE_GPIO_PIN = 15

gpio.setup(RED_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_HIGH)

gpio.write(RED_GPIO_PIN, false, (err) => {
  if (err) throw err
})
gpio.write(GREEN_GPIO_PIN, false, (err) => {
  if (err) throw err
})
gpio.write(BLUE_GPIO_PIN, false, (err) => {
  if (err) throw err
})
