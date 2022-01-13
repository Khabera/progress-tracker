import dashboard from "./dashboard/dashscript.js";
import libraryUI from "./library/refactor.js";

document.body.style.margin = 0;
console.log(libraryUI)

document.body.appendChild(libraryUI.DOM.STATICLAYOUT.background);
libraryUI.DOM.STATICLAYOUT.returnToDash.onclick = () => {
    document.body.removeChild(libraryUI.DOM.STATICLAYOUT.background);
    document.body.appendChild(dashboard.background)
}

dashboard.libraryButton.onclick = () => {
    document.body.removeChild(dashboard.background);
    document.body.appendChild(libraryUI.DOM.STATICLAYOUT.background)
}