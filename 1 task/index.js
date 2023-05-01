const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        let timer = setInterval(function () {
            let secondsTwo = Math.floor(seconds % 3600 % 60);
            let minutes =  Math.floor(seconds % 3600 / 60);
            let hour = Math.floor(seconds / 3600);
            if (seconds <= 0) {
                clearInterval(timer);
                timerEl.innerHTML = 'Время закончилось'
            } else {
                timerEl.innerHTML = `${hour}:${minutes}:${secondsTwo}`;
            }
            --seconds;
        }, 1000)
    };
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);

    inputEl.value = '';
});
