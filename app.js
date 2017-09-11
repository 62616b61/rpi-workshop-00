var gpio = require('rpi-gpio')

var RED_GPIO_PIN = 11
var GREEN_GPIO_PIN = 13
var BLUE_GPIO_PIN = 15

gpio.setup(RED_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_HIGH)
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_HIGH)
