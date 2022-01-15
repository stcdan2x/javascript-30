window.addEventListener("keydown", (e) => {
	//get element based on pressed key
	const currentAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
		currentKey = document.querySelector(`div[data-key="${e.keyCode}"]`),
		messageBox = document.querySelector(".message-container"),
		keyChar = document.querySelector(".letter");

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
		keyChar.innerHTML = `"${e.key}"`;
		messageBox.classList.add("show");
		setTimeout(() => messageBox.classList.remove("show"), 1000);
	}
});
