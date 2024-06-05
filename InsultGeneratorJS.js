// JavaScript source code

function insultSpreadsheet() {
    fetch("insults.csv");
}
insultSpreadsheet();

var insultColumnA = [];
insultColumnA.push("Here's");
insultColumnA.push("An");
insultColumnA.push("Insult");

var insultColumnB = [];
insultColumnB.push("Yet");
insultColumnB.push("Another");
insultColumnB.push("Insult");

var insultColumnC = [];
insultColumnC.push("One");
insultColumnC.push("Final");
insultColumnC.push("Offense");

var isInsultVisible = false;

function generalRandomElement(generalList) {
    return generalList[Math.floor(Math.random() * generalList.length)];
}

function generateInsult() {
    document.getElementById("insultButton").setAttribute("disabled", "true");

    if (isInsultVisible == true) {
        document.getElementById("insultText").classList.remove("show");
        isInsultVisible = false;
        setTimeout(generateInsult, 2500);
        return;
    }

    var insultA = generalRandomElement(insultColumnA); 
    var insultB = generalRandomElement(insultColumnB);
    var insultC = generalRandomElement(insultColumnC);
    var finalInsult = "You " + insultA + " " + insultB + " " + insultC;
    document.getElementById("insultText").innerHTML = finalInsult;
    document.getElementById("insultText").classList.add("show");
    isInsultVisible = true;

    setTimeout(() => {
        document.getElementById("insultButton").removeAttribute("disabled");
    }, 2500);
}