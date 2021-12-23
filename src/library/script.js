//Going to run everything in here with IIFE, could be split?
const myStorage = window.localStorage;

const bookLibrary = (function(){
    books = new Array();
})

const libraryStorage = (function(){
    function Book(title, category, subtitle){
        this.title = title;
        this.subtitle = subtitle;
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
// const jsonStorage = (function(){
//     if(localStorage.length>0){
//         myStorage = JSON.parse(localStorage);
//     }else{
//         const myStorage = new Array();
//     }
//     function addBookToStorage(book){
//         myStorage.push(book);
//         localStorage = JSON.stringify(myStorage);
//     }
//     return addBookToStorage;
// })();

const categoryManager = (function(){
    function Category(categoryname){
        this.categoryname = categoryname,
        this.books = []
        //I KNOW THIS IS REALLY FUCKING LAZY, but fuck it, for now...
    }
    function updateJSON(){
        myStorage.categories = JSON.stringify(categories);
    }
    function addBook(category, book){
        category.books.push(book)
        updateJSON();
    }
    function removeBook(bookCategory, book){
        console.log(bookCategory.books);
        let index = bookCategory.books.findIndex((item) => item == book);
        bookCategory.books.splice(index, 1);
        updateJSON();
    }
    console.log(typeof myStorage.categories === 'undefined')
    let categories = [];
    //possible naming issue with category being both the local name and class name?
    categories.forEach((category) => console.log(category.protoype));
    if(typeof myStorage.categories !== 'undefined'){
        categories = JSON.parse(myStorage.categories);
        //categories.forEach((category) => Object.setPrototypeOf(category, Category))
    }
    console.log(categories);
    function addCategory(categoryname){
        categories.push(new Category(categoryname));
        myStorage.categories = JSON.stringify(categories);   
    }
    function removeCategory(element){
        let index = categories.findIndex((item) => item.categoryname == element);
        categories.splice(index, 1);
        myStorage.categories = JSON.stringify(categories);
    }
    return {addCategory, categories, removeCategory, addBook, removeBook}
})();
// const thalamus = (function(){

// })();
let testCategoryArray = ["Current Reads", "Example 1", "Example 2", "Example 3", "Example 4"]
let testBookArray = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"]
export {libraryStorage, myStorage, testCategoryArray, testBookArray, categoryManager}


