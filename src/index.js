/*const CountdownTimer = ({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2021'),
});*/

/*new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});*/

class Timer {

    constructor({ onTick }) {
        this.onTick = onTick;
    }

    start() {
        setInterval(() => {   
            const currentTime = Date.now();
            const deltaTime = timer.targetDate - currentTime;
            const time = getTimeComponents(deltaTime); 
          
            this.onTick(time)
        }, 1000);
    }
}

     const timer = new Timer({
      selector: '#timer-1',
      targetDate: new Date('Jul 17, 2019'),
      onTick: updateClocface
     });

timer.start();

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) { 
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
}

function updateClocface({ days, hours, mins, secs }) {
  timer.selector.['#timer-1']  = `${days}:${hours}:${mins}:${secs}`;
}

