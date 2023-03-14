var divLogin = document.querySelector('div.container-login')

var divSignUp = document.createElement('div')
divSignUp.setAttribute('class', 'container-login')

var header = document.createElement('header')
var h1 = document.createElement('h1')
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

var divDataFlex = document.createElement('div')
divDataFlex.setAttribute('class', 'data-flex')

var lblPass = document.createElement('label')
lblPass.setAttribute('for', 'passSignUp1')
lblPass.innerText = 'Password'

var lblConfPass = document.createElement('label')
lblConfPass.setAttribute('for', 'passSignUp2')
lblConfPass.innerText = 'Repeat Password'

var divFormLinks = document.createElement('div')
divFormLinks.setAttribute('class', 'form-links')

var btn = document.createElement('button')
btn.setAttribute('type', 'submit')
btn.innerText = 'create'

var p = document.createElement('p')
p.innerText = 'sign in'

