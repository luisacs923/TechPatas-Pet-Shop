const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha') 

function login(){
if (emailInput.value == 'admin@email.com' && senhaInput.value == 'senha'){
    alert('Login efetuado com sucesso')
    window.location.href = 'agendamento.html'
    
}else{
    alert('Email ou Senha Incorretos')
    }

}