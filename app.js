const express = require('express')
const gpio = require('rpi-gpio')

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

gpio.setup(RED_GPIO_PIN, gpio.DIR_LOW)
gpio.setup(GREEN_GPIO_PIN, gpio.DIR_LOW)
gpio.setup(BLUE_GPIO_PIN, gpio.DIR_LOW)

const app = express()

// Route for RED LED
app.get('/red/:value', (req, res) => {
  const value = req.params.value

  if (value === "1") gpio.write(RED_GPIO_PIN, true)
  else gpio.write(RED_GPIO_PIN, false)

  res.sendStatus(200)
})

// Route for GREEN LED
app.get('/green/:value', (req, res) => {
  const value = req.params.value

  if (value === "1") gpio.write(GREEN_GPIO_PIN, true)
  else gpio.write(GREEN_GPIO_PIN, false)

  res.sendStatus(200)
})

// Route for BLUE LED
app.get('/blue/:value', (req, res) => {
  const value = req.params.value

  if (value === "1") gpio.write(BLUE_GPIO_PIN, true)
  else gpio.write(BLUE_GPIO_PIN, false)

  res.sendStatus(200)
})

// Listen on port 3000
const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Listening at http://%s:%s', host, port)
})
