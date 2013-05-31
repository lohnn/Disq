
function initiate() {
	loadEventListener();
	isPlaying = false;
}

function clearSelection() {
	if(!searchFieldFocus) {
		if(document.selection && document.selection.empty) {
			document.selection.empty();
		} else if(window.getSelection) {
			var sel = window.getSelection();
			sel.removeAllRanges();
		}
	}
}

function switchPlayPauseImage() {
	if(isPlaying) {
		document.getElementById("playPauseButton").style.backgroundImage = "url('css/images/Pause.png')";
	} else {
		document.getElementById("playPauseButton").style.backgroundImage = "url('css/images/Play.png')";
	}
}

function startPausePlaying() {
	isPlaying = !isPlaying;
	switchPlayPauseImage();
}

function emptyFieldFromId(fieldId) {
	document.getElementById(fieldId).value = "";
}