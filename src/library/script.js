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
        this.toc = [];
        this.category = category;
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

const CATEGORYMANAGER = (function(){
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
        book.categoryname = category.categoryname;
        book.toc = [];
        updateJSON();
        return book;
    }
    function updateTOC(book, content, parent){
        let tocContent = {
            content: content,
            children: [],
            completed: false
        }
        //Either pushes to entire book toc array, or a desired parent within the toc array, allowing nested functionality
        if(parent){
            console.log("categorymanager>updateTOC>if(parent)")
            parent.children.push(tocContent);
        }else{
            console.log("categorymanager>updateTOC>else")
            book.toc.push(tocContent);
        }
        updateJSON();
        return tocContent;
    }
    function removeTOCComponent(tocComponent, parent){
        console.log(tocComponent);
        console.log(parent);
        let index = parent.findIndex((item) => item == tocComponent);
        parent.splice(index, 1);
        updateJSON();
    }
    function toggleTocComplete(tocReference, boolean){
        tocReference.completed = boolean;
        console.log(tocReference);
        updateJSON();
    }
    function removeBook(bookCategory, book){
        let index = bookCategory.books.findIndex((item) => item == book);
        bookCategory.books.splice(index, 1);
        updateJSON();
    }
    let categories = [];
    //possible naming issue with category being both the local name and class name?
    categories.forEach((category) => console.log(category.protoype));
    if(typeof myStorage.categories !== 'undefined'){
        categories = JSON.parse(myStorage.categories);
        //categories.forEach((category) => Object.setPrototypeOf(category, Category))
    }
    function addCategory(categoryname){
        let temp = new Category(categoryname);
        categories.push(temp);
        myStorage.categories = JSON.stringify(categories);  
        return temp;
    }
    function removeCategory(categoryObject){
        let index = categories.findIndex((item) => item.categoryname == categoryObject.categoryname);
        categories.splice(index, 1);
        myStorage.categories = JSON.stringify(categories);
    }
    //I THINK THERE MIGHT BE A PROBLEM WITH THE "CATEGORIES" EXPORT, IN THE WHEN ONE IS ADDED IT WONT BE PRESENT IN CATEGORIES, UNTIL THE WEBPAGE IS REFRESHED, AND WHAT IS PRESENT IN JSON IS EXPORTED AS "categories"
    return {addCategory, categories, removeCategory, addBook, removeBook, updateTOC, toggleTocComplete, removeTOCComponent}
})();
// const thalamus = (function(){

// })();
let testCategoryArray = ["Current Reads", "Example 1", "Example 2", "Example 3", "Example 4"]
let testBookArray = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"]
export {libraryStorage, myStorage, testCategoryArray, testBookArray, CATEGORYMANAGER}


