const gpio = require('rpi-gpio')

gpio.setMode(gpio.MODE_BCM)

/*  Oh, no!!!
 *  Look! Someone erased the pin numbers!
 *
 *  Without pin numbers the Raspberry Pi won't know how to control the LED!
 *
 *  Fortunately, you can fix this!
 *  Find out the numbers of the pins that wires are connected to
 *  and fill in the blanks down below!
 */

const RED_GPIO_PIN =
const GREEN_GPIO_PIN =
const BLUE_GPIO_PIN =

gpio.setup(RED_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_HIGH)

setTimeout(() => {
  gpio.write(RED_GPIO_PIN, false)
  gpio.write(GREEN_GPIO_PIN, false)
  gpio.write(BLUE_GPIO_PIN, false)
}, 1000)
