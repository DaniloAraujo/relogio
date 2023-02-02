const digitalElement = document.querySelector('.digital');
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    let sPointer = ((360 / 60) * seconds) - 90;
    let mPointer = ((360 / 60) * minutes) - 90;
    let hPointer = ((360 / 12) * hours) - 90;

    sElement.style.transform = `rotate(${sPointer}deg)`;
    mElement.style.transform = `rotate(${mPointer}deg)`;
    hElement.style.transform = `rotate(${hPointer}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();