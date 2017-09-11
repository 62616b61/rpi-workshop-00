var gpio = require('rpi-gpio')

var RED_GPIO_PIN = 11
var GREEN_GPIO_PIN = 13
var BLUE_GPIO_PIN = 15

gpio.setup(RED_GPIO_PIN, gpio.DIR_HIGH, pinSet(RED_GPIO_PIN));
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_HIGH, pinSet(GREEN_GPIO_PIN));
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_HIGH, pinSet(BLUE_GPIO_PIN));


function pinSet(pinID) {
    console.log('Setup to pin' + pinID);
}
