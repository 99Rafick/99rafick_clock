const clockCases = document.querySelectorAll('.clockCase');
const hourSpan = document.querySelector('span#hour .spanContent')
const minuteSpan = document.querySelector('span#minute .spanContent')
const secondSpan = document.querySelector('span#seconde .spanContent')


// tracage des lignes
clockCases.forEach((caseElement) => {
    let i = 2; 
    do {
        const div = document.createElement('div')
        div.classList.add('caseLine')
        div.style.top = `${7*i}px`;
        div.style.left = `${7*i}px`;
        caseElement.appendChild(div)
        i++;
    } while (i < 37);
});

let previousHours = '';
let previousMinutes = '';

const setMinutesElement = () => {
    let i = 0;
    do {
       const div = document.createElement('div')
       div.textContent = i < 10 ? '0' + i : i
       minuteSpan.appendChild(div)
       i++;
    }while (i < 60)
}

const setHoursElement = () => {
    let i = 0;
    do {
       const div = document.createElement('div')
       div.textContent = i < 10 ? '0' + i : i
       hourSpan.appendChild(div)
       i++;
    }while (i < 60)
}

const setSecondesElement = () => {
    let i = 0;
    do {
       const div = document.createElement('div')
       div.textContent = i < 10 ? '0' + i : i
       secondSpan.appendChild(div)
       i++;
    }while (i < 60)
}



function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    document.querySelector("#ampm").textContent = ampm;
    hourSpan.style.transform = `translateY(-${259.19*hours}px)`

    minuteSpan.style.transform = `translateY(-${259.19*minutes}px)`

    secondSpan.style.transform = `translateY(-${259.19*seconds}px)`
}

updateClock();
setHoursElement();
setMinutesElement();
setSecondesElement();
setInterval(updateClock, 1000);
