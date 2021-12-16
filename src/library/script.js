//Going to run everything in here with IIFE, could be split?

const DOM = (function(){
    const libraryInterface = document.createElement('div').classList.add('interface');

})();

const bookLibrary = (function(){
    books = new Array();
})

const libraryStorage = (function(){
    function Book(title, category){
        this.title = title;
        //this.subtitle = subtitle;
        this.progress = 0;
    }
    Book.prototype = {
        changeTitle: function(title, subtitle){
            this.title = title;
            this.subtitle = subtitle;
            }, 
        updateProgress: function(progress){
            this.progress = progress;
        }
    }
    function addBook(title, category){
        let temp = new Book(title, category);
        storageJS.push(temp);
        return temp;
    }
    //looks through array, but if I just use the object itself, I can use the protype function
    function changeTitle(oldTitle, newTitle){
        let target = storageJS.find((book) => book.title == oldTitle)
        target.title = newTitle;
    }

    return{
        addBook,
        changeTitle
    }
})();
const jsonStorage = (function(){
    if(localStorage.length>0){
        const myStorage = JSON.parse(localStorage);
    }else{
        const myStorage = new Array();
    }
    function addBookToStorage(book){
        myStorage.push(book);
        localStorage = JSON.stringify(myStorage);
    }
    return addBookToStorage;
})();

// const thalamus = (function(){

// })();
let testCategoryArray = ["Current Reads", "Example 1", "Example 2", "Example 3", "Example 4"]
let testBookArray = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"]
export {libraryStorage, jsonStorage, testCategoryArray, testBookArray}


