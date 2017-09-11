(function() {
  const red = document.getElementById('red')
  const green = document.getElementById('green')
  const blue = document.getElementById('blue')

  red.addEventListener('change', function() {
    if(red.checked) fetch('/red/1')
    else fetch('/red/0')
  })
  green.addEventListener('change', function() {
    if(green.checked) fetch('/green/1')
    else fetch('/green/0')
  })
  blue.addEventListener('change', function() {
    if(blue.checked) fetch('/blue/1')
    else fetch('/blue/0')
  })

})
