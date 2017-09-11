(function() {
  const red = document.getElementById('red')
  const green = document.getElementById('green')
  const blue = document.getElementById('blue')

  red.addEventListener('click', function() {
    if(red.checked) fetch('/red/1')
    else fetch('/red/0')
  })
  green.addEventListener('click', function() {
    if(green.checked) fetch('/green/1')
    else fetch('/green/0')
  })
  blue.addEventListener('click', function() {
    if(blue.checked) fetch('/blue/1')
    else fetch('/blue/0')
  })

})
