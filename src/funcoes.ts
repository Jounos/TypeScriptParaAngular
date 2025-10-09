//funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "João";
}

let soma: number = addNumber(4, 7);
console.log(soma);
console.log(addToHello("João"));
console.log(callToPhone("João"));
console.log(callToPhone(1652616));
console.log(getDatabase(186));
  