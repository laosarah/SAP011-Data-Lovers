import { mostrarPosterOrdenado, filtroDiretor, calculoAgregado } from './data.js'

import studio from './data/ghibli/ghibli.js'; 

const poster = document.querySelector(".filmesContainer"); // document.querySelector busca e seleciona primeira classe "filmesContainer" que aparecer no HTML e armazena na variavel poster 

function mostraPoster(films) { // função mostraPoster(paramentro films(lá do ghibli.js))
  const posterFilme = document.createElement("img"); // document.createElement cria um elemento imagem e armazena na variavel posterFilme
  posterFilme.src = films.poster; // posterFilme.(dot - ponto acessa propriedades de objeto)busca o caminho da imagem, que no caso sera poster que esta dentro de films 
  posterFilme.classList.add("filme-poster"); //cria uma classList de nome "filme-poster"
  posterFilme.alt = "Ano:"+films.release_date; //cria um alt(mostrar no console, me ajudou na verificação da ordenazão )
  poster.appendChild(posterFilme); // 
  return posterFilme; // retorna posterFilme 
  
} 
console.log("mostrar imagens filmes");

function limparTela(films) { // função limparTela(films)
  poster.innerHTML = "";  // remove o conteudo do elemento HTML 
  for (let i = 0; i < films.length; i++) { // loop passando por todos os filmes do array film 
    const film = films[i]; // variavel film recebe indice da array films
    const indice = studio.films.indexOf(film); // variavel indice recebe indice de um filme do array films que esta no studio 
    mostraPoster(film,indice); // mostraPoster com os parametros film e indice
  }
} 
console.log("limpa conteudo da tela");

for (let i = 0; i < studio.films.length; i++) { // loop que vai percorrer todos os filmes do array films que esta no studio 
  mostraPoster(studio.films[i], i);
}

const ordenacaoSelecionada = document.getElementById("ordenacaoSelecionada"); // documento pega elemento pelo Id "ordenacaoSelecionada" armazena na variavel ordenacaoSelecionada
const listaDeFilmes = studio.films; // variavel listaDeFilmes recebe films que é uma array e esta no studio 
let ordemFiltro = listaDeFilmes; // variaval ordemFiltro recebe listaDeFilmes (forma que encontrei para ordenar filmes dentro do filtro diretor - linha 37)

// evento de ouvinte em ordenacaoSelecionada(que esta recebendo pelo id um elemento lá no HTML, ouvinte ira ouvir lá tbm)
ordenacaoSelecionada.addEventListener("change", function () { // argumento 1 change: quando um valor é alterado. função anonima: quando o evento 'change' for acionado, executar o que esta no bloco. 
  const ordenacaoAlterada = mostrarPosterOrdenado(ordenacaoSelecionada.value, ordemFiltro); // variavel ordenacaoAlterada recebe valor de mostrarPosterOrdenado (data.js) e a ordemFiltro 
  limparTela(ordenacaoAlterada); // executa função de limparTela 
});

const resultadoCalculo = document.getElementById("resultadoCalculo"); // documento pega o primeiro Id no HTML "resultadoCalculo" e armazena na variavel resultadoCalculo 
const filtroSelecionado = document.getElementById("filtro"); // documento pega o primeiro Id no HTML "filtro" e armazena na variavel filtroSelecionado 

// evento de ouvinte filtroSelecionado ^ (..linha 35)
filtroSelecionado.addEventListener("change", function () { // quando um valor é alterado executa a função anonima, que esta no bloco \/ 
  let filtroAlterado  = listaDeFilmes; //Se nenhum filtro for selecionado, vai mostrar a lista de filmes original

  if (filtroSelecionado.value === "Filtro"){
    ordemFiltro = listaDeFilmes; // ordemFiltro recebe listaDeFilmes
    document.getElementById('calculoContainer').style.display = 'none'; //some janela com o calculo de filmes por diretor
  }else{
    filtroAlterado = filtroDiretor(listaDeFilmes, filtroSelecionado.value); // variavel filtroAlterado recebe filtroDiretor (linha 27 data) com os parametros listaDeFilmes e o valor de filtroSelecionado
    ordemFiltro = filtroAlterado; // ordemFiltro recebe filtroAlterado 
    document.getElementById('calculoContainer').style.display = 'flex'; //mostra janela com o calculo de filmes por diretor
  }

  const resultado = calculoAgregado(listaDeFilmes, filtroAlterado); // variavel resultado recebe calculoAgregado (linha 31 data) com os parametros listaDeFilmes e filtroAlterado 
  resultadoCalculo.textContent = `${resultado} % dos filmes do Studio Ghibli foram dirigidos por este diretor` // 
  
  limparTela(filtroAlterado);
});

