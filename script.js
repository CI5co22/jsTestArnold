
// pregunta 2 

let a = 42;
let b = "Hola mundo";
let c = true;
let d = null;
let e = undefined;
let f = [1, 2, 3];
let g = {nombre: "Juan"};

console.log("-----------   Pregunta 2 -----------")
console.log("a:", typeof a); 
console.log("b:", typeof b);
console.log("c:", typeof c);
console.log("d:", typeof d);
console.log("e:", typeof e);
console.log("f:", typeof f);
console.log("g:", typeof g); 



// pregunta 3

function suma(a,b) // Function declaration
{
    return a + b;
}

const suma2 = function(a, b) // Function expression
{
    return a + b;
}

const sumaArrow = (a, b) => a + b; // Arrow function

console.log("-----------   Pregunta 3 -----------")
console.log("Function declaration:" + suma(1,2))
console.log("Function expression:" + suma2(1,2))
console.log("Arrow function:" + sumaArrow(1,2))


// pregunta 4

let numeros = [1, 2, 3, 4, 5];

// 1. Agrega el número 6 al final
numeros.push(6);

// 2. Elimina el primer elemento
numeros.shift();

// 3. Encuentra la posición del número 3
let posicion = numeros.indexOf(3);

// 4. Crea un nuevo arreglo con todos los números multiplicados por 2
let nuevoArreglo = numeros.map(num => num * 2);

console.log("-----------   Pregunta 4 -----------")
console.log(numeros)
console.log(nuevoArreglo)


// pregunta 5

let persona = {
    nombre: "Arnold",
    edad: 17,
    ciudad: "Guatemala",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


console.log("-----------   Pregunta 5 -----------")
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona.saludar());


// pregunta 6

function analizarNum(num)
{
    const data = {}

    data.numIngresado = num

    if(num%2 == 0)
    {
        data.paridad = "par"
    } else
    {
        data.paridad = "impar"
    }

    if(num < 0)
    {
        data.signo = "negativo"
    }
    else if (num > 0)
    {
        data.signo = "positivo"
    }
    else
    {
        data.signo = "Es 0"
    }

    if(num > 10)
    {
        data.comparacion = "Mayor"
    }
    else if (num < 10)
    {
        data.comparacion = "Menor"
    }
    else
    {
        data.comparacion = "Igual"
    }

    console.log(data)

}


// pregunta 6

console.log("-----------   Pregunta 6 -----------")
analizarNum(10)


// pregunta 7 
document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("mensaje").innerHTML = "¡Botón clickeado!";

    let explicacion = document.getElementById("explicacion");
    explicacion.style.display = "block"
});


//preegunta 8 

function dividir(a, b) {
    try
    {
        if(b == 0) throw "No se puede divivir por 0";
        return a / b
    }
    catch (err)
    {
        return err;
    }
}

let resultado = dividir(10,0)

console.log("-----------   Pregunta 8 -----------")
console.log(resultado)


// pregunta 9
console.log("-----------   Pregunta 9 -----------")

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}

// RESPUESTA: imprimira tres veces 3 debido al scope de var
// para que imprima 0 1 2 se deberia usar let

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
// en consola se imprime junto al console log de la pregunta 10, segun yo es por el setTimeout...


// pregunta 10
console.log("-----------   Pregunta 10 -----------")

function filtrar(array)
{

    for (let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 != 0)
        {
            array.splice(i,1)
        }
    }

    nuevoArray = array.map(num => num*2)
    return nuevoArray
}

miArray = [1,2,3,4,5,6,10]

console.log(filtrar(miArray))