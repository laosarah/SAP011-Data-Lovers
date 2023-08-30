function mostrarPosterOrdenado(value,listaDeFilmes) {
  const ordenacaoSelecionada = [...listaDeFilmes];
  if (value === "crescente") {
    ordenacaoSelecionada.sort((a ,b) => {
      if (a.release_date < b.release_date) {
        return -1;
      } else if (a.release_date > b.release_date) {
        return 1;
      } else {
        return 0;
      }  
    });
  }
  if (value === "decrescente") {
    ordenacaoSelecionada.sort((a ,b) => {
      if (a.release_date > b.release_date) {
        return -1;
      } else if (a.release_date < b.release_date) {
        return 1;
      } else {
        return 0;
      } 
    }); 
  }
  return ordenacaoSelecionada;
} 

function filtroDiretor(listaDeFilmes, filtroSelecionado) {
  return listaDeFilmes.filter(filme => filtroSelecionado === filme.director);
}

function calculoAgregado(listaDeFilmes, filtroAlterado) {
  const totalDeFilmes = listaDeFilmes.length;
  const totalPorDiretor = filtroAlterado.length;
  const calculo = (totalPorDiretor * 100) / totalDeFilmes;
  return calculo;
}

export{ mostrarPosterOrdenado, filtroDiretor, calculoAgregado } 