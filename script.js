const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let salario = document.getElementById("salario").value;
  let vendas = document.getElementById("vendas").value;

  let salarioNumber = parseFloat(salario)
  let vendasNumber = parseFloat(vendas)
  
  let comissao = (salarioNumber*0.15);
  let salarioFinal = (comissao + vendasNumber)
  let funcionario = {
    nome,
    salario,
    vendas,
    salarioFinal
  };

  let convertFuncionario = JSON.stringify(funcionario);

  localStorage.setItem("lead", convertFuncionario);

  let content = document.getElementById("form-container");

  let carregando = `<p>Adicionando informações</p>`;

  let pronto = 
  `<table>
    <tr>
        <th>Nome</th>
        <th>Salário Inicial</th>
        <th>Salário Final</th>
    </tr>
    <tr>
        <td>Maria Luiza </td>
        <td>R$ 2000,00</td>
        <td>R$ 3500,00</td>
    </tr>
    <tr>
        <td>${nome}</td>
        <td>R$ ${salario},00</td>
        <td>R$ ${salarioFinal},00</td>
    </tr>
  </table>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);
});

