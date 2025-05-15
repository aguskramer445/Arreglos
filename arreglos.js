//Punto 1
let colores = ["Rojo", "Azul", "Verde", "Gris", "Negro"]
console.log("Arreglo inicial:", colores);
//Punto 2
console.log("Primer color:", colores[0]);
console.log("Último color:", colores[colores.length - 1]);
//Punto 3
console.log("Cantidad de elementos:", colores.length);
//Punto 4
colores.push("Violeta");
console.log("Agregado al final:", colores);
//Punto 5
colores.unshift("Naranja");
console.log("Agregado al principio:", colores)
//Punto 6
colores.pop("Violeta");
console.log("Eliminacion del ultimo color", colores)
//Punto 7
colores.shift("Naranja");
console.log("Eliminacion del primer color", colores)
//Punto 8
colores[1]= "Turquesa"
console.log("Cambio de posicion:", colores)
//Punto 9
let nuevosColores = [1];
for (let i = 0; i < 3; i++)
  nuevosColores.push(color);
  console.log("Colores en bucle", colores)
