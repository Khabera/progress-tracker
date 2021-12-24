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
    /*MAINLAYOUT 
      CREATES INITIAL LAYOUT OF LIBRARY PAGE
      RETURNING: ~BACKGROUND PAGE--TO WHICH EVERYTHING IS APPENDED
                 ~BOOKS CONTAINER & CATEGORIES CONTAINER
                 ~UI DIVS OCCURING ON INITIAL LAYOUT--ADD CATEGORY, REMOVE CATEGORY, RETURN TO DASH*/
    const MAINLAYOUT = (function(){
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
        return {
            background, 
            addCategoryButton, deleteCategoryButton, returnToDash,
            categoriesDiv, libraryContentDiv
        }
    })();
    const CATEGORIES = (function(){
        let categoriesDiv = MAINLAYOUT.categoriesDiv;
        
        return {

        }
    })();
    return {
        MAINLAYOUT
    }
})();



export default {DOM};