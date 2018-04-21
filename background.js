var apiURL = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=';
var apiKey = '&apikey=5c41136c2d14c8ed00a12d3ff7322211';
var songName = 'Shape%20Of%20You';

console.log(apiURL+songName+apiKey);

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function removeEmptyStrings (arr) {
	var lyricArray = [];
	for (var i = 0; i < arr.length; i++) {
		var element = arr[i];
		if (element != "") {
			lyricArray.push(element);
		}
	}
	return lyricArray;
}



function getLyrics () {
	var xhttp = new XMLHttpRequest ();
	xhttp.onreadystatechange = function() {
		//onreadystatechang property invokes a function every time the status of the XMLHttpRequest object changes
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			//readystate value of 4 means that the request is complete
			//status of 200 means the response is OK.
		}
	}
	xhttp.open("GET", apiURL+songName+apiKey, false);
	//this initializes new request or reinitializes an old one
	//parameters include the method, the url for the request, and whether or not the request should be async
	xhttp.send(null);
	//console.log(xhttp.response);
	var responseAPI = xhttp.responseText;
	var responseTrim = responseAPI.substring(9).slice(0, -2);
	var json = JSON.parse(responseTrim);
	var lyricsText = json.message.body.lyrics.lyrics_body;
	var lyricsArray = lyricsText.split('\n');
	var lyricsArrayTrim = removeEmptyStrings(lyricsArray);

	var lyricString = '';
	for (var z = 0; z < 4; z++) {
		var element = lyricsArrayTrim[z];
		lyricString += element + "\n";
	}
	console.log(lyricString);
}

getLyrics();

