var bd = document.body
var divLogin = document.querySelector('#cont-login')
var divSignUp = document.querySelector('#cont-signup')

bd.removeChild(divSignUp)

document.querySelector('#switch-login').addEventListener('click', () => {
    bd.removeChild(divLogin)
    bd.appendChild(divSignUp)

    document.querySelector('#switch-signup').addEventListener('click', () => {
        bd.removeChild(divSignUp)
        bd.appendChild(divLogin)
    })
})