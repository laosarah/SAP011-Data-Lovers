import { mostrarPosterOrdenado, filtroDiretor, calculoAgregado } from '../src/data.js';


// bloco testando função mostrarPosterOrdenado 
const data = [
  { title: "Filme A", release_date: 1986 }, //0
  { title: "Filme B", release_date: 1990 }, //1
  { title: "Filme C", release_date: 1988 }  //2
];

const dataDiferente = [
  { title: "Filme D", release_date: 1988 },
  { title: "Filme E", release_date: 1988 }
]

describe('mostrarPosterOrdenado', () => {

  it('testando ordem crescente', () => {
    const crescente = mostrarPosterOrdenado('crescente', data);
    expect(crescente[0].release_date).toBe(data[0].release_date);
    expect(crescente[1].release_date).toBe(data[2].release_date);
    expect(crescente[2].release_date).toBe(data[1].release_date);
  });

  it('testando ordem descrescente', () => {
    const decrescente = mostrarPosterOrdenado('decrescente', data);
    expect(decrescente[0].release_date).toBe(data[1].release_date);
    expect(decrescente[1].release_date).toBe(data[2].release_date);
    expect(decrescente[2].release_date).toBe(data[0].release_date);
  });

  it('testando ordenação decrescente com a mesma data', () => {
    const decrescente = mostrarPosterOrdenado('decrescente', dataDiferente);
    expect(decrescente).toStrictEqual(dataDiferente);
  });

  it('testando ordenação crescente com a mesma data', () => {
    const decrescente = mostrarPosterOrdenado('crescente', dataDiferente);
    expect(decrescente).toStrictEqual(dataDiferente);
  });
});


// bloco testando função filtroDiretor
const filtro = [
  { title: "Filme A", director: "Diretor X" },
  { title: "Filme B", director: "Diretor Y" },
  { title: "Filme C", director: "Diretor Z" }
]

describe('filtroDiretor', () => {

  it('return `filtro Diretor`', () => {
    const filtragem = filtroDiretor(filtro, 'Diretor Y');
    expect(filtragem[0].director).toBe('Diretor Y');
    expect(filtragem.length).toBe(1);
  });
});

// bloco testando função calculoAgregado 
const calculo = [
  { title: "Filme A", director: "Diretor X" }, 
  { title: "Filme B", director: "Diretor Y" },
  { title: "Filme C", director: "Diretor X" },
  { title: "Filme D", director: "Diretor X" },
  { title: "Filme E", director: "Diretor Y" },
  { title: "Filme F", director: "Diretor Z" } 
];

const filtroAlterado = [
  { title: "Filme A", director: "Diretor X" }, 
  { title: "Filme C", director: "Diretor X" },
  { title: "Filme D", director: "Diretor X" }
]

describe('calculoAgregado', () => {

  it('return `calculoAgregado`', () => {
    const calculando = calculoAgregado(calculo, filtroAlterado)
    expect(calculando).toBe(50); 
  });
});


















//COPIA COGIGO 

// import { mostrarPosterOrdenado, filtroDiretor, calculoAgregado } from '../src/data.js';

// // bloco testando função mostrarPosterOrdenado 
// const data = [
//   { title: "Filme A", release_date: "1986" }, 
//   { title: "Filme B", release_date: "1990" },
//   { title: "Filme C", release_date: "1988" },
//   // { title: "Filme D", release_date: "1988" } 
// ];

// describe('mostrarPosterOrdenado', () => {

//   it('return `mostraPosterOrdenado`', () => {
//     const crescente = mostrarPosterOrdenado('crescente', data);
//     expect(crescente[1].title).toBe(data[2].title);
//     expect(crescente[2].title).toBe(data[1].title);
//   });

//   it('return `mostraPosterOrdenado`', () => {
//     const decrescente = mostrarPosterOrdenado('decrescente', data);
//     expect(decrescente[0].title).toBe(data[1].title);
//     expect(decrescente[1].title).toBe(data[2].title);
//     expect(decrescente[2].title).toBe(data[0].title);
//   });

//   it('return `mostraPosterOrdenado`', () => {
//     const decrescente = mostrarPosterOrdenado('', data);
//     expect(decrescente).toStrictEqual(data);
//   });
// });



// // bloco testando função filtroDiretor
// const filtro = [
//   { title: "Filme A", director: "Diretor X" },
//   { title: "Filme B", director: "Diretor Y" },
//   { title: "Filme C", director: "Diretor Z" }
// ]

// describe('filtroDiretor', () => {

//   it('return `filtro Diretor`', () => {
//     const filtragem = filtroDiretor(filtro, 'Diretor Y');
//     expect(filtragem[0].director).toBe('Diretor Y');
//     expect(filtragem.length).toBe(1);
//   });
// });



// // bloco testando função calculoAgregado 
// const calculo = [
//   { title: "Filme A", director: "Diretor X" }, 
//   { title: "Filme B", director: "Diretor Y" },
//   { title: "Filme C", director: "Diretor X" },
//   { title: "Filme D", director: "Diretor X" },
//   { title: "Filme E", director: "Diretor Y" },
//   { title: "Filme F", director: "Diretor Z" } 
// ];

// const filtroAlterado = [
//   { title: "Filme A", director: "Diretor X" }, 
//   { title: "Filme C", director: "Diretor X" },
//   { title: "Filme D", director: "Diretor X" }
// ]

// describe('calculoAgregado', () => {

//   it('return `calculoAgregado`', () => {
//     const calculando = calculoAgregado(calculo, filtroAlterado)
//     expect(calculando).toBe(50); 
//   });
// });