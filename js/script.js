/*se o campo de nome estiver preenchido e campo de email estiver preenchido
  envie os dados

se não 
  peça a usuária que preencha os campos nome e email*/
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome").value != "" && document.getElementById("email").value !=""){
  alert("Pronto, você receberá nossas novidades por e-mail!")
  } else {
    alert("Por favor, preencha os campos!")
  }
}
