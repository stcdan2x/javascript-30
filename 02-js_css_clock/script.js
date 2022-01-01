const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const runSeconds = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsAngle = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsAngle}deg)`;
};

const runClock = () => {
	const now = new Date();

	const minutes = now.getMinutes() * 60;
	const hours = (now.getHours() + now.getMinutes() / 60) * 3600;

	console.log(minutes);
	console.log(hours);
	minuteHand.style.animationDelay = `-${minutes}s`;
	hourHand.style.animationDelay = `-${hours}s`;
};

setInterval(runSeconds, 1000);

runClock();
