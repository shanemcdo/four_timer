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
        if(event.target.className == 'color' || event.target.className == 'flipper') return;
        if(!timers[i].running){
            timers[i].start();
            timer_divs[i].style.borderColor = 'green';
        }else{
            timers[i].stop();
            timer_divs[i].style.borderColor = '';
        }
        for(let j = 0; j < 4; j++){
            if(j != i){
                timers[j].stop();
                timer_divs[j].style.borderColor = '';
            }
        }
    });
    let color = timer_divs[i].querySelector('.color');
    color.addEventListener('input', ()=>{
        set_background_color(i, color.value);
    });
    timer_divs[i].querySelector('.flipper').addEventListener('click', ()=>{
        if(timer_divs[i].style.transform == '')
            timer_divs[i].style.transform = 'rotate(180deg)';
        else
            timer_divs[i].style.transform = '';
    });
}

setInterval(()=>{
    for(let i = 0; i < 4; i++){
        timer_elements[i].time.innerHTML = timers[i].date_string();
        timer_elements[i].total_time.innerHTML = timers[i].total_time_string();
        if(timers[i].ended){
            timers[i].ended = false;
            timer_divs[i].style.borderColor = 'red';
        }
    }
}, 200);

function set_background_color(index, color){
    timer_divs[index].style.background = color;
};
