export default class Timer{
    constructor(duration = 300){
        this.start_time = Date.now();
        this.end_time = new Date(this.start_time);
        this.end_time.setSeconds(this.end_time.getSeconds() + duration);
        this.duration = duration;
        this.running = true;
        setInterval(()=>{
            if(this.running)
                this.update();
        }, 1000);
    }

    time_string(){
        minutes = math.floor(this.time / 60);
        seconds = this.time % 60;
        return `${minutes.toFixed(2)}:${seconds.toFixed}`
    }

    update(){
        let diff = this.end_time - Date.now();
        console.log(diff);
        if(diff <= 0){
            this.running = false;
        }
    }
}
