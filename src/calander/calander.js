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
        let libraryBackground = createDomElement({id: "library-background", appendTo: firstContainer});
        let libraryContentDiv = createDomElement({id: "library-content", appendTo: libraryBackground});
        return {
            background, 
            libraryContentDiv, returnToDash
        }
    })();
    return {STATICLAYOUT}
})();

const DYNAMICMONTHCONSTRUCTOR = (function(){
    let month = new Object();
    month[1] = createDomElement({appendTo: DOM.STATICLAYOUT.libraryContentDiv, class: 'week'});
    month[2] = createDomElement({appendTo: DOM.STATICLAYOUT.libraryContentDiv, class: 'week'});
    month[3] = createDomElement({appendTo: DOM.STATICLAYOUT.libraryContentDiv, class: 'week'});
    month[4] = createDomElement({appendTo: DOM.STATICLAYOUT.libraryContentDiv, class: 'week'});
    month[5] = createDomElement({appendTo: DOM.STATICLAYOUT.libraryContentDiv, class: 'week'});
    for(let i=0; i<5; i++){
        for(let n=0; n<7; n++){
            createDomElement({appendTo: month[i], class: 'day'});
        }
    }
})();

const CALANDERMODULE = (function(){
    const Year = function(adNumber){
        this.number = adNumber
        this.months = [new Month('January', 31), new Month('February', 28), new Month('March', 31), new Month('April', 30), new Month('May', 31), new Month('June', 30), new Month('July', 31), new Month('August', 31), new Month('September', 30), new Month('October', 31), new Month('November', 30), new Month('December', 31)]
    }
    const Month = function(name, days){
        this.name = name;
        this.days = new Array();
        while(days>0){
            this.days.push(new Day(days));
            days--;
        }
        this.days.reverse();
    }
    const Day = function(date){
        this.number = date;
        this.tasks = new Tasks();
        this.hours = 0;
    }
    const Tasks = function(){
        this.todo = new Array();
        this.completed = new Array();
    }
    let Years = [new Year(2020), new Year(2021), new Year(2022), new Year(2023), new Year(2024)]
    console.log(Years);
    return {Years};
})()
console.log(CALANDERMODULE)
const DATEMANAGER = (function(){
    const currentDate = new Date();
    let date = currentDate.getDate();
    console.log(date);
    let day = currentDate.getDay();
    //0 for Sunday, 1 for Monday, onwards.
    console.log(day);
    //Kind of a shitty way to do it because only support for until 2030 but of course this program isnt going to be used beyond that
    let yearLastNum = (currentDate.getFullYear() % 10);
    console.log(CALANDERMODULE.Years[(yearLastNum)].months[currentDate.getMonth()].days[(currentDate.getDate())-1])
    let month = currentDate.getMonth();
    console.log(month);
    //0 for January aka Month-1
    if(month==3){
        let monthLabel = createDomElement({id: 'month-label', text: "April", class: 'month-label', appendTo: DOM.STATICLAYOUT.libraryContentDiv})
    }
})()
console.log(Date());
export default {DOM};