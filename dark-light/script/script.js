//Botão Modo claro/escuro - 30/04/26 ---------------------------------------------------------------------------------

const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

    let claro = true;
    botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Claro";
        claro = false;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Escuro";
        claro = true;
    }
});
//--------------------------------------------------------------------------------------------------------------------
//Cálculo Data Formatura - 04/05/26 ----------------------------------------------------------------------------------
// Dados Pessoais-----------------------------------------------------------------------------------------------------
const NOME = "Maria Vitória";
let tituloProfissional = "Sweet";
let minhaBio = "Estudante de ADS na proz de Divinópolis - MG";
let anoFormatura = 2028;
let mesFormatura = 12;
let diaFormatura = 30;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;
//Utilização do Date--------------------------------------------------------------------------------------------------
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1; // Começa por 0, por isso do +1
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();
let hoje = diaAtual + mesAtual + anoAtual;
//--------------------------------------------------------------------------------------------------------------------
let indefinido;
let nulo = null;
let curso = {
    nome: "Análise e desenvolvimento de sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de programação"
};

console.log(typeof anoFormatura);
console.log(typeof NOME);
console.log(typeof tituloProfissional);
console.log(typeof minhaBio);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof curso);
//Calculo-------------------------------------------------------------------------------------------------------------
let anoRestante = anoFormatura - anoAtual;
let mesRestante = mesFormatura - mesAtual;
let diaRestante = diaFormatura - diaAtual;
//--------------------------------------------------------------------------------------------------------------------
console.log(typeof anoRestante);
console.log(typeof mesRestante);
console.log(typeof diaRestante);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = `Formatura prevista para: ${diaFormatura}/${mesFormatura}/${anoFormatura}`;
document.getElementById("anoInfresso").innerText = `Ano de Ingresso: ${anoIngresso}`;
document.getElementById("curso").innerText = `Curso: ${curso.nome} - Semestre: ${curso.semestre}`;
document.getElementById("tempoRestanteParaFormatura").innerText = 
`Tempo restante para a formatura: ${anoRestante} ano(s), ${mesRestante} meses e ${diaRestante} dias`;
// document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura:`;

// se anos para formatura por menor que 0 ou 0 não quero q imprima
if (anoFormatura - anoAtual <=0) {
    document.getElementById("tempoRestanteParaFormatura")
} else if (anoFormatura - anoAtual ===1) {
    document.getElementById("tempoRestanteParaFormatura")
} else {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
}

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <=0 && mesesRestantes <=0 && anosRestantes <=0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Conluído!`;
}


// Operadores de comparação
let nota = 8;
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} = ${aprovado} </p>`);

// switch case
let diaSemana = dataAtual.getDay() + 1; // getDay() retorna um número de 0 a 6, onde 0 é Domingo, por isso do +1

switch (diaSemana) {
    case 1:
        document.write("<p>Hoje é Domingo</p>"); break;
    case 2:
        document.write("<p>Hoje é Segunda-feira</p>"); break;
    case 3:
        document.write("<p>Hoje é Terça-feira</p>"); break;
    case 4:
        document.write("<p>Hoje é Quarta-feira</p>"); break;
    case 5:
        document.write("<p>Hoje é Quinta-feira</p>"); break;
    case 6:
        document.write("<p>Hoje é Sexta-feira</p>"); break;
    case 7:
        document.write("<p>Hoje é Sábado</p>"); break; 
    default:
        document.write("<p>Dia da semana inválido</p>"); break;
}



// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");


btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}



