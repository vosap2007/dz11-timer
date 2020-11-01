class Timer {
    constructor({ selector, targetDate}) {
		this.refElement = document.querySelector(selector);
		this.date = targetDate;
    }
    start() {
        setInterval(() => {
            this.onTick();
        }, 1000);
    }
	
	pad(value) {
		return String(value).padStart(2, '0');
	}
	getTimeComponents() {
		const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
		const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
		return {days, hours, mins, secs};
	}
	
	onTick () {
		const currentTime = Date.now();
		this.deltaTime = this.date - currentTime;
		this.updateClocface(this.getTimeComponents())
	}
	
	updateClocface({ days, hours, mins, secs }) {
	  this.refElement.textContent  = `${days}:${hours}:${mins}:${secs}`;
	}
}
const timer = new Timer({
	selector: '#timer-1',
    targetDate: new Date('Dec 17, 2020')
});
timer.start();