//Load all listeners once the page is loaded
function loadEventListener() {
	document.onkeyup = function() {
		searchFieldButtonDisplay();
	}
	//Makes sure there's no selection inside the window...
	document.onmouseup = function() {
		clearSelection();
	};
	//SearchField expanded?
	document.getElementById("searchDiv").onmouseover = expandSearchDiv;
	document.getElementById("searchDiv").onmouseout = shrinkSearchDiv;
	searchFieldFocus = false;
	document.getElementById("searchField").onfocus = function() {
		searchFieldFocus = true;
	};
	document.getElementById("searchField").onblur = function() {
		searchFieldFocus = false;
		shrinkSearchDiv();
	};
	//The functions used
	function expandSearchDiv() {
		document.getElementById("searchDiv").style.width = "170px";
		document.getElementById("searchField").style.display = "block";
	}

	function shrinkSearchDiv() {
		if(document.getElementById("searchField").value == "" && searchFieldFocus == false) {
			document.getElementById("searchField").style.display = "none";
			document.getElementById("emptySearchField").style.display = "none";
			document.getElementById("searchDiv").style.width = "32px";
		}
	}

	//searchField actions
	document.getElementById("emptySearchField").onclick = function() {
		emptyFieldFromId("searchField");
		document.getElementById("emptySearchField").style.display = "none";
	};
	function searchFieldButtonDisplay() {
		if(document.getElementById("searchField").value != "") {
			document.getElementById("emptySearchField").style.display = "block";
		} else {
			console.log("removing : " + document.getElementById("emptySearchField").value);
			document.getElementById("emptySearchField").style.display = "none";
		}
	};

	//Cover art
	playPauseHover = false;
	document.getElementById("coverArt").onmousedown = function() {
		if(playPauseHover == false) {
			document.getElementById("coverArtWrapper").style.borderRadius = "0px";
			document.getElementById("coverArt").style.borderRadius = "0px";
			document.getElementById("playPauseWrapper").style.display = "none";
			document.getElementById("changeSongWrapper").style.display = "none";
		}
	};

	document.getElementById("coverArt").onmouseup = coverArtRadius;
	document.getElementById("coverArt").onmouseout = coverArtRadius;
	

	function coverArtRadius() {
		document.getElementById("coverArtWrapper").style.borderRadius = "100px";
		document.getElementById("coverArt").style.borderRadius = "100px";
		document.getElementById("playPauseWrapper").style.display = "block";
		document.getElementById("changeSongWrapper").style.display = "block";
	}

	//Media buttons
	document.getElementById("playPauseWrapper").onmouseover = function() {
		playPauseHover = true;
		//document.getElementById("changeSongWrapper").style.display = "block";
	};
	document.getElementById("playPauseWrapper").onmouseout = function() {
		playPauseHover = false;
	};
	document.getElementById("playPauseButton").onclick = startPausePlaying;
};