console.log("************** DELIVERABLE 01 *********************");
//1. Array operations

const elements: string[] = ["element1", "element2", "element3", "element4"];

//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([e1]: string[]) => console.log(e1);

head(elements);
//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([elements, ...others]: string[]) => console.log(others);

tail(elements);

//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = elements => {
  elements.pop();
  console.log(elements);
};
init(elements);

//Last
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = elements => console.log(elements.pop()); // Implementation here.
last(elements);
