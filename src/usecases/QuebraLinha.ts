export default class QuebraLinha {

    handle(frase: string, numColunas: number): string[] {

        const fraseTrim = frase ? frase.trim() : null
       
        if(!fraseTrim) {
            throw new Error("A frase não foi informada!");
        }

        if(!numColunas) throw new Error('A quantidade de coluna não foi informada!')
        
        let nRep = (fraseTrim.length / numColunas);
        let isInteiro = Number.isInteger(nRep) ? nRep : Number.parseInt(`${nRep}`) + 1;
       
        console.log(isInteiro)
        const words = fraseTrim.split(' ');

        let fraseMontada = [];
        let count = 0;
        
        for (var i = 0; i <= isInteiro; i++) {
            words.forEach(word => {
                  count = count + word.length;
                  if (count <= numColunas) {
                      fraseMontada[isInteiro].push(word)
                  } 
              })
        }

        return [];
    }
}

// Escreva um programa em que dado uma frase e a quantidade de colunas que podem ser exibidas na tela, faça a quebra de linhas sem quebrar as palavras.

// Por exemplo, se passarmos a frase "Um pequeno jabuti xereta viu dez cegonhas felizes." e pedirmos para ela ser exibida em 20 colunas, teremos como resposta:

// Um pequeno jabuti

// xereta viu dez

// cegonhas felizes.