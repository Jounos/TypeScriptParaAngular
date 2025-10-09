type Hero = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: Hero) {

    console.log(pessoa);
}

printaObjeto({
    name: 'Batman',
    vulgo: 'Bruce Wayne'
})

/**
 * Variáveis
 */

// Tipos primitivos: boolean, number, string
    let ligado: boolean = false;
    let nome: string = "Geovanny";
    let altura: number = 1.8;
    let idade: number = 28;

// Tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

// objeto - sem previsibilidade - má prática
let produto: object = {  
    name : 'Geovanny',
    cidade: 'Goiânia',
    idade: 28
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

// objeto tipo - com previsibilidade - boa prática
let meuProduto: ProdutoLoja = {
    nome: 'Tênis',
    preco: 89.99,
    unidades: 2
}

/**
 * Arrays
 */
let dados: string[] = ['Geovanny', 'Ana', 'Ricardo', 'João'];
let dados2: Array<string> = ['Geovanny', 'Ana', 'Ricardo', 'João'];

let infos: (string | number)[] = ['Gevanny', 10, 'Garibaldo', 784];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ['água', 199.90, 1651516165];

/**
 * Arrays métodos
 * Os métodos para manipulação de arrys nmo Typescript são os mesmos do Javascript
*/
dados.pop();

/**
 * 
 */
let aniversário: Date = new Date("2022-12-01 05:00");
console.log(aniversário.toString());