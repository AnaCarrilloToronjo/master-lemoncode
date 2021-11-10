console.log("************** DELIVERABLE 03 *********************");

//3. Clone Merge

//Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
const subjects: string[] = ["Math", "English", "Biology"];

function clone(source) {
  const copy = { ...source };
  return copy;
}
console.log(clone(subjects));

//Merge

//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const result = { ...clone(target), ...clone(source) };
  return result;
  //Object.assign(target2, source2);
}
console.log(merge(a, b));
