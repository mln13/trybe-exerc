class Superclass {
    public isSuper: boolean
    constructor() {
        this.isSuper = true;
    }

    public sayHello() {
        console.log('Olá mundo');
        
    }
}

class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}

const myFunc = (objeto: Superclass) => {
    objeto.sayHello();
    if (objeto.isSuper === true) {
        console.log("Super!");
    } else {
        console.log("Sub!");
        
    }

}

const objeto = new Subclass();
const objeto2 = new Superclass();

myFunc(objeto2)