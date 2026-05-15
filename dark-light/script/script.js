// ======================================================================
// BOTÃO MODO CLARO / ESCURO - 30/04/26
// ======================================================================

const botao = document.getElementById("modoClaroEscuro");
console.log(botao);
let claro = true;

// função anônima no evento
botao.addEventListener("click", function () {
  document.body.style.transition = "background-color 2s ease, color 2s ease";

  if (claro) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    botao.textContent = "Modo Claro";
    claro = false;
  } else {
    document.body.style.backgroundColor = "white";

    document.body.style.color = "purple";

    botao.textContent = "Modo Escuro";

    claro = true;
  }
});

// ======================================================================
// CÁLCULO DATA FORMATURA - 04/05/26
// ======================================================================

// ======================================================================
// DADOS PESSOAIS
// ======================================================================

const NOME = "Maria Vitória";

let tituloProfissional = "Sweet";

let minhaBio = "Estudante de ADS na Proz de Divinópolis - MG";

let anoFormatura = 2028;

let mesFormatura = 12;

let diaFormatura = 30;

let anoIngresso = 2025;

let mesIngresso = 1;

let diaIngresso = 1;

// ======================================================================
// DATE
// ======================================================================

let dataAtual = new Date();

let mesAtual = dataAtual.getMonth() + 1;

let anoAtual = dataAtual.getFullYear();

let diaAtual = dataAtual.getDate();

// ======================================================================
// VARIÁVEIS
// ======================================================================

let indefinido;

let nulo = null;

// objeto
let curso = {
  nome: "Análise e desenvolvimento de sistemas",

  semestre: 3,

  disciplinaAtual: "Linguagem de programação",
};

// ======================================================================
// TYPEOF
// ======================================================================

function mostrarTipos() {
  console.log(typeof anoFormatura);

  console.log(typeof NOME);

  console.log(typeof tituloProfissional);

  console.log(typeof minhaBio);

  console.log(typeof anoIngresso);

  console.log(typeof indefinido);

  console.log(typeof nulo);

  console.log(typeof curso);
}

mostrarTipos();

// ======================================================================
// CALCULAR TEMPO RESTANTE
// ======================================================================

// calcular o tempo restante para a formatura e imprimir no html o ano, mes e dia restante:

function calcularTempoRestante() {
  let anosRestantes = anoFormatura - anoAtual;

  let mesesRestantes = mesFormatura - mesAtual;

  let diasRestantes = diaFormatura - diaAtual;

  // ajustar dias negativos
  if (diasRestantes < 0) {
    diasRestantes += 30;

    mesesRestantes--;
  }

  // ajustar meses negativos
  if (mesesRestantes < 0) {
    mesesRestantes += 12;

    anosRestantes--;
  }

  // verificar se já formou
  if (
    anosRestantes < 0 ||
    (anosRestantes === 0 && mesesRestantes === 0 && diasRestantes <= 0)
  ) {
    document.getElementById("tempoRestanteParaFormatura").innerText =
      "Curso Concluído!";
  } else {
    document.getElementById("tempoRestanteParaFormatura").innerText =
      `Tempo restante para formatura:
        ${anosRestantes} ano(s),
        ${mesesRestantes} mês(es)
        e ${diasRestantes} dia(s).`;
  }
}

calcularTempoRestante();

// ======================================================================
// MOSTRAR DADOS NO HTML
// ======================================================================

// função flecha
const mostrarDados = () => {
  document.getElementById("meuNome").innerText = NOME;

  document.getElementById("tituloProfissional").innerText = tituloProfissional;

  document.getElementById("minhaBio").innerText = minhaBio;

  document.getElementById("anoFormatura").innerText = `Formatura prevista para:
    ${diaFormatura}/${mesFormatura}/${anoFormatura}`;

  document.getElementById("anoIngresso").innerText =
    `Ano de ingresso: ${anoIngresso}`;

  document.getElementById("curso").innerText = `Curso: ${curso.nome}
    - Semestre: ${curso.semestre}`;
};

mostrarDados();

// ======================================================================
// OPERADOR TERNÁRIO
// ======================================================================

function verificarNota() {
  let nota = 8;

  let aprovado = nota >= 6 ? "Aprovado" : "Reprovado";

  console.log(`Nota: ${nota} = ${aprovado}`);
}

verificarNota();

// ======================================================================
// SWITCH CASE
// ======================================================================

function mostrarDiaSemana() {
  let diaSemana = dataAtual.getDay() + 1;

  switch (diaSemana) {
    case 1:
      console.log("Hoje é Domingo");
      break;

    case 2:
      console.log("Hoje é Segunda-feira");
      break;

    case 3:
      console.log("Hoje é Terça-feira");
      break;

    case 4:
      console.log("Hoje é Quarta-feira");
      break;

    case 5:
      console.log("Hoje é Quinta-feira");
      break;

    case 6:
      console.log("Hoje é Sexta-feira");
      break;

    case 7:
      console.log("Hoje é Sábado");
      break;

    default:
      console.log("Dia inválido");
  }
}

mostrarDiaSemana();

// ======================================================================
// QUIZ DE PERFIL
// ======================================================================

const btnVisual = document.getElementById("btn-visual");

const btnLogica = document.getElementById("btn-logica");

const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;

let pontosBack = 0;

// função normal
function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.innerHTML = `
        <strong>🎨 Perfil Front-End!</strong><br>
        Você gosta mais da parte visual.
        `;
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.innerHTML = `
        <strong>⚙️ Perfil Back-End!</strong><br>
        Você gosta mais da lógica.
        `;
  } else {
    resultadoQuiz.innerHTML = `
        <strong>🔄 Perfil Full Stack!</strong><br>
        Você gosta dos dois.
        `;
  }

  resultadoQuiz.style.backgroundColor = "#f2f2f2";

  resultadoQuiz.style.padding = "10px";

  resultadoQuiz.style.borderRadius = "10px";
}

// função flecha
btnVisual.addEventListener("click", () => {
  pontosFront++;

  exibirPerfil();
});

// função anônima
btnLogica.addEventListener("click", function () {
  pontosBack++;

  exibirPerfil();
});

// ======================================================================
// CLOSURE
// ======================================================================

// closure = função dentro de função

function contadorCliques() {
  let total = 0;

  // função dentro da função
  return function () {
    total++;

    console.log(`Total de cliques: ${total}`);
  };
}

const contar = contadorCliques();

// usando closure nos botões
btnVisual.addEventListener("click", function () {
  contar();
});

btnLogica.addEventListener("click", function () {
  contar();
});

// ======================================================================
// LAÇOS DE REPETIÇÃO - 08/05/26
// ======================================================================

// FOR
function mostrarParOuImpar() {
  for (let i = 0; i <= 20; i++) {
    let pares = i % 2 === 0 ? "par" : "ímpar";

    console.log(`${i} é ${pares}`);
  }
}

mostrarParOuImpar();

// objeto
let objetc = {
  nome: "Maria Vitória",

  idade: 17,

  curso: "ADS",
};

// FOR IN
function mostrarObjeto() {
  for (let chave in objetc) {
    console.log(`${chave}: ${objetc[chave]}`);
  }
}

mostrarObjeto();

// FOR OF
let aluno = ["Maria", "João", "Ana", "Lucas", "Carla", "Pedro"];

function mostrarAlunos() {
  for (let contem of aluno) {
    if (contem === "Maria") {
      console.log(`${contem} - Presente`);
    } else {
      console.log(`${contem} - Ausente`);
    }
  }
}

mostrarAlunos();

// ======================================================================
// ARRAYS E LISTAS - 11/05/26
// ======================================================================

let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

// mostrar lista
console.log(frutas);

// acessar elementos
console.log(frutas[0]);

console.log(frutas[frutas.length - 1]);

// pop
frutas.pop();

console.log(frutas);

// push
frutas.push("manga");

console.log(frutas);

// unshift
frutas.unshift("morango");

console.log(frutas);

// splice
frutas.splice(2, 1, "kiwi");

console.log(frutas);

// indexOf
console.log(frutas.indexOf("banana"));

// sort
frutas.sort();

console.log(frutas);

// reverse
frutas.reverse();

console.log(frutas);

// length
console.log(frutas.length);

// includes
console.log(frutas.includes("mamão"));

// shift
frutas.shift();

console.log(frutas);

// forEach
frutas.forEach(function (fruta) {
  console.log(fruta);
});

// ======================================================================
// LISTA DE PROJETOS
// ======================================================================

let projetos = [
  {
    nome: "Parking N' Space",

    descricao: "Sistema para gerenciar vagas de estacionamento.",

    conhecimentos: ["GitHub", "Pip", "PyInstaller"],

    tecnologias: ["Python", "Sqlite", "Tkinter"],
  },

  {
    nome: "Controle de Aluguel de Quadras",

    descricao: "Sistema para gerenciar aluguel de quadras.",

    conhecimentos: ["GitHub", "Pip"],

    tecnologias: ["Python", "Sqlite"],
  },

  {
    nome: "Uber",

    descricao: "Aplicativo de transporte.",

    conhecimentos: ["Bubble", "No Code"],

    tecnologias: ["Bubble", "GitHub"],
  },

  {
    nome: "Calculadora com fatoração",

    descricao: "Calculadora matemática.",

    conhecimentos: ["HTML", "CSS", "JavaScript"],

    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
];

// ======================================================================
// MOSTRAR PROJETOS
// ======================================================================

function mostrarProjetos() {
  projetos.forEach(function (projeto) {
    document.write(`<h2>${projeto.nome}</h2>`);

    document.write(`<p>${projeto.descricao}</p>`);

    document.write(`
        <p>
        <strong>Conhecimentos:</strong>
        ${projeto.conhecimentos.join(", ")}
        </p>
        `);

    document.write(`
        <p>
        <strong>Tecnologias:</strong>
        ${projeto.tecnologias.join(", ")}
        </p>
        `);
  });
}

mostrarProjetos();

// ======================================================================
// PROJETOS COM PYTHON
// ======================================================================

document.write(`<h2>Projetos que utilizam Python:</h2>`);

function projetosPython() {
  projetos.forEach(function (projeto) {
    if (projeto.tecnologias.includes("Python")) {
      document.write(`<h3>${projeto.nome}</h3>`);

      document.write(`<p>${projeto.descricao}</p>`);

      document.write(`
            <p>
            <strong>Conhecimentos:</strong>
            ${projeto.conhecimentos.join(", ")}
            </p>
            `);

      document.write(`
            <p>
            <strong>Tecnologias:</strong>
            ${projeto.tecnologias.join(", ")}
            </p>
            `);
    }
  });
}

projetosPython();

// ======================================================================
// PROJETOS COM HTML
// ======================================================================

document.write(`<h2>Projetos que utilizam HTML:</h2>`);

function projetosHTML() {
  projetos.forEach(function (projeto) {
    if (projeto.tecnologias.includes("HTML")) {
      document.write(`<h3>${projeto.nome}</h3>`);

      document.write(`<p>${projeto.descricao}</p>`);

      document.write(`
            <p>
            <strong>Conhecimentos:</strong>
            ${projeto.conhecimentos.join(", ")}
            </p>
            `);

      document.write(`
            <p>
            <strong>Tecnologias:</strong>
            ${projeto.tecnologias.join(", ")}
            </p>
            `);
    }
  });
}

projetosHTML();

// ======================================================================
// OUTRA FORMA DE MOSTRAR
// ======================================================================

function mostrarPrimeiroProjeto() {
  console.log(projetos[0].descricao);

  console.log(projetos[0].conhecimentos);

  console.log(projetos[0].tecnologias);
}

mostrarPrimeiroProjeto();
