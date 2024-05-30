/*
* File: app.js
* Author: lieszkofszki Norbert
* Copyright: 2024, lieszkofszki Norbert
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/Erenyss
* Licenc: GNU GPL
*/
function calcV(a, b, c) {
    return (4 / 3) * Math.PI * a * b * c;
}
var form = document.getElementById('ellipsoidForm');
var resultElement = document.getElementById('result');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var a = document.getElementById('a').valueAsNumber;
    var b = document.getElementById('b').valueAsNumber;
    var c = document.getElementById('c').valueAsNumber;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = "Kérem addjon meg egy számot!";
        return;
    }
    var volume = calcV(a, b, c);
    resultElement.textContent = "Az Ellipszoid T\u00E9rfogata: ".concat(volume.toFixed(2));
    console.log("".concat(volume));
});
