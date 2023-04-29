const mobMenu = document.getElementById('mob-menu')
const closeBtn = document.getElementById('closebtn')
const displayOk = document.getElementById('display-ok')
const openBtn = document.getElementById('openbtn')

closeBtn.addEventListener('click', () => {
    mobMenu.style.display = 'none'
    mobMenu.style.opacity = '100'
    displayOk.style.display= 'none'
})

openBtn.addEventListener('click', () => {
    mobMenu.style.display = 'block'
    displayOk.style.display= 'block'
})