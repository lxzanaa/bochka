const ul = document.getElementById('breadcrumb')
let isDown = false
let startX
let scrollLeft

ul.addEventListener('mousedown', e => {
  isDown = true
  ul.style.cursor = 'grabbing'
  startX = e.pageX - ul.offsetLeft
  scrollLeft = ul.scrollLeft
})

ul.addEventListener('mouseleave', () => {
  isDown = false
  ul.style.cursor = 'grab'
})
ul.addEventListener('mouseup', () => {
  isDown = false
  ul.style.cursor = 'grab'
})

ul.addEventListener('mousemove', e => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - ul.offsetLeft
  const walk = (x - startX) * 2
  ul.scrollLeft = scrollLeft - walk
})

// Mobil uchun
ul.addEventListener('touchstart', e => {
  isDown = true
  startX = e.touches[0].pageX - ul.offsetLeft
  scrollLeft = ul.scrollLeft
})
ul.addEventListener('touchend', () => (isDown = false))
ul.addEventListener('touchmove', e => {
  if (!isDown) return
  const x = e.touches[0].pageX - ul.offsetLeft
  const walk = (x - startX) * 2
  ul.scrollLeft = scrollLeft - walk
})
