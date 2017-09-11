(function() {
  console.log('script.js init')

  const red = document.getElementById('red')
  const green = document.getElementById('green')
  const blue = document.getElementById('blue')

  red.addEventListener('change', function() {
    console.log('red changed')
    if(red.checked) fetch('/red/1')
    else fetch('/red/0')
  })
  green.addEventListener('change', function() {
    console.log('green changed')
    if(green.checked) fetch('/green/1')
    else fetch('/green/0')
  })
  blue.addEventListener('change', function() {
    console.log('blue changed')
    if(blue.checked) fetch('/blue/1')
    else fetch('/blue/0')
  })

})
