const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()} !!!!`)
    }

    @Deprecated('Most use speak_v2 mothod instead')
    speak(){
        console.log(`${this.name.slice(0,5)} ${this.name}`)
    }

    speak_v2(){
        console.log(`${this.name.slice(0,5)} ${this.name} !!!!! RAAAWWWW`)
    }
}

export const charmander = new Pokemon(4,'Charmander');

charmander.speak();