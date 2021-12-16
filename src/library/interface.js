import { testCategoryArray, testBookArray } from "./script.js";
import style from "./style.css"

let background = document.createElement("div");
background.setAttribute('class','background');

let container = document.createElement("div");
container.setAttribute('id', 'library-container')
background.appendChild(container);

//uses globally scopped CSS declarations? Wtf? Why?
function createDomElement(element){
    let temp = document.createElement(element.type || 'div');
    if(element.id){temp.setAttribute('id', element.id)};
    if(element.class){temp.classList.add(element.class)};
    temp.textContent = element.text;
    element['appendTo'].appendChild(temp);
    return temp;
}

let banner = createDomElement({
    id: "banner",
    appendTo: container
})
    let categories = createDomElement({
        id: "categories",
        appendTo: banner
    })
        createDomElement({
            id: "category-title",
            text: "CATEGORIES",
            appendTo: categories
        });
        createDomElement({
            id: "add-category",
            text: "Add New Category",
            appendTo: categories
        });
    let categorySelect = createDomElement({
        id: "category-select",
        appendTo: banner,
    })
        //pull categories from script and display, and this one is only text, but the real one should have an object with an associated operation
        testCategoryArray.forEach((test) => {
            createDomElement({
                class: "category",
                appendTo: categorySelect,
                text: test
            })
        })
    createDomElement({
        id: "return-to-dash",
        appendTo: banner,
        text: "Return To Dashboard"
    })    
let content = createDomElement({
    id: "content",
    appendTo: container
})
    let contentMargin = createDomElement({
        id: "inner-content",
        appendTo: content
    })
    testBookArray.forEach((book) => {
        createDomElement({
            class: 'book',
            appendTo: contentMargin,
            text: book
        })
    })





export default background;