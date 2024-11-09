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

const setElement = (value, spanElement) => {
    const currentDiv = spanElement.querySelector('div');
    
    if (currentDiv) {
        // Appliquer l'animation de sortie
        currentDiv.classList.add('trans-out');
        currentDiv.style.transform = `translateY(-100%)`; // Monte pour disparaître

        // Attendre la fin de l'animation de sortie avant de supprimer et d'ajouter le nouveau
        currentDiv.addEventListener('transitionend', () => {
            spanElement.removeChild(currentDiv);
            addNewElement(value, spanElement);
        }, { once: true });
        
    } else {
        addNewElement(value, spanElement);
    }
};

// Fonction pour ajouter un nouvel élément avec une animation d'entrée
const addNewElement = (value, spanElement) => {
    const count = parseInt(value);

    const div = document.createElement('div');
    div.textContent = count < 10 ? '0' + count : count;
    div.classList.add('trans'); // Animation d'entrée
    div.style.transform = `translateY(100%)`; // Position de départ en bas

    spanElement.appendChild(div);

    // Ajouter une animation d'entrée après une petite attente
    setTimeout(() => {
        div.style.transform = `translateY(0)`;
    }, 10);
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
setInterval(updateClock, 900);
