console.log("************** EXTRAS *********************");

/*Califications Summary
Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas) y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.

Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre, nota más alta y media de notas (StudentSummary).

No se permite el uso de clases. En caso de usar funciones auxiliares típalas. Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones a tres números.
*/

const students: { name: string; califications: number[] }[] = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34]
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01]
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3]
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69]
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48]
  }
];

const summarizeClassRoom = (
  studentList: { name: string; califications: number[] }[]
) => {
  let students = studentList.map(function(obj) {
    const name: string = obj.name;
    const highestCalification: number = Math.max(...obj.califications);
    const averageCalifications: number =
      obj.califications.reduce((a, b) => a + b, 0) / obj.califications.length;

    let student: {
      name: string;
      highestCalification: number;
      averageCalifications: number;
    } = { name, highestCalification, averageCalifications };
    return student;
  });
  return students;
};

console.log(summarizeClassRoom(students));

/*Curry Setter
En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario. Crea una función set que reciba un objeto con 
los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad del objeto con el valor pasado como argumento.

El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.
*/

const set = (
  person: { name: string; surname: string; age: number },
  property: string,
  value: number | string
) => {
  let newPersona = {
    name: person.name,
    surname: person.surname,
    age: person.age,

    set updatePerson(property) {
      if (property === "age") {
        this.age = value;
      } else if (property === "name") {
        this.name = value;
      } else if (property === "surname") {
        this.surname = value;
      }
    }
  };
  newPersona.updatePerson = property;

  return newPersona;
};

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

/*Morse
Vamos a crear... ¡un transmisor Morse!

Descripción

El ejercicio consiste en, dado cualquier mensaje de entrada, representar por consola el estado de las señales morse que resultan de transmitir dicho mensaje. Para facilitarte la tarea piensa en la típica bombilla de un transmisor morse:

Cuando recibe un punto, se enciende brevemente.
Cuando recibe una raya, se enciende más prolongadamente.
El tiempo que la bombilla permance apagada ayuda a discernir la separación entre letras y también entre palabras.
Por tanto, la salida por consola será una sucesión de estados: ON/OFF, Encendido/Apagado, 1/0, como prefieras.

Implementación

Para ello tendremos que implementar una factoría de transmisores. Recuerda que una factoría es una función que devuelve un objeto o clase. Esa decisión es a tu, la entidad transmisor podrá ser objeto o clase, como prefieras. Esta factoría necesita una serie de "ingredientes" para configurar el transmisor:

Un mapa que traduzca de carácter a su representación morse. Sírvete del objeto auxiliar morseAlphabet que se adjunta más abajo.
Una función que implemente un mecanismo de timeout para espaciar los símbolos a transmitir. Este mecanismo será como un setTimeout con la diferencia de que en lugar de tomar milisegundos como entrada, será el número de puntos a esperar. Un punto, como explicaremos más abajo, es la unidad temporal básica de referencia.
Un función writer que será la encargada de escribir por consola el estado de nuestra bombilla. Usa ON/OFF, 1/0 o lo que prefieras.
Un callback para cuando el mensaje se haya terminado de transmitir completamente. La entidad transmisor deberá tener una función para transmitir el mensaje deseado, que admita dicho mensaje como parámetro.
NOTA

Utiliza Typescript y proporciona un tipado lo más completo posible.

Timing

La unidad temporal de referencia será la duración de 1 punto en lugar de trabajar en milisegundos. La duración real en ms. de dicho punto es a tu elección, puede ser de 50ms o de 1seg. si estás haciendo pruebas y quieres ir despacio. Dicho esto deberás saber que, en morse:

La duración de 1 punto es la referencia temporal.
Las rayas duran 3 puntos.
La separación entre cada punto o cada raya es también de 1 punto.
La separación entre letras es de 3 puntos.
La separación entre palabras es de 7 puntos.*/

const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
};

const mapCharacters = (message: string) => {
  const messageMorse: string[] = [];
  message = message.toLowerCase();

  for (let i = 0; i < message.length; i++) {
    Object.entries(morseAlphabet).forEach(([key, value]) => {
      if (key === message[i]) {
        messageMorse.push(value);
      }
    });
    if (" " === message[i]) {
      messageMorse.push("*");
    }
  }
  return messageMorse;
};

function waitTime(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const transmitMessage = async (messageMorse: string) => {
  let messageMorseProcess: string[] = mapCharacters(messageMorse);
  const timeout: number = 1000;
  for (let i = 0; i < messageMorseProcess.length; i++) {
    for (let j = 0; j < messageMorseProcess[i].length; j++) {
      await waitTime(timeout); //1sg
      switch (messageMorseProcess[i][j]) {
        case ".":
          writer(messageMorseProcess[i][j]);
          await waitTime(timeout); //1sg
          break;
        case "-":
          writer(messageMorseProcess[i][j]);
          await waitTime(timeout * 3); //3sg
          break;
        case "*":
          await waitTime(timeout * 7); //7sg
          break;
      }
    }
  }
};

const writer = (symbolMorse: string) => {
  const symbolTransmitted = symbolMorse === "." ? 1 : 0;
  return console.log(symbolTransmitted);
};

function processMessage(message: string, callback) {
  callback(message);
}

processMessage("hello World!", transmitMessage);
