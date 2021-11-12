console.log("************** DELIVERABLE 04 *********************");

//4. Read Books

//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
const map = new Map();

function isBookRead(
  books: { title: string; isRead: boolean }[],
  titleToSearch: string
) {
  const found = books.find(read => read.title === titleToSearch);

  if (!found) {
    return false;
  } else {
    return found.isRead;
  }
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
