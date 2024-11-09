const clockCases = document.querySelectorAll('.clockCase');
const hourSpan = document.querySelector('span#hour .spanContent');
const minuteSpan = document.querySelector('span#minute .spanContent');
const secondSpan = document.querySelector('span#seconde .spanContent');

// Variables pour stocker les valeurs précédentes
let previousHours = '';
let previousMinutes = '';
let previousSeconds = '';

// Tracage des lignes
clockCases.forEach((caseElement) => {
    let i = 2; 
    do {
        const div = document.createElement('div');
        div.classList.add('caseLine');
        div.style.top = `${7 * i}px`;
        div.style.left = `${7 * i}px`;
        caseElement.appendChild(div);
        i++;
    } while (i < 37);
});

// Fonction générale pour définir un élément avec animation
const setElement = (value, spanElement) => {
    spanElement.innerHTML = '';
    const count = parseInt(value);

    const div = document.createElement('div');
    div.textContent = count < 10 ? '0' + count : count;
    div.style.transform = `translateY(100%)`; // Position initiale en dehors de la vue
    spanElement.appendChild(div);

    // Attendre un court instant pour ajouter la classe et déclencher la transition
    setTimeout(() => {
        div.classList.add('trans');
        div.style.transform = `translateY(0)`; // Revenir à la position initiale
    }, 10); // 10 ms devrait suffire
};

// Mise à jour de l'horloge
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    document.querySelector("#ampm").textContent = ampm;

    // Mettre à jour uniquement si la valeur change
    if (hours !== previousHours) {
        setElement(hours, hourSpan);
        previousHours = hours;
    }
    if (minutes !== previousMinutes) {
        setElement(minutes, minuteSpan);
        previousMinutes = minutes;
    }
    if (seconds !== previousSeconds) {
        setElement(seconds, secondSpan);
        previousSeconds = seconds;
    }
}

updateClock();
setInterval(updateClock, 1000);
