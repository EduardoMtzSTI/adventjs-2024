import { prepareGiftsTest } from "./prepareGifts.js";
import { createFrameTest } from "./createFrame.js";
import { organizarInventoryTest } from "./organizeInventory.js";


window.onload = () => {
    const btnRun = document.getElementById("btn-run");
    btnRun.addEventListener("click", () => main());
};

var output = "";
const board = document.getElementById("board");

function main() {
    clear();
    // #1
    //prepareGiftsTest();
    // #2
    //createFrameTest();
    // #3
    organizarInventoryTest();
}

export const printTest = (evaluar, result, time) => {

    const inTitle = document.createElement("p");
    inTitle.className = "title in";
    inTitle.innerText = "IN"

    const codeIN = document.createElement("p");
    codeIN.className = "code";
    codeIN.innerText = evaluar;

    const outTitle = document.createElement("p");
    outTitle.className = "title out";
    outTitle.innerText = "OUT | Time:" + time;

    const codeOUT = document.createElement("p");
    codeOUT.className = "code";
    codeOUT.innerText = result;

    const testContainer = document.createElement("section");
    testContainer.className = "test";

    testContainer.appendChild(inTitle);
    testContainer.appendChild(codeIN);
    testContainer.appendChild(outTitle);
    testContainer.appendChild(codeOUT);

    board.appendChild(testContainer);
}

const clear = () => {
    output = "";
    board.innerHTML = "";
}

