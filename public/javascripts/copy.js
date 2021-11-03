const copyButton = document.querySelector('#copy-button')
const outputURL = document.querySelector('#output-url')
let mode = 'off'


////// Event Listener Section Starts Here //////
copyButton.addEventListener('click', function onCopyButtonClicked(event) {
  event.preventDefault()

  // if module is off, then toggle from 'Copy' to 'Copied'
  if (mode === 'off') {
    mode = 'on'
    copyButton.innerHTML = 'Copied!'
    copyButton.classList.toggle('btn-primary')
    copyButton.classList.toggle('btn-success')
    navigator.clipboard.writeText(outputURL.value)

    // delay 1.5 sec, then return back to 'Copy'
    setTimeout(() => {
      copyButton.innerHTML = 'Copy'
      copyButton.classList.toggle('btn-primary')
      copyButton.classList.toggle('btn-success')
      mode = 'off'
    }, 1500)
  } else return // if mode is already on, do nothing
})
////// Event Listener Section Ends Here //////