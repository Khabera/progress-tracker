import {libraryStorage, jsonStorage} from "./library/script";

let test = document.createElement('div');
let testBook = libraryStorage.addBook('My Year of Rest and Relaxation');
test.textContent = testBook.title;
//console.log(testBook.changeTitle('title'))
document.body.appendChild(test);
//libraryStorage.changeTitle('My Year of Rest and Relaxation', 'Changed Title');
test.textContent = testBook.title;