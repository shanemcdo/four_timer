export default class Timer{
    constructor(duration = 10){
        this.start_date = Date.now();
        this.previous_date = Date.now();
        this.end_date = new Date(this.start_date);
        this.end_date.setSeconds(this.end_date.getSeconds() + duration);
        this.duration = duration;
        this.running = false;
        this.total_time = 0;
        this.ended = false;
        setInterval(()=>{
            if(this.running)
                this.update();
        }, 500);
    }

    date_string(){
        return this.milliseconds_to_time_string(this.running ? this.end_date - this.previous_date : this.duration * 1000);
    }

    total_time_string(){
        return this.milliseconds_to_time_string(this.total_time);
    }

    milliseconds_to_time_string(milliseconds){
        let seconds = Math.abs(Math.ceil(milliseconds / 1000));
        let minutes = Math.floor(seconds / 60)
        seconds %= 60;
        return `${minutes.toLocaleString('en', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('en', {minimumIntegerDigits: 2})}`;
    }

    update(){
        this.total_time += Date.now() - this.previous_date;
        this.previous_date = Date.now();
        let diff = this.end_date - this.previous_date;
        if(diff <= 0){
            this.running = false;
            this.ended = true;
            return
        }
    }

    start(){
        this.start_date = Date.now();
        this.previous_date = Date.now();
        this.end_date = new Date(this.start_date);
        this.end_date.setSeconds(this.end_date.getSeconds() + this.duration);
        this.running = true;
        this.ended = false;
    }

    stop(){
        this.running = false;
    }
}
