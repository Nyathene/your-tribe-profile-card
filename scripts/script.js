const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.querySelector('audio').play()
}
