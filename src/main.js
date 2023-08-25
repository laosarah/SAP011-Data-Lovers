import { mostrarPosterOrdenado, filtroDiretor, calculoAgregado } from './data.js';

import studio from './data/ghibli/ghibli.js';

const poster = document.querySelector(".filmesContainer");

function mostraPoster(films) {
  const posterFilme = document.createElement("img");
  posterFilme.src = films.poster;
  posterFilme.classList.add('filme-poster');
  poster.appendChild(posterFilme);
  return posterFilme;
}

function limparTela(films) {
  poster.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    const indice = studio.films.indexOf(film);
    mostraPoster(film, indice);
  }
}

for (let i = 0; i < studio.films.length; i++)
  mostraPoster(studio.films[i], i);


const ordenacaoSelecionada = document.getElementById("ordenacaoSelecionada");
const listaDeFilmes = studio.films;

ordenacaoSelecionada.addEventListener("change", function () {
  const ordenacaoAlterada = mostrarPosterOrdenado(ordenacaoSelecionada.value, listaDeFilmes);
  limparTela(ordenacaoAlterada);
});

const resultadoCalculo = document.getElementById("resultadoCalculo");
const filtroSelecionado = document.getElementById("filtro");

filtroSelecionado.addEventListener("change", function () {
  const filtroAlterado = filtroDiretor(listaDeFilmes, filtroSelecionado.value);
  const resultado = calculoAgregado(listaDeFilmes, filtroAlterado);
  resultadoCalculo.textContent = `${resultado} % dos filmes do Studio Ghibli foram dirigidos por este diretor`
  limparTela(filtroAlterado);
});

