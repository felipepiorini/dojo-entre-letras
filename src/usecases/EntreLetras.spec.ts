import { EntreLetras } from './EntreLetras';

type SutTypes = {
    sut: EntreLetras
}

const makeSut = (): SutTypes => {
    const sut = new EntreLetras();

    return {
      sut
    }
}

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

describe('Casos de testes EntreLetras', () => {

  test('deve retornar um erro caso não seja passado parâmetro', () => {
    const { sut } = makeSut()
    const param1 = 'a';
    const param2 = null;

    expect(() => { sut.handle(param1, param2) }).toThrowError('Informar letra incial e letra final');
  })

  test('deve retornar um erro caso o parametro nao seja string (letras)', () => {
    const { sut } = makeSut()
    const param1 = 'a';
    const param2 = '1';
   
    expect(() => { sut.handle(param1, param2) }).toThrowError('Os parametros devem ser Letras');
  })

  test('deve retornar 1 como a distancia entre letras "a" e "c"', () => {
    const { sut } = makeSut()
    const param1 = 'a';
    const param2 = 'c';
    
    const result = sut.handle(param1, param2);

    expect(result).toBe(1);
  })

  test('deve retornar 24 como a distancia entre letras "a" e "z"', () => {
    const { sut } = makeSut()
    const param1 = 'a';
    const param2 = 'z';
    
    const result = sut.handle(param1, param2);

    expect(result).toBe(24);
  })

  test('deve retornar error "Não está na ordem alfabética" caso não esteja na ordem alfabética', () => {
    const { sut } = makeSut()
    const param1 = 'z';
    const param2 = 'a';

    expect(() => { sut.handle(param1, param2) }).toThrowError('Não está na ordem alfabética');
  })

  //TODO: Testar se a mesma letra é passada nos 2 parämetros
  //TODO: Testar se é passada uma só letra por parâmetro
})
