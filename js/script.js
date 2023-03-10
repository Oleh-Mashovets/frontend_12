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
refresh.disabled = false;

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
            return refresh.disabled = true;
        }
        else {
            clearInterval(countPointer);
            light[0].classList.remove(light[0].getAttribute('color'));
            return refresh.disabled = false;
        }
    }, 1000);

    setTimeout(() => {
        count = 0;
        activeTraffic(); 
    }, 5000);
})
