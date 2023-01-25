document.body.onload = activeTraffic;

const light = document.querySelectorAll('.circle');
const refresh = document.getElementById('btn');

let count = 0;
let interval;

function activeTraffic() {
    interval = setInterval(() => {
        light[count].className = "circle";
        count++;

        if(count > 2) {
            count = 0;
        }
    
        light[count].classList.add(light[count].getAttribute('color'));

    }, 5000);
};

refresh.addEventListener('click', () => {
    clearInterval(interval);
    let counter = 10;
    let cntNum = document.querySelector('.count__num');

    let countPointer = setInterval(() => {
        counter--;
        cntNum.innerHTML = counter;

        if (counter > 0) {
            light[count].classList.remove(light[count].getAttribute('color'));
            light[0].classList.add(light[0].getAttribute('color'));
        } else {
            clearInterval(countPointer);
            light[0].classList.remove(light[0].getAttribute('color'));
            light[1].classList.add(light[1].getAttribute('color'));
        }
    }, 1000);
    
    const out = setTimeout(() => {
        count = 0;
        activeTraffic();
    }, 10000);
})