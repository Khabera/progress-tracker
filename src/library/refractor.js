import { testCategoryArray, testBookArray, categoryManager } from "./script.js";
import style from "./style.css"

//STANDARD FUNCTION TO CREATE DOM ELEMENTS
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
        let categories = createDomElement({id: ''})

        return {
            background
        }
    })();
    return {
        MAINLAYOUT
    }
})();



export default {DOM};