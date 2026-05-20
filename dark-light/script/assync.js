// dia 20/05/2026 -- assíncrono

console.log("1");
console.log("2");
console.log("3");

// Simulando uma operação assíncrona com setTimeout
setTimeout(() => {
    console.log("Operação assíncrona concluída!");
}, 2000); // A operação será concluída após 2 segundos


const minhaPromessa = new Promise((resolve, reject) => {
    const deuCerto = true; // Simulando uma condição de sucesso
    if (deuCerto) {
        resolve("Tudo deu certo!");
    } else {
        reject("Algo deu errado!");
    }
});

minhaPromessa
    .then((mensagem) => {
        console.log(mensagem); // "Tudo deu certo!"
    })
    .catch((erro) => {
        console.error(erro); // "Algo deu errado!"
    });

// assync/await 

fetch("https://api.example.com/dados")
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error("Erro ao buscar dados:", erro));

async function buscarDados() {
    const resposta = await fetch("https://api.example.com/dados");
    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
}


/* 
    1- Achar a URL da API; https://pokeapi.co/api/v2/pokemon/
    2- Ver quais endpoints estão disponíveis;
    3- Ver quais parâmetros são necessários para cada endpoint;
    4- Fazer a primeira chamada no navegador: verem o json;
    5- Identificar no console.log qual propriedade tem o dado desejado
    */


    // buscar pokemon com essa api: https://pokeapi.co/api/v2/pokemon/{nomeDoPokemon}:

    async function buscarPokemon(nomePokemon) {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`;

        try {
            const resposta = await fetch(url);

            if (!resposta.ok) {
                throw new Error(`Erro http: ${resposta.status} ${resposta.statusText}`);
            }

            const dados = await resposta.json();

            document.getElementById("pokemon-info").innerText = `Nome: ${dados.name} | Altura: ${dados.height} | Peso: ${dados.weight} | Imagem: ${dados.sprites.front_default}`; 
        } catch (erro) {
            console.error("Erro ao buscar Pokémon:", erro);
        }
    }

    // Exemplo de uso:
    buscarPokemon("pikachu");
   
     