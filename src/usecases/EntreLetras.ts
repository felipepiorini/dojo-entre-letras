export class EntreLetras {
    handle(letraInicial: string, letraFinal: string) {
    
        const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
        if(!letraInicial || !letraFinal) throw new Error('Informar letra incial e letra final')

        if (!alfabeto.includes(letraInicial) || !alfabeto.includes(letraFinal)) {
            throw new Error('Os parametros devem ser Letras')
        }

        const indexLetraInicial = alfabeto.indexOf(letraInicial);
        const indexLetraFinal = alfabeto.indexOf(letraFinal);
        const result = indexLetraFinal - indexLetraInicial - 1;
        
        if (result < 0) {
            throw new Error('Não está na ordem alfabética');
        }

        return result;
    } 
}

// Faça um programa que receba duas letras, e diga quantas letras há entre elas. 
// As letras passadas devem estar em ordem alfabética. Se não estiverem o programa deve avisar o usuário. 
// Exemplo: 'a', 'b' = 0 'a', 'c' = 1 'a', 'z' = 24 'w', 'e' = Não está na ordem alfabética