import QuebraLinha from './QuebraLinha'

type SutTypes = {
    sut: QuebraLinha,
}

const makeSut = (): SutTypes => {
    const sut = new QuebraLinha();
    return { sut };
}

describe('QuebraLinha', () => {
  test('Deve retorna erro se frase seja uma string vazia',()=>{
    const frase = ' ';
    const numeroColunas = 1;
    const { sut } = makeSut();

    expect(() => { sut.handle(frase, numeroColunas) }).toThrowError('A frase não foi informada!')
  })

  test('Deve retorna erro se frase seja null', () => {
    const frase =  null;
    const numeroColunas = 15;
    const { sut } = makeSut();

    expect(() => { sut.handle(frase, numeroColunas) }).toThrowError('A frase não foi informada!')
  });

  test('Quantidade de colunas nao informado', () => {
    const frase = 'test';
    const numeroColunas = null;
    const { sut } = makeSut();

    expect(() => { sut.handle(frase, numeroColunas) }).toThrowError('A quantidade de colunas não foi informada!')
  });
  
  test('Deve retornar a quantidade correta de quebras de linha', () => {
    const frase =  'Um pequeno jabuti xereta viu dez cegonhas felizes.';
    const numeroColunas = 20;
    const { sut } = makeSut();
    const result = sut.handle(frase, numeroColunas);
    expect(result.split('\n').length).toBe(3)
  });

  test('A frase deve ser dividida corretamenta', () => {
    const frase = 'Um pequeno jabuti xereta viu dez cegonhas felizes.';
    const numeroColunas = 20;
    const { sut } = makeSut();
    const result = sut.handle(frase, numeroColunas);
    const expectResult = 'Um pequeno jabuti\nxereta viu dez\ncegonhas felizes.';
    expect(result).toEqual(expectResult);
  });
  
})
  