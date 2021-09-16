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
  `
  <h1>Tabela de Salário (R$)</h1>
  <table>
    <tr>
        <th>Nome</th>
        <th>Inicial</th>
        <th>Final</th>
    </tr>
    <tr>
        <td>Maria Luiza </td>
        <td>2000,00</td>
        <td>3500,00</td>
    </tr>
    <tr>
        <td>${nome}</td>
        <td>${salario}</td>
        <td>${salarioFinal}</td>
    </tr>
  </table>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1000);
});

