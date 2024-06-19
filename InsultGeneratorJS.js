// JavaScript source code

function insultSpreadsheet() {
    var request = fetch("https://milansri09.github.io/ShakespeareanInsultWeb/insults.csv");
    request.then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
        var rows = data.split("\n");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cols = row.split(",");
            insultColumnA.push(cols[0]);
            insultColumnB.push(cols[1]);
            insultColumnC.push(cols[2]);
        }
    })
}
insultSpreadsheet();

var insultColumnA = [];
/* insultColumnA.push("Here's");
insultColumnA.push("An");
insultColumnA.push("Insult"); */

var insultColumnB = [];
/* insultColumnB.push("Yet");
insultColumnB.push("Another");
insultColumnB.push("Insult"); */

var insultColumnC = [];
/*insultColumnC.push("One");
insultColumnC.push("Final");
insultColumnC.push("Offense"); */

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
    var finalInsult = "Thou " + insultA + " " + insultB + " " + insultC + "!";
    document.getElementById("insultText").innerHTML = finalInsult;
    document.getElementById("insultText").classList.add("show");
    isInsultVisible = true;

    setTimeout(() => {
        document.getElementById("insultButton").removeAttribute("disabled");
    }, 2500);
}
