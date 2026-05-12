//Botão Modo claro/escuro - 30/04/26 ---------------------------------------------------------------------------------

const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

    let claro = true;
    botao.addEventListener("click", function() {
    if (claro) {
        
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.transition = "background-color 2s ease, color 2s ease"; // - - transição suave para mudança de cores
        botao.textContent = "Modo Claro";
        claro = false;
    } else {
        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "purple";
        document.body.style.color = 
        document.body.style.transition = "background-color 2s ease, color 2s ease";
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

// dia 08/05/2026 -- laços de repetição

/* gatilho inicial/ começo */ /* limite, limitador, roda enquanto */ /* gatilho de incremento, o que acontece a cada rodada */
for ( let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "par" : "ímpar";
    console.log(`${i} é ${pares}`);
} 

let objetc = {
    nome: "Maria Vitória",
    idade: 17,
    curso: "ADS"
}

for (let chave in objetc) {
    document.write(`<p>${chave}: ${objetc[chave]}</p>`);
}


let aluno = ["Maria", "João", "Ana", "Lucas", "Carla", "Pedro"];
for (let contem of aluno) {
    if (contem === "Maria") {
        document.write(`<p>${contem} - Presente:</p>`);
    } else {
        document.write(`<p>${contem} - Ausente:</p>`);
    }
}

let num = parseInt(prompt("Diga um número par:"));
while (num % 2 !== 0) {
    num = parseInt(prompt("Ops, esse número não é par. Tente novamente:"));
};

do {
  num = prompt("Diga um número par:")
} while (num % 2 !== 0);


// lista das minhas habilidades através de uma lista, jogando no html usando while, for. for of ou do while o que eu preferir:

let object = {
    "Habilidades Técnicas": ["HTML", "CSS", "JavaScript", "Python"], // - - Habilidades Técnicas
    "Habilidades Interpessoais": ["Comunicação", "Trabalho em equipe", "Resolução de problemas"], // - - Habilidades Interpessoais
    "Habilidades de Aprendizado": ["Curiosidade", "Adaptabilidade", "Autodidatismo"] // - - Habilidades de Aprendizado
};

for (let categoria in object) { // - - Acessando cada categoria de habilidades
    document.write(`<h3>${categoria}</h3>`); // - - Acessando cada categoria de habilidades
    for (let habilidade of object[categoria]) // - - Acessando cada habilidade dentro de cada categoria 
        document.write(`<p>${habilidade}</p>`); // - - Acessando cada habilidade dentro de cada categoria
};


// dia 11/05/2026 -- arrays e listas

// let ou const (para definir a variavel) 
let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]; // lista ou array de frutas 
document.write(`<p>Frutas: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas separada por vírgula

/*
// Acessando elementos da lista
document.write(`<p>Primeira fruta: ${frutas[0]}</p>`); // - - Acessa o primeiro elemento (maçã)
document.write(`<p>Última fruta: ${frutas[frutas.length - 1]}</p>`); // - - Acessa o último elemento (abacaxi)
*/


// Modificando elementos da lista - exemplos:
// pop remove a última fruta da lista
frutas.pop(); // remove a última fruta da lista (abacaxi)
document.write(`<p>Frutas após remover a última: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após remoção

// push adiciona uma nova fruta no final da lista
frutas.push("manga"); // adiciona uma nova fruta no final da lista (manga)
document.write(`<p>Frutas após adicionar manga: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após adição

// unshift adiciona uma nova fruta no início da lista
frutas.unshift("morango"); // adiciona uma nova fruta no início da lista (morango)
document.write(`<p>Frutas após adicionar morango: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após adição

// splice remove a fruta na posição desejada
frutas.splice(0, 1); // remove a fruta na posição 4 
document.write(`<p>Frutas após remover laranja: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após remoção

// indexOf retorna o índice de um elemento específico na lista
frutas.indexOf("banana"); // retorna o índice da fruta "banana" (1)
document.write(`<p>Índice da banana: ${frutas.indexOf("banana")}</p>`); // - - Imprime o índice da fruta "banana"

// sort ordena a lista em ordem alfabética
frutas.sort(); // ordena a lista de frutas em ordem alfabética
document.write(`<p>Frutas ordenadas: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas ordenada

// reverse inverte a ordem da lista
frutas.reverse(); // inverte a ordem da lista de frutas
document.write(`<p>Frutas em ordem reversa: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas em ordem reversa

// length retorna o número de elementos na lista
frutas.length; // retorna o número de frutas na lista
document.write(`<p>Número de frutas: ${frutas.length}</p>`); // - - Imprime o número de frutas na lista

// includes verifica se um elemento específico está presente na lista
frutas.includes("mamão"); // verifica se a fruta "mamão" está na lista (true)
document.write(`<p>Mamão está na lista? ${frutas.includes("mamão")}</p>`); // - - Imprime se a fruta "mamão" está na lista

// slice retorna uma parte da lista com base em índices específicos
frutas.slice(2, 1, "kiwi"); // remove a fruta na posição 2 e adiciona "kiwi" no lugar
document.write(`<p>Frutas após substituir laranja por kiwi: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após substituição

// shift remove a primeira fruta da lista
frutas.shift(); // remove a primeira fruta da lista (morango)
document.write(`<p>Frutas após remover a primeira: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após remoção

frutas.forEach(function(fruta) { // - - Itera sobre cada fruta na lista
    document.write(`<p>${fruta}</p>`); // - - Imprime cada fruta em um parágrafo separado
});

frutas.splice(2, 1, "melancia"); // remove a fruta na posição 2 e adiciona "melancia" no lugar
document.write(`<p>Frutas após substituir kiwi por melancia: ${frutas.join(", ")}</p>`); // - - Imprime a lista de frutas após substituição