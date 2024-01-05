// Alterando os valores dos inputs via JS:
//
// const nome = formDados.nome;
// const sexo = formDados.sexo;
// const dependentes = formDados.dependentes;
//
// nome.value = "João";
//
// dependentes[1].checked = true;
//
// sexo.value = 'feminino';



// Validação de formulários:
// const nome = formDados.nome;

// nome.onblur = function() {
//   if (nome.value.length < 3) {
//     nome.classList.add('invalid');
//     nomeErro.innerHTML = 'O nome precisa ter três caracteres.';
//   }
// };

// nome.onfocus = function() {
//   if (this.classList.contains('invalid')) {
//     this.classList.remove('invalid');
//     nomeErro.innerHTML = "";
//   }
// };



// Validando submit do fomulário:
const adicionarErro = (input, divMsg, msg) => {
    input.classList.add('invalid');
    divMsg.innerHTML = msg;
};

const removerErro = (input, divMsg) => {
    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
        divMsg.innerHTML = "";
    }
};

const validar = (event) => {
    let cancelarEnvio = false;
    if (nome.value.length < 3) {
      adicionarErro(nome, nomeErro, 'O nome precisa ter três caracteres.');
      cancelarEnvio = true;
    }
    if (!email.value.includes('@')) {
      adicionarErro(email, emailErro, 'E-mail inváldo!');    
      cancelarEnvio = true;
    }
    if (cancelarEnvio) {
      event.preventDefault();
    }
  };
  
nome.onfocus = () => removerErro(nome, nomeErro);
email.onfocus = () => removerErro(email, emailErro);

formDados.addEventListener('submit', validar);