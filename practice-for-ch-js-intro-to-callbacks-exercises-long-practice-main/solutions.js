class Clock {
    constructor() {
        //this.setInterval
        let time = new Date();
        this.hours = time.getHours();
        this.mins = time.getMinutes();
        this.secs = time.getSeconds();
       // setInterval(this._tick.bind(this), 1000);
        setInterval(()=>this._tick(), 1000);
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
        let arr = [this.hours, this.mins, this.secs]
        console.log(arr.map((ele)=> ele.toString().padStart(2, '0')).join(':'))
        //console.log(`time ${this.hours}:${this.mins}:${this.secs}`);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
        this.secs++;
        if(this.secs >= 60) {
            this.secs = 0;
            this.mins++;
            if(this.mins >= 60){
                this.hours++;
                this.mins = 0;
                if(this.hours >= 24){
                    this.hours = 0;
                }
            }
        }
        this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
}
  
  const clock = new Clock();
//console.log(clock)
clock.printTime();
  /*let today = new Date
  console.log(today)*/