export default class Starter{
    constructor(name){
        this.initialized = false;
        this.name = name;
    }

    // initialize plugin
    init() {
        this.helloWorld();
        this.initialized = true;
    }

    helloWorld() {
        console.log(`Hello ${this.name}`)
    }

}
