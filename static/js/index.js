import Timer from './timer.js';

let timers = [new Timer(150), new Timer(50), new Timer(20), new Timer(300)];
let timer_divs = document.querySelectorAll('.timer');
let timer_elements = [];
for(let i = 0; i < 4; i++){
    timer_elements.push({
        div: timer_divs[i],
        time: timer_divs[i].querySelector('.time'),
        total_time: timer_divs[i].querySelector('.total_time'),
    });
    timer_divs[i].addEventListener('click', ()=>{
        timers[i].start()
        for(let j = 0; j < 4; j++){
            if(j != i)
                timers[j].stop();
        }
    });
}

setInterval(()=>{
    for(let i = 0; i < 4; i++){
        timer_elements[i].time.innerHTML = timers[i].date_string();
        timer_elements[i].total_time.innerHTML = timers[i].total_time_string();
    }
}, 200);

function set_background_color(index, color){
    timer_divs[i].style.background = color;
};
