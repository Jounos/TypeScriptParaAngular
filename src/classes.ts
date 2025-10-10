// classes

/**
 * data modifiers
 * public - É póssível ser acessada de qualquer local do projeto
 * private - Só é possível ser acessada dentro da própria classe;
 * protected - É possível ser acessada dentro da própria classe e das subclasses que erdem a classe.
 * 
 * Também podem ser aplicados a classes
 */

class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }   
}

class Magician extends Character {

    magicPoints: number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 98);

p1.skill = 12;
console.log(p1);
p1.attack();
