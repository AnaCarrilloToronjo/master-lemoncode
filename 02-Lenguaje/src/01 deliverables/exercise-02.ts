console.log("************** DELIVERABLE 02 *********************");

//2. Concat
const fruits: string[] = ["apple", "pear", "watermelon"];
const vegetables: string[] = ["pepper", "carrot", "lettuce"];

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {
  const purchase = [...a, ...b];
  console.log(purchase);
};
concat(fruits, vegetables);

//Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concat_multArg = (...arg) => console.log(arg);

concat(fruits, vegetables);
