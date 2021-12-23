/* классы */

class Person {

    constructor( name ) {
        this.name = name;
    }

    greet() { console.log(`${ this.name } говорит 'привет!'`) }

}



/* наследование */

class Programmer extends Person {

    constructor( name, job ) {

        super( name )   /* родительское значение */

        this.job = job

    }

        greet() {
            super.greet()
            console.log( 'rewritten' )
        }

}



export { Person, Programmer };