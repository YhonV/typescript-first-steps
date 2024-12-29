export let name = 'Yhon';
export const age: number = 24;
export const isValid: boolean = true;

name = 'Melissa';

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles 
' comillas
inyectar valores ${name} 
expresiones ${ 1 + 1 }
numeros: ${age}
booleanos: ${isValid}`

console.log(templateString);