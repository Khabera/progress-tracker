import { testCategoryArray, testBookArray, categoryManager } from "./script.js";
import style from "./style.css"

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
            let addBookButton = createDomElement({class: 'book', appendTo: libraryContentDiv, text: "ADD BOOK"})
        return {
            background, 
            addCategoryButton, deleteCategoryButton, returnToDash, addBookButton,
            categoriesDiv, libraryContentDiv
        }
    })();
    //CATEGORY CONTAINER MODULE -- INCLUDES FUNCTIONS TO ADD A CATEGORY CARD OR REMOVE CATEGORY CARD
    const CATEGORIES = (function(){
        let categoriesDiv = STATICLAYOUT.categoriesDiv;
        function addCategoryCard(){
            //how do I do onclick for this?
            let card = createDomElement({class: "category", appendTo: categoriesDiv, text: textcontent, object: object, onclick: contentSwitch})
            let trashCan = createDomElement({class: 'trash', appendTo: card, text: 'D'})
        }
            //should be getting Object from UI distributor
            //let object = categoryManager.addCategory(categoryPrompt);
            //addCategoryCard(categoryPrompt, object);         
        return {
            addCategoryCard
        }
    })();
    //LIBRARY CONTAINER MODULES
    const LIBRARY = (function(){
        let libraryContentDiv = STATICLAYOUT.libraryContentDiv;
        function addBookCard(book){
            let bookCard = createDomElement({class: 'book', appendTo: contentMargin, object: book});
            let title = createDomElement({class: 'title', appendTo: bookCard, text: book.booktitle});
            let subtitle = createDomElement({class: 'subtitle', appendTo: bookCard, text: book.subtitle});
            let buttonsDiv = createDomElement({class: 'book-buttons-div', appendTo: bookCard});
            let deleteButton = createDomElement({class: 'delete', appendTo: buttonsDiv, text: 'DELETE'});
            let completeButton = createDomElement({class: 'complete', appendTo: buttonsDiv, text: 'COMPLETE'});
            let expandContainer = createDomElement({class: 'expand-button', appendTo: bookCard, text: '⤈⤈ TABLE OF CONTENTS ⤈⤈'});
            let tocContainer = createDomElement({class: 'booktablecontents', appendTo: bookCard});
            bookCard.toc = tocContainer
            let addTOCButton = createDomElement({class: 'content-add-button', appendTo: tocContainer, text: 'ADD'});
            addTOCButton.appendich = tocContainer //Where to append if clicked
            return {
                bookCard,
                deleteButton, completeButton, expandContainer, addTOCButton
            }
        }
        function addTOC(appendTarget, contentText){
            let fullContainer = createDomElement({class: 'content', appendTo: appendTarget})
            let container = createDomElement({class: 'top-content', appendTo: fullContainer})
            let content = createDomElement({class: 'toc-text', appendTo: container, text: contentText});
            let adddeleteDiv = createDomElement({class: 'adddelete', appendTo: container});
            let subAdd = createDomElement({class: 'booktoc-add', appendTo: adddeleteDiv, appendTarget: fullContainer, text: 'ADD'});
            subAdd.appendich = content; //Where to append if clicked
            let deleteButton = createDomElement({appendTo: adddeleteDiv,class: 'booktoc-delete', text: 'DELETE'});
            return{
                content, subAdd, deleteButton
            }
        }
        function clearLibrary(){
            while(libraryContentDiv.firstElementChild){
                libraryContentDiv.removeChild(libarryContentDiv.firestElementChild);
            }
        }
        function populateCategory(categoryArray){
            categoryArray.forEach((book) => {
                addBookCard(book);
            })
        }
        return{
            addBookCard, addToc, clearLibrary, populateCategory
        }
    })();
    return {
        STATICLAYOUT, CATEGORIES, LIBRARY
    }
})();



export default {DOM};