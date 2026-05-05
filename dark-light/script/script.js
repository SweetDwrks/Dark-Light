const botao = document.getElementById("modoClaroEscuro");
const body = document.body;

botao.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Acima é criado o botão que muda o tema da página entre claro e escuro

// ------------------------------------------------------------

// Dados principais da página

const NOME = "Maria Vitória";
let tituloProfissional = "Estudante de programação";
let minhaBios = "Olá, seja bem-vindo ao meu site pessoal. Aqui você pode conhecer um pouco mais sobre mim, meus estudos e minha evolução na programação.";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

// A data da formatura precisa seguir o padrão: ano, mês - 1, dia
// Isso acontece porque no JavaScript os meses começam do 0
// Janeiro é 0, fevereiro é 1, março é 2 e dezembro é 11

let dataFormatura = new Date(anoFormatura, mesFormatura - 1, diaFormatura);
let hoje = new Date();

// Zera as horas para o cálculo ficar mais correto
hoje.setHours(0, 0, 0, 0);
dataFormatura.setHours(0, 0, 0, 0);

// Calcula a diferença em milissegundos
let diferencaTempo = dataFormatura - hoje;

// Converte a diferença para dias
let totalDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

// Calcula anos, meses e dias de forma simples e real
let anosRestantes = dataFormatura.getFullYear() - hoje.getFullYear();
let mesesRestantes = dataFormatura.getMonth() - hoje.getMonth();
let diasRestantes = dataFormatura.getDate() - hoje.getDate();

if (diasRestantes < 0) {
    mesesRestantes--;

    let ultimoDiaMesAnterior = new Date(
        hoje.getFullYear(),
        hoje.getMonth() + 1,
        0
    ).getDate();

    diasRestantes += ultimoDiaMesAnterior;
}

if (mesesRestantes < 0) {
    anosRestantes--;
    mesesRestantes += 12;
}

// Caso a data da formatura já tenha passado
if (totalDias < 0) {
    anosRestantes = 0;
    mesesRestantes = 0;
    diasRestantes = 0;
    totalDias = 0;
}

// Mostrando os dados no HTML

document.getElementById("meuNome").innerText = NOME;
document.getElementById("titulo").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBios;

document.getElementById("anoFormatura").innerText = `Ano da formatura: ${anoFormatura}`;
document.getElementById("tempoRestante").innerText = `Tempo restante: ${anosRestantes} ano(s), ${mesesRestantes} mês(es) e ${diasRestantes} dia(s)`;
document.getElementById("mesRestante").innerText = `Total de dias restantes: ${totalDias} dia(s)`;
document.getElementById("diasRestantes").innerText = `Data da formatura: ${diaFormatura}/${mesFormatura}/${anoFormatura}`;