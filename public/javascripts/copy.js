const copyButton = document.querySelector('#copy-button')
const outputURL = document.querySelector('#output-url')
let mode = 'off'

copyButton.addEventListener('click', function onCopyButtonClicked(event) {
  event.preventDefault()

  if (mode === 'off') {
    mode = 'on'
    copyButton.innerHTML = 'Copied!'
    copyButton.classList.toggle('btn-primary')
    copyButton.classList.toggle('btn-success')
    navigator.clipboard.writeText(outputURL.value)
    setTimeout(() => {
      copyButton.innerHTML = 'Copy'
      copyButton.classList.toggle('btn-primary')
      copyButton.classList.toggle('btn-success')
      mode = 'off'
    }, 1500)
  } else return
})