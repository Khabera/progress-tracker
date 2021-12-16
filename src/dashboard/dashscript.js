import "./dashstyle.css";

let background = document.createElement("div");
background.setAttribute('id','background');

let settingsButton = document.createElement('div');
settingsButton.setAttribute('id', 'settings-button');
settingsButton.textContent = "SETTINGS";
background.appendChild(settingsButton);

let container = document.createElement("div");
container.setAttribute('id', 'container')
background.appendChild(container);
container.style.overflow = "scroll";

let welcome = document.createElement("div");
welcome.setAttribute('id', 'welcome');
welcome.textContent = "Hello, Khabera";
container.appendChild(welcome);

let timeStats = document.createElement("div");
timeStats.setAttribute('id', 'timeStats');
container.appendChild(timeStats);

    let weeklyStats = document.createElement('div');
    weeklyStats.setAttribute('id', 'weekly-stats');
    timeStats.appendChild(weeklyStats);

    function addInterface(content){
        let temp = document.createElement(content.type || 'div');
        temp.classList.add(content.class);
        temp.textContent = content.textContent;
        content["appendTo"].appendChild(temp);
        return temp;
    }
        addInterface({class: "timer", appendTo: weeklyStats, textContent: "32 HRS 29 MINS"});
        addInterface({class: "timer-description", appendTo: weeklyStats, textContent: "WEEKLY   TOTAL"});
        addInterface({class: "timer", appendTo: weeklyStats, textContent: "7 HRS 30 MINS"});
        addInterface({class: "timer-description", appendTo: weeklyStats, textContent: "WEEKLY MAX"});


    let monthlyStats = document.createElement('div');
    monthlyStats.setAttribute('id', 'monthly-stats');
    timeStats.appendChild(monthlyStats);

        addInterface({class: "timer", appendTo: monthlyStats, textContent: "129 HRS 12 MINS"});
        addInterface({class: "timer-description", appendTo: monthlyStats, textContent: "MONTHLY TOTAL"});
        addInterface({class: "timer", appendTo: monthlyStats, textContent: "35 HRS 9 MINS"});
        addInterface({class: "timer-description", appendTo: monthlyStats, textContent: "WEEK MAX"});

let linksAndToday = document.createElement("div");
linksAndToday.setAttribute('id', 'linksAndToday');
container.appendChild(linksAndToday);

    let linkBlock = document.createElement('div');
    linkBlock.setAttribute('id', 'links')
    linksAndToday.appendChild(linkBlock);

        addInterface({class: "link-title", appendTo: linkBlock, textContent: "LINK TREE"});
        addInterface({class: "link-button", appendTo: linkBlock, textContent: "Project Gallery", type: 'button'});
        addInterface({class: "link-button", appendTo: linkBlock, textContent: "Calander", type: 'button'});
        addInterface({class: "link-button", appendTo: linkBlock, textContent: "Readings Library", type: 'button'});
    
    let todayInterface = document.createElement('div');
    todayInterface.setAttribute('id', 'today-interface');
    linksAndToday.appendChild(todayInterface);
    
        addInterface({class: "today-title", appendTo: todayInterface, textContent: "Work Today"});
        addInterface({class: "timer", appendTo: todayInterface, textContent: "0 HRS 0 MINS 0 SECS"});
        let buttonGrid = addInterface ({class: 'today-buttons', appendTo: todayInterface})
        addInterface({class: "button", appendTo: buttonGrid, textContent: "Start", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "Stop", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "See Tasks", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "???", type: "button"});
       
    export default background