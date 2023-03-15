var divLogin = document.querySelector('div.container-login')

var divSignUp = document.createElement('div')
divSignUp.setAttribute('class', 'container-login')

var header = document.createElement('header')
var h1 = document.createElement('h1')
h1.innerText = 'create account'
var form = document.createElement('form')

var divFormData = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
]
for (i in divFormData) {divFormData[i].setAttribute('class', 'form-data')}

var lblName = document.createElement('label')
lblName.setAttribute('for', 'nameSignUp')
lblName.innerText = 'Username'
var inpName = document.createElement('input')
inpName.setAttribute('type', 'text')
inpName.setAttribute('id', 'nameSignUp')
inpName.setAttribute('required', '')
inpName.setAttribute('autofocus', '')
inpName.setAttribute('placeholder', "It doesn't have to be your real name.")

var lblEmail = document.createElement('label')
lblEmail.setAttribute('for', 'emailSignUp')
lblEmail.innerText = 'E-mail'
var inpEmail = document.createElement('input')
inpEmail.setAttribute('type', 'email')
inpEmail.setAttribute('id', 'emailSignUp')
inpEmail.setAttribute('required', '')
inpEmail.setAttribute('placeholder', 'example@email.com')

var divDataFlex = document.createElement('div')
divDataFlex.setAttribute('class', 'data-flex')

var lblPass1 = document.createElement('label')
lblPass1.setAttribute('for', 'passSignUp1')
lblPass1.innerText = 'Password'
var inpPass1 = document.createElement('input')
inpPass1.setAttribute('type', 'password')
inpPass1.setAttribute('id', 'passSignUp1')
inpPass1.setAttribute('required', '')
inpPass1.setAttribute('placeholder', 'Min.: 8 characters')
inpPass1.setAttribute('autocomplete', 'off')

var lblPass2 = document.createElement('label')
lblPass2.setAttribute('for', 'passSignUp2')
lblPass2.innerText = 'Repeat Password'
var inpPass2 = document.createElement('input')
inpPass2.setAttribute('type', 'password')
inpPass2.setAttribute('id', 'passSignUp2')
inpPass2.setAttribute('required', '')
inpPass2.setAttribute('autocomplete', 'off')

var divFormLinks = document.createElement('div')
divFormLinks.setAttribute('class', 'form-links')

var btn = document.createElement('button')
btn.setAttribute('type', 'submit')
btn.innerText = 'create'

var p = document.createElement('p')
p.setAttribute('id', 'switch-login')
p.innerText = 'sign in'

// APPENDING CHILDS

divSignUp.appendChild(header)
divSignUp.appendChild(form)

header.appendChild(h1)

for (var i = 0; i < 2; i++) {form.appendChild(divFormData[i])}

divFormData[0].appendChild(lblName)
divFormData[0].appendChild(inpName)

divFormData[1].appendChild(lblEmail)
divFormData[1].appendChild(inpEmail)

form.appendChild(divDataFlex)

for (var i = 2; i < 4; i++) {divDataFlex.appendChild(divFormData[i])}

divFormData[2].appendChild(lblPass1)
divFormData[2].appendChild(inpPass1)

divFormData[3].appendChild(lblPass2)
divFormData[3].appendChild(inpPass2)

form.appendChild(divFormLinks)

divFormLinks.appendChild(btn)
divFormLinks.appendChild(p)

var bd = document.body
var signUp = document.querySelector('#switch-signup')
var login = document.querySelector('#switch-login')

signUp.addEventListener('click', () => {
    bd.removeChild(divLogin)
    bd.appendChild(divSignUp)
})

login.addEventListener('click', () => {
    bd.removeChild(divSignUp)
    bd.appendChild(divLogin)
})



// document.body.appendChild(divSignUp)