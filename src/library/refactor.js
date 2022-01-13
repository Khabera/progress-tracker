import { testCategoryArray, testBookArray, CATEGORYMANAGER } from "./script.js";
import style from "./style.css"
import addButton from "./add-vector.png"

//STANDARD FUNCTION TO CREATE DOM ELEMENTS
//REPLACE "createDomElement" with cDM
function createDomElement(element){
    let temp = document.createElement(element.type || 'div');
    if(element.id){temp.setAttribute('id', element.id)};
    if(element.class){temp.classList.add(element.class)};
    if(element.object){temp.object = element.object};
    if(element.onclick){temp.onclick = element.onclick};
    if(element.text)temp.textContent = element.text;
    if(element.appendTo){element['appendTo'].appendChild(temp)};
    return temp;
}

//DOM MODULE CONTROLS 
const DOM = (function(){
    /*STATICLAYOUT 
      CREATES INITIAL LAYOUT OF LIBRARY PAGE
      RETURNING: ~BACKGROUND PAGE--TO WHICH EVERYTHING IS APPENDED
                 ~BOOKS CONTAINER & CATEGORIES CONTAINER
                 ~UI DIVS OCCURING ON INITIAL LAYOUT--ADD CATEGORY, REMOVE CATEGORY, RETURN TO DASH*/
    const STATICLAYOUT = (function(){
        let background = createDomElement({class: 'background'});
        let firstContainer = createDomElement({id: 'library-container', appendTo: background});
        let topBanner = createDomElement({id: 'banner', appendTo: firstContainer});
            let leftBannerDiv = createDomElement({id: 'left-banner-div', appendTo: topBanner});
                let categoryTitle = createDomElement({id: "category-title", text: "CATEGORIES", appendTo: leftBannerDiv});
                let addCategoryButton = createDomElement({id: "add-category", text: "ADD NEW CATEGORY", appendTo: leftBannerDiv});
                let deleteCategoryButton = createDomElement({id: "delete-category", text: "REMOVE CATEGORY", appendTo: leftBannerDiv});
            let categoriesDiv = createDomElement({id: "category-select", appendTo: topBanner});
            let returnToDash = createDomElement({id: "return-to-dash", appendTo: topBanner, text: "RETURN TO DASHBOARD"});
        let libraryBackground = createDomElement({id: "library-background", appendTo: firstContainer})
        let libraryContentDiv = createDomElement({id: "library-content", appendTo: libraryBackground});
            let addBookButton = createDomElement({class: 'book', id: 'add-book', appendTo: libraryContentDiv, text: "ADD BOOK"})
            let addPNG = createDomElement({appendTo: addBookButton, class: 'add-png', type: 'img'});
            addPNG.src = addButton
        return {
            background, 
            addCategoryButton, deleteCategoryButton, returnToDash, addBookButton,
            categoriesDiv, libraryContentDiv
        }
    })();
    //CATEGORY CONTAINER MODULE -- INCLUDES FUNCTIONS TO ADD A CATEGORY CARD OR REMOVE CATEGORY CARD
    const CATEGORIES = (function(){
        let categoriesDiv = STATICLAYOUT.categoriesDiv;
        function addCategoryCard(categoryObject){
            //how do I do onclick for this?
            let card = createDomElement({class: "category", appendTo: categoriesDiv, text: categoryObject.categoryname, object: categoryObject})
            let trashCan = createDomElement({class: 'trash', appendTo: card, text: 'D'})
            return{card, trashCan, categoryObject}
        }
        function removeCategoryCard(card){
            card.parentElement.removeChild(card)
        }
        //Selected Category Functionality -- Primarily for Add Book Button
        let selectedCategory;
        function setCurrentCategory(categoryDiv){selectedCategory = categoryDiv}
        function getCurrentCategoryObject(){return(selectedCategory.categoryObject)}
            //should be getting Object from UI distributor
            //let object = categoryManager.addCategory(categoryPrompt);
            //addCategoryCard(categoryPrompt, object);         
        return {
            addCategoryCard, removeCategoryCard, getCurrentCategoryObject, setCurrentCategory
        }
    })();
    //LIBRARY CONTAINER MODULES
    const LIBRARY = (function(){

        let libraryContentDiv = STATICLAYOUT.libraryContentDiv;

        function addBookCard(book){
            let bookCard = createDomElement({class: 'book', appendTo: libraryContentDiv, object: book});
            let title = createDomElement({class: 'title', appendTo: bookCard, text: book.title});
            let subtitle = createDomElement({class: 'subtitle', appendTo: bookCard, text: book.subtitle});
            let buttonsDiv = createDomElement({class: 'book-buttons-div', appendTo: bookCard});
            let deleteButton = createDomElement({class: 'delete', appendTo: buttonsDiv, text: 'DELETE'});
            let completeButton = createDomElement({class: 'complete', appendTo: buttonsDiv, text: 'COMPLETE'});
            let expandContainer = createDomElement({class: 'expand-button', appendTo: bookCard, text: '⤈⤈ TABLE OF CONTENTS ⤈⤈'});
            let tocContainer = createDomElement({class: 'booktablecontents', appendTo: bookCard});
            bookCard.toc = tocContainer
            let addTOCButton = createDomElement({class: 'content-add-button', appendTo: tocContainer, text: 'ADD'});
            tocContainer.book = book;
            addTOCButton.onclick = () => INTERFACE.TOCMODULE.tableOfContentsFactory(tocContainer);
            let category = CATEGORIES.getCurrentCategoryObject();

            return {
                bookCard, book, category,
                deleteButton, completeButton, expandContainer, addTOCButton,
                tocContainer
            }
        }

        function addTOCDiv(appendTarget, contentText){
            //appendTarget||tocContainer allows add button on top banner to be operable
            let fullContainer = createDomElement({class: 'content', appendTo: appendTarget})
            let container = createDomElement({class: 'top-content', appendTo: fullContainer})
            let content = createDomElement({class: 'toc-text', appendTo: container, text: contentText});
            content.completed = false;
            let adddeleteDiv = createDomElement({class: 'adddelete', appendTo: container});
            let subAdd = createDomElement({class: 'booktoc-add', appendTo: adddeleteDiv, appendTarget: fullContainer, text: 'ADD'});
            let deleteButton = createDomElement({appendTo: adddeleteDiv,class: 'booktoc-delete', text: 'DELETE'});
            appendTarget.appendChild(fullContainer);
            return{
                content, subAdd, deleteButton, fullContainer
            }
        }

        //Clears the visual book cards leaving the Add Book Card
        function clearLibrary(){
            while(libraryContentDiv.lastElementChild != STATICLAYOUT.addBookButton){
                libraryContentDiv.removeChild(libraryContentDiv.lastElementChild);
            }
        }
        //Adds book cards for Relevant category
        function populateCategory(categoryArray){
            console.log(categoryArray);
            function completeVisual(tocDiv){
                    tocDiv.content.style.text0Decoration = 'line-through';
                    tocDiv.content.style.color = 'rgba(24, 190, 9, 0.5)';
            }
            categoryArray.forEach((book) => {
                console.log(book);
                let card = addBookCard(book)
                INTERFACE.attatchBookCardInterface(card);
                function childrenLoop(parent, dom){
                    console.log(parent);
                    console.log(dom);
                    console.log("childLoop")
                    parent.children.forEach((child)=>{
                        let temp = addTOCDiv(dom.fullContainer, child.content);
                        if(child.completed==true){completeVisual(temp)}
                        temp.fullContainer.tocReference = child;
                        INTERFACE.TOCMODULE.applyTOCFunctionality(temp, child, parent, book)
                        if(child.children.length>0){
                            childrenLoop(child, temp);
                        }
                        })
                }
                if(book.toc.length>0){
                    book.toc.forEach((toc)=> {
                        let temp = addTOCDiv(card.tocContainer, toc.content);
                        if(toc.completed==true){completeVisual(temp)}
                        temp.fullContainer.tocReference = toc;
                        let children = toc.children
                        if(toc.children.length>0){
                            toc.children.forEach((child)=>{
                                let temp2 = addTOCDiv(temp.fullContainer, child.content);
                                if(child.completed==true){completeVisual(temp2)}
                                temp2.fullContainer.tocReference = child
                                INTERFACE.TOCMODULE.applyTOCFunctionality(temp2, child, toc, book)
                                if(child.children.length>0){
                                    childrenLoop(child, temp2);
                                }
                            })
                        }
                        INTERFACE.TOCMODULE.applyTOCFunctionality(temp, toc, false, book);
                        //while(children.length>0){
                            // children.forEach((toc) => {
                            //     addTOCDiv()
                            // })
                        })
                }
            })
        }

        return{ addBookCard, addTOCDiv, clearLibrary, populateCategory }
    })();

    return { STATICLAYOUT, CATEGORIES, LIBRARY }
})();

const INTERFACE = (function(){
    // ------- MAIN LAYOUT -------- //
    //addCategoryButton, deleteCategoryButton, returnToDash, addBookButton,

    //Add Category Button
    DOM.STATICLAYOUT.addCategoryButton.onclick = () => {
        let name = prompt('What is the name of the category you would like to add?', 'Category');
        if((name == null) || (name == '')){return}
        //Sends name to script, script returns an object
        let categoryObject = CATEGORYMANAGER.addCategory(name);
        //Send object to DOM manager, returns the object with the card and delete button
        let domObject = DOM.CATEGORIES.addCategoryCard(categoryObject);
        assignCategoryCardInterface(domObject);
    }

    //Defines Catogory Card Onclick and Remove Button functionality
    const assignCategoryCardInterface = (domObject) => {
        domObject.card.onclick = () => onclickSwitchContent(domObject);
        domObject.trashCan.onclick = (event) => {
            event.cancelBubble = true;
            if(confirm("Are you sure you would like to delete this category?")){
                DOM.CATEGORIES.removeCategoryCard(domObject.card);
                //IF the currently selected card is removed, set it to transition to the next card
                CATEGORYMANAGER.removeCategory(domObject.categoryObject);
            }
        }    
    }

    //Switch Library Content -- Defined Onclick During CategoryCard
    const onclickSwitchContent = (categoryDomObject) => {
        let category = categoryDomObject.categoryObject
        DOM.CATEGORIES.setCurrentCategory(categoryDomObject);
        DOM.LIBRARY.clearLibrary();
        DOM.LIBRARY.populateCategory(category.books);
    }

    //Manages Table of Contents of Book Cards
    //Defined onclick above in DOM controller (but I probaly should move that to the ADD book button in this interface controller);
    const TOCMODULE = (function(){
        //Parent should be 'none' or a 'TOC object reference'
        const promptName = (parent) => {
            let name = prompt('What is the name of the content you would like to add?');
            if(name == null|| name == ''){return}
            else{return name}
        }
        const tableOfContentsFactory = (parent, book) => {
            console.log(parent);
            console.log(book);
            let name = promptName();
            let domObject = DOM.LIBRARY.addTOCDiv(parent, name);
            //below suggests continually appending a reference to the book object to the original book toc container and to each successive toc content, which doesnt seem ideal, but Im not really sure how else to do it without reworking how the book cards are created. But it got kinda fucked up when I tried to load the toc cards on load, so I passed a book object too. pretty much a scuffed bandaid, there should be a better way to keep track of the book object
            let bookObject = (parent.book||book);
            let parentTocReference = parent.tocReference
            let tocReference = CATEGORYMANAGER.updateTOC(bookObject, name, parentTocReference);
            domObject.fullContainer.tocReference = tocReference;
            applyTOCFunctionality(domObject, tocReference, parentTocReference, bookObject)
        }
        function applyTOCFunctionality(domObject, tocReference, parentTocReference, bookObject){
            domObject.subAdd.onclick = () => TOCMODULE.tableOfContentsFactory(domObject.fullContainer, bookObject);
            //delete button needs to update JSON as well
            domObject.deleteButton.onclick = () => {
                console.log(parentTocReference);
                removeTOC(domObject, tocReference, (parentTocReference.children||bookObject.toc));
            }
            domObject.content.onclick = () => tocMarkComplete(domObject, tocReference);
        }
        const tocMarkComplete = (tocDiv, tocObjectReference) => {
            if(tocObjectReference.completed == false){
                tocObjectReference.completed = true;
                tocDiv.content.style.text0Decoration = 'line-through';
                tocDiv.content.style.color = 'rgba(24, 190, 9, 0.5)';
                CATEGORYMANAGER.toggleTocComplete(tocObjectReference, true);
            }else{
                tocObjectReference.completed = false;
                tocDiv.content.style.textDecoration = '';
                tocDiv.content.style.color = '';
                CATEGORYMANAGER.toggleTocComplete(tocObjectReference, false);
            }
        }
        const removeTOC = (domObject, tocReference, parent) => {
            domObject.fullContainer.remove();
            CATEGORYMANAGER.removeTOCComponent(tocReference, parent);
        }
        return{
            tableOfContentsFactory, applyTOCFunctionality
        }
    })();
    const tocMarkComplete = (tocDiv, tocObjectReference) => {
        if(tocDiv.content.completed == false){
            tocDiv.content.completed = true;
            tocDiv.content.style.text0Decoration = 'line-through';
            tocDiv.content.style.color = 'rgba(24, 190, 9, 0.5)';
            CATEGORYMANAGER.toggleTocComplete(tocObjectReference, true);
        }else{
            tocDiv.content.completed = false;
            tocDiv.content.style.textDecoration = '';
            tocDiv.content.style.color = '';
            CATEGORYMANAGER.toggleTocComplete(tocObjectReference, false);
        }
    }
    function updateTOCJSON(category, book){
        CATEGORYMANAGER.updateTOC(catergory, book, content, parents);
    }

    //Library Add Book Button
    DOM.STATICLAYOUT.addBookButton.onclick = () => {
        let category = DOM.CATEGORIES.getCurrentCategoryObject()
        let title = prompt("What is the name of the book?");
        let subtitle = prompt("Is there a subtitle?");
        let book = CATEGORYMANAGER.addBook(category, {title, subtitle});
        let card = DOM.LIBRARY.addBookCard(book);
        attatchBookCardInterface(card);
    }

    //Book Card Interface
    function attatchBookCardInterface(card){
        card.deleteButton.onclick = () => removeBookCard(card);
        card.completeButton.onclick = () => completeBookCard(card);
        card.expandContainer.onclick = () => expandContainer(card.tocContainer)
    }
    function removeBookCard(card){
        card.bookCard.remove();
        CATEGORYMANAGER.removeBook(card.category, card.book)
    }
    function completeBookCard(card){
        if(card.book.completed == false||card.book.completed == undefined){
            card.book.completed = true;
            card.bookCard.style.backgroundColor = 'green';
        }else{
            card.book.completed = false;
            card.bookCard.style.backgroundColor = '';
        }
    }
    function expandContainer(tocContainer){
        if(tocContainer.style.height == 'auto'||tocContainer.style.height == ''){
            tocContainer.style.height = '0';
        }else{
            tocContainer.style.height = 'auto';                    
        }
    }

    return{
        assignCategoryCardInterface, attatchBookCardInterface, TOCMODULE
    }
})();

const INITIALIZEPAGE = (function(){
    //Initializes Categories
    if(CATEGORYMANAGER.categories.length>0){
        let firstCategoryObject = CATEGORYMANAGER.categories[0];
        let firstCategoryDiv;
        CATEGORYMANAGER.categories.forEach((categoryObject, index) => {
            let card = DOM.CATEGORIES.addCategoryCard(categoryObject);
            INTERFACE.assignCategoryCardInterface(card);
            if(index == 0){
                firstCategoryDiv = card;
            }
        });
        //Set Content to that of First Category
        DOM.CATEGORIES.setCurrentCategory(firstCategoryDiv);
        DOM.LIBRARY.populateCategory(firstCategoryObject.books);
    }
})()

export default {DOM};