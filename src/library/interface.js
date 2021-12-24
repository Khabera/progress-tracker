import { testCategoryArray, testBookArray, categoryManager } from "./script.js";
import style from "./style.css"

let background = document.createElement("div");
background.setAttribute('class','background');

let container = document.createElement("div");
container.setAttribute('id', 'library-container')
background.appendChild(container);
//uses globally scopped CSS declarations? Wtf? Why?


//BASIC LAYOUT

function createDomElement(element){
    let temp = document.createElement(element.type || 'div');
    if(element.id){temp.setAttribute('id', element.id)};
    if(element.class){temp.classList.add(element.class)};
    if(element.object){temp.object = element.object};
    if(element.onclick){temp.onclick = element.onclick};
    temp.textContent = element.text;
    element['appendTo'].appendChild(temp);
    return temp;
}

//TOP BANNER
let banner = createDomElement({
    id: "banner",
    appendTo: container
})
//CATEGORY CONTAINER AND MANAGEMENT FUNCTIONS
    let categories = createDomElement({
        id: "categories",
        appendTo: banner
    })
        createDomElement({
            id: "category-title",
            text: "CATEGORIES",
            appendTo: categories
        });
        //ADD CATEGORY
        createDomElement({
            id: "add-category",
            text: "ADD NEW CATEGORY",
            appendTo: categories
            }).onclick = () => {
                let categoryPrompt = prompt("What category would you like to add?", "category");
                if(categoryPrompt == ''||null||undefined){
                    console.log("undefined category")
                    return;
                }
                console.log(categoryPrompt);
                let object = categoryManager.addCategory(categoryPrompt);
                addCategoryCard(categoryPrompt, object);
            }
        //DELETE CATEGORY
        createDomElement({
            id: "delete-category",
            text: "REMOVE CATEGORY",
            appendTo: categories
        }).onclick = () => {
            let categories = document.getElementsByClassName('category');
            //REMOVES DELETE OPTIONS FROM CATEGORIES ON INTERFACE
            let removeDelete = () => {
                console.log('remove function');
                [...categories].forEach((element) => {
                    element.classList.remove('deleting');
                    element.removeEventListener(('click'), deleteElement);
                })
            }
            //FUNCTION TO REMOVE ELEMENT FROM DOM AND SCRIPT ARRAY
            let deleteElement = (element) => {
                categorySelect.removeChild(element.target);
                categoryManager.removeCategory(element.target.object.categoryname);
                removeDelete();
            }
            //ADDS DELETE OPTIONS TO CATEGORIES ON INTERFACE
            [...categories].forEach((element) => {
                element.classList.add('deleting');
                element.addEventListener(('click'), deleteElement)
            });  
        }
    //CATEGORY CONTAINER
    let categorySelect = createDomElement({
        id: "category-select",
        appendTo: banner,
    })
        //ADDS BOOKS
        //ADD BOOK FUNCTION
        function addBook(bookCategory, book){
            let elly = createDomElement({
                class: 'book',
                appendTo: contentMargin,
                object: book
            });
                let title = createDomElement({
                    class: 'title',
                    appendTo: elly,
                    text: book.booktitle
                })
                let subtitle = createDomElement({
                    class: 'subtitle',
                    appendTo: elly,
                    text: book.subtitle
                })
                elly.bookAttatchment = book;
                //BUTTONS DIV
                let buttonsDiv = createDomElement({
                    class: 'book-buttons-div',
                    appendTo: elly
                })
                //DELETE BUTTON
                let deleteButton = createDomElement({
                    class: 'delete',
                    appendTo: buttonsDiv,
                    text: 'DELETE'
                })
                deleteButton.onclick = () => {
                    if(confirm('Are you sure you would like to delete?') == true){
                        contentMargin.removeChild(elly);
                        categoryManager.removeBook(bookCategory, book);
                    }    
                }
                //COMPLETE BUTTON
                let completeButton = createDomElement({
                    class: 'complete',
                    appendTo: buttonsDiv,
                    text: 'COMPLETE'
                })
                completeButton.onclick = () => {
                    book.completed = !book.completed;
                    if(book.completed){
                        title.style.color = 'green';
                    }else{
                        title.style.color = 'black';
                    }
                    
                }
                //CONTENTS MANAGER
                let expandContainer = createDomElement({
                    class: 'expand-button',
                    appendTo: elly,
                    text: '⤈⤈ TABLE OF CONTENTS ⤈⤈'
                })
                //TABLE OF CONTENTS EXPAND
                expandContainer.onclick = () => {
                    if(contentContainer.style.height == 'auto'){
                        contentContainer.style.height = '0';
                    }else{
                        contentContainer.style.height = 'auto';                    
                    }
                }
                let contentContainer = createDomElement({
                    class: 'booktablecontents',
                    appendTo: elly
                })
                   //LINE BELOW ADDS SINGLE CLICK FUNCTIONALITY TO EXPAND CONTAINER CLICK FUNCTION
                contentContainer.style.height = 'auto';                    
                //CONTENT ADDITIONS
                let addContent = (click) => {
                    let contentText = prompt('whats the text?');
                    if(!contentText){
                        return;
                    }
                    console.log(click.target)
                    //CHOOSE APPEND TARGET (SO APPENDS CORRECTLY FOR BOTH TOP AND CONTENT ADD BUTTONS)
                    //PREEETTTY FUCKED, FUNCTIONAL BUT I COULD PROBABLY CLEAN THIS UP
                    let appendTarget;
                    if(click.target.parentElement.parentElement.classList.contains('top-content')){
                        appendTarget = click.target.parentElement.parentElement.parentElement
                        console.log('true');
                    }else{
                        appendTarget = click.target.parentElement
                        console.log(click.target.parentElement);
                    }
                    let fullContainer = createDomElement({
                        class: 'content',
                        appendTo: appendTarget
                    })
                    let container = createDomElement({
                        class: 'top-content',
                        appendTo: fullContainer
                    })
                    let content = createDomElement({
                        class: 'toc-text',
                        appendTo: container,
                        text: contentText
                    })
                    content.completed = false;
                    content.onclick = () => {
                        if(content.completed == false){
                            content.completed = true;
                            content.style.textDecoration = 'line-through';
                            content.style.color = 'rgba(24, 190, 9, 0.5)';
                        }else{
                            content.completed = false;
                            content.style.textDecoration = '';
                            content.style.color = '';
                        }
                    }
                    //ADD AND DELETE TOC CONTENT
                    let adddeleteDiv = createDomElement({
                        class: 'adddelete',
                        appendTo: container
                    })
                    let subAdd = createDomElement({
                        class: 'booktoc-add',
                        appendTo: adddeleteDiv,
                        appendTarget: fullContainer,
                        text: 'ADD',
                        onclick: addContent
                    })
                    let deleteButton = createDomElement({
                        appendTo: adddeleteDiv,
                        class: 'booktoc-delete',
                        text: 'DELETE',
                        onclick: () => {
                            fullContainer.parentElement.removeChild(fullContainer);
                        }
                    })
                }
                    //TOP ADD BUTTON
                    let addButton = createDomElement({
                        class: 'content-add-button',
                        appendTo: contentContainer,
                        text: 'ADD'
                    });
                    addButton.onclick = addContent;
                
        }
        //END ADD BOOK FUNCTION
        //SWITCH CONTENT
        let contentSwitch = ((category) => {
            let bookCategory = category.target.object
            while(contentMargin.childElementCount > 0){
                contentMargin.removeChild(contentMargin.firstElementChild);
            }
            let bookContainer = createDomElement({
                class: 'book',
                appendTo: contentMargin,
                text: "ADD BOOK"
            });

            //ONCLICK ADD BOOK
            bookContainer.onclick = () => {
                let book = {
                    booktitle: prompt("what is the books title?", 'booktitle'),
                    subtitle: prompt("what is the books subtitle", 'subtitle'),
                    completed: false,
                    tableofcontents: [],
                }
                if(book.booktitle){
                    categoryManager.addBook(bookCategory, book)
                    addBook(bookCategory, book);
                };

               // console.log(categoryManager.addBook(category, booktitle));
            }

            //GET BOOKS ON LOAD
            if(typeof bookCategory.books !== 'undefined'){
                bookCategory.books.forEach((book) => {
                addBook(bookCategory, book)
                })
            }
        }); 
        categoryManager.categories.forEach((category) => {
            let temp = createDomElement({
                class: "category",
                appendTo: categorySelect,
                text: category.categoryname,
                object: category,
                onclick: contentSwitch
            //ON CLICK FOR EACH CATEGORY TO CHANGE BOOKS
            })
        });
        //ADD BOOKS -- END
        //CATEGORY CARD
        function addCategoryCard(textcontent, object){
            createDomElement({
                class: "category",
                appendTo: categorySelect,
                text: textcontent,
                object: object,
                onclick: contentSwitch
            })
        }
    //RETURN TO DASHBOARD
    let returnToDash = createDomElement({
        id: "return-to-dash",
        appendTo: banner,
        text: "RETURN TO DASHBOARD"
    })    
//END TOP BANNER

//CONTENT/BOOKS
//CONTENT CONTAINERS
let content = createDomElement({
    id: "content",
    appendTo: container
})
    let contentMargin = createDomElement({
        id: "inner-content",
        appendTo: content
    })
    //ADD BOOKS ON LOAD
    testBookArray.forEach((book) => {
        createDomElement({
            class: 'book',
            appendTo: contentMargin,
            text: book
        })
})
    
//CATEGORY SELECT DRAG -- CODE BY PHOUC NG OF HTMLDOM.DEV
let pos = { top: 0, left: 0, x: 0, y: 0 };
const mouseDownHandler = function (e) {
    categorySelect.style.cursor = 'grabbing';
    categorySelect.style.userSelect = 'none';
    pos = {
        left: categorySelect.scrollLeft,
        x: e.clientX,
    };

    categorySelect.addEventListener('mousemove', mouseMoveHandler);
    categorySelect.addEventListener('mouseup', mouseUpHandler);
};
const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    categorySelect.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
    categorySelect.removeEventListener('mousemove', mouseMoveHandler);
    categorySelect.removeEventListener('mouseup', mouseUpHandler);
    categorySelect.style.cursor = 'pointer';
    categorySelect.style.removeProperty('user-select');
};
categorySelect.onmousedown = mouseDownHandler;
categorySelect.onmouseleave = mouseUpHandler;
categorySelect.onmouseup = mouseUpHandler;
//END CATEGORY DRAG BY PHOUC NG

export default {background, returnToDash};