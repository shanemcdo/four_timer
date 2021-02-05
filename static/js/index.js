import Timer from './timer.js';

let timers = [new Timer(15), new Timer(15), new Timer(15), new Timer(15)];
let timer_divs = document.querySelectorAll('.timer');
let timer_elements = [];
for(let i = 0; i < 4; i++){
    timer_elements.push({
        div: timer_divs[i],
        time: timer_divs[i].querySelector('.time'),
        total_time: timer_divs[i].querySelector('.total_time'),
    });
    timer_divs[i].addEventListener('click', event=>{
        if(event.target.className == 'color') return;
        if(!timers[i].running)
            timers[i].start();
        else
            timers[i].stop();
        for(let j = 0; j < 4; j++){
            if(j != i)
                timers[j].stop();
        }
    });
    let color = timer_divs[i].querySelector('.color');
    color.addEventListener('input', ()=>{
        set_background_color(i, color.value);
    });
}

setInterval(()=>{
    for(let i = 0; i < 4; i++){
        timer_elements[i].time.innerHTML = timers[i].date_string();
        timer_elements[i].total_time.innerHTML = timers[i].total_time_string();
    }
}, 200);

function set_background_color(index, color){
    timer_divs[index].style.background = color;
};
