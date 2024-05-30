
/*
* File: app.js
* Author: lieszkofszki Norbert
* Copyright: 2024, lieszkofszki Norbert
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/Erenyss
* Licenc: GNU GPL
*/

function calcV(a: number, b: number, c: number): number {
    return (4 / 3) * Math.PI * a * b * c;
}

const form = document.getElementById('ellipsoidForm') as HTMLFormElement;
const resultElement = document.getElementById('result') as HTMLHeadingElement;

form.addEventListener('submit', function(event) {
    event.preventDefault();

const a = (document.getElementById('a') as HTMLInputElement).valueAsNumber;
const b = (document.getElementById('b') as HTMLInputElement).valueAsNumber;
const c = (document.getElementById('c') as HTMLInputElement).valueAsNumber;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultElement.textContent = "Kérem addjon meg egy számot!";
    return;
}

    const volume = calcV(a, b, c);

    resultElement.textContent = `Az Ellipszoid Térfogata: ${volume.toFixed(2)}`;
    console.log(`${volume}`);
});
