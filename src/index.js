import dashboard from "./dashboard/dashscript.js";
import libraryUI from "./library/interface";

document.body.style.margin = 0;

document.body.appendChild(libraryUI.background);
libraryUI.returnToDash.onclick = () => {
    document.body.removeChild(libraryUI.background);
    document.body.appendChild(dashboard.background)
}

dashboard.libraryButton.onclick = () => {
    document.body.removeChild(dashboard.background);
    document.body.appendChild(libraryUI.background)
}