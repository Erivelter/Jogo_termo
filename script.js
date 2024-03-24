let linha = 0
let ListaDePalavras = ["mundo", "vento", "mudar"];

fetch('https://cors-anywhere.herokuapp.com/https://api.dicionario-aberto.net/random/5')
    .then(response => response.json())
    .then(data => {
        let palavras = data.word; // substitua 'word' pelo campo correto na resposta da API
        ListaDePalavras = ListaDePalavras.concat(palavras);
        console.log(ListaDePalavras); // imprime a lista atualizada
    })
    .catch(error => console.error('Erro:', error));
let winScreen = document.querySelector('.win');
let loseScreen = document.querySelector('.lose');
const n = Math.floor(Math.random()*ListaDePalavras.length)
palavra_sorteada = ListaDePalavras[n];

console.log(palavra_sorteada)

const btn_enviar = document.getElementById("btn_enviar")
btn_enviar.addEventListener("click", vereficador_palavras);

let palavra_sorteada_fracionada = palavra_sorteada.split('')

function vereficador_palavras(){
    let texto = document.getElementById("box").value;
    let palavra_fracionada = texto.split('')
    
    if (texto === palavra_sorteada){
        for (let i = 0; i < palavra_fracionada.length; i++){
            document.querySelector(`#linha${linha} #item${i}`).innerHTML = palavra_fracionada[i]
            winScreen.style.display = 'block';
            winScreen.innerHTML = '<h1>Você venceu! A palavra certa era: <br>' + palavra_sorteada + '</h1>';
        }
    } else {
        for (let i = 0; i < palavra_fracionada.length; i++){
            if (palavra_fracionada[i] == palavra_sorteada_fracionada[i]){
                console.log(`TEM:${palavra_fracionada[i]}`);
                document.querySelector(`#linha${linha} #item${i}`).innerHTML = palavra_fracionada[i];
                document.querySelector(`#linha${linha} #item${i}`).style.color = "green";
            } else if(palavra_sorteada_fracionada.includes(palavra_fracionada[i])){
                console.log(`TEM mas no lugar errado:${palavra_fracionada[i]}`);
                document.querySelector(`#linha${linha} #item${i}`).innerHTML = palavra_fracionada[i];
                document.querySelector(`#linha${linha} #item${i}`).style.color = "yellow";
            } else {
                console.log(`NÃO TEM:${palavra_fracionada[i]}`);
                document.querySelector(`#linha${linha} #item${i}`).innerHTML = palavra_fracionada[i];
                document.querySelector(`#linha${linha} #item${i}`).style.color = "red";
            }
        }
        linha++
    }
    if (linha==4) {
        loseScreen.style.display = 'block';
        loseScreen.innerHTML = '<h1>Você perdeu! A palavra certa era: <br>' + palavra_sorteada + '</h1>';
    }
}
