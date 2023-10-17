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

function agendarServiço() {
  const teste = document.querySelector(".itemObrigatorio");
  if (teste.value == "") {
    alert("Preencha todos os campos obrigatórios.");
  } else {
    alert("Você receberá a confirmação do agendamento por e-mail!")
  }
}