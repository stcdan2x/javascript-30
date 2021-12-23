window.addEventListener("keydown", (e) => {
	//get element based on pressed key
	const currentAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const currentKey = document.querySelector(`div[data-key="${e.keyCode}"]`);

	if (currentKey) {
		if (currentKey.classList.contains("playing")) {
			currentKey.classList.remove("playing");
		}
		//set audio to start
		currentAudio.currentTime = 0;

		currentKey.classList.add("playing");

		currentAudio.play();

		setTimeout(() => currentKey.classList.remove("playing"), 90);
	} else {
		alert("Please press the keys displayed on screen");
	}
});
