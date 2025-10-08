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