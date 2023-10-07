class Clock {
    constructor() {
        //this.setInterval
        let time = new Date();
        this.hours = time.getHours();
        this.mins = time.getMinutes();
        this.secs = time.getSeconds();
        setInterval(this._tick.bind(this), 1000);
        // setInterval(()=>this._tick(), 1000);
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
        if(this.secs === 60) {
            this.secs = 0;
            this.mins++;
        }
            if(this.mins === 60){
                this.hours++;
                this.mins = 0;
            }
                if(this.hours === 24){
                    this.hours = 0;
                }
            
        this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
  }
}
  
  // const clock = new Clock();
//console.log(clock)
  // clock.printTime();
  /*let today = new Date
  console.log(today)*/

  // ****addNumbers ****** 
  const reader = require('readline');
  const rl = reader.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft === 0) {
    return completionCallback(sum);
  }

    if (numsLeft > 0) {
      rl.question("give me a number", res => {
        // debugger
        sum += parseInt(res);
        console.log(`the sum is ${sum}`);
        addNumbers(sum, numsLeft - 1 , completionCallback)
      });
 
  };

}

  //addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)) // 3 numbers, partial sum, total sum


// myBind //

/*Function.prototype.myBind = function(context) {
  return () => {this.apply(context, [])}
};*/
Function.prototype.myBind = function(context) {
  const that = this;
  return function(...args) {
    that.apply(context, args);
    //that.call(context, ...args);
  }
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

