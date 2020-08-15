
const white_keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']
const black_keys = ['w', 'e', 't', 'y', 'u']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  const key = e.key
  const whiteKeyIndex = white_keys.indexOf(key)
  const blackKeyIndex = black_keys.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () =>{
    key.classList.remove('active')
  })
}
