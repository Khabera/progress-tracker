import './calander.css';
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
        let firstContainer = createDomElement({id: 'calander-container', appendTo: background});
        let topBanner = createDomElement({id: 'calander-banner', appendTo: firstContainer});
            let calanderTitle = createDomElement({id: 'calander-title', text: 'CALANDER', appendTo: topBanner});
            let buttonSet = createDomElement({id: 'button-group', appendTo: topBanner})
            let switchView = createDomElement({id: 'calander-view-switch', text: 'SWITCH VIEWS',class: 'calander-banner-button', appendTo: buttonSet})
            let setFocus = createDomElement({id: 'set-focus-button', text: 'SET FOCUS', class: 'calander-banner-button', appendTo: buttonSet});
            let returnToDash = createDomElement({id: 'calander-return-to-dash', class: 'calander-banner-button', text: 'RETURN TO DASH', appendTo: buttonSet})
        let libraryBackground = createDomElement({id: "library-background", appendTo: firstContainer})
        let libraryContentDiv = createDomElement({id: "library-content", appendTo: libraryBackground});
        return {
            background, 
            libraryContentDiv, returnToDash
        }
    })();
    return {STATICLAYOUT}
})();

export default {DOM};