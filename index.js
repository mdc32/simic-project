var input = function () {  
	
	var txt = $("#input").val();

	if (txt === "") return;

	write("> " + txt)

	var options = nodes[currentNode].inputOptions;
	var x = false;

	for (i=0; i<options.length; i++) {
		console.log(options[i]);
		if (options[i].inputs.indexOf(txt.toLowerCase()) !== -1) {
			currentNode = options[i].id;
			nodes[currentNode].write();
			x = true;
		}
	}

	if (!x) {
	  write("Things have gone awry... Please type one of the highlighted words");	
	}

	$("#input").val("");

};

// @param {string} msg - message to print to "console"
var write = (msg) => {
	// Actual code to append the text to the field

	var p = $(document.createElement("p"));
	p.addClass("terminal-font");
	if (msg.substring(0,2) === "%i") {
		p.addClass("italic");
		msg = msg.substring(2);
	}

	msgArr = msg.split(" ");
	msgArr.map((str, i, arr) => {
		if (str.toUpperCase() === str && str.length > 2) {
			arr[i] = "<span class=\"color\">" + str.toLowerCase() + "</span>";
		}
	});
	msg = msgArr.join(" ");
	p.append(msg);

	$("#output").append(p);


	// Want to show the most recent message at the bottom of the screen, allows for scrolling
	$("#output").scrollTop($("#output")[0].scrollHeight);
};

//GAME LOGIC STARTS HERE
var currentNode = 0;
var nodes = [];

// @param {number} id - unique numerical id for each node
// @param {string[]} outputs - possible output strings on reaching this node
// @param {Object[]} inputOptions - possible input options and linked nodes
// @param {string[]} inputOptions[].inputs - input required to go to linked node (includes aliases)
// @param {number} inputOptions[].id - id of linked node
var textNode = function(outputs, inputOptions) {
	//this.id = id; //unique numerical id of each node
	this.outputs= outputs; 
	this.inputOptions = inputOptions;
};

textNode.prototype.write = function() {
	//
	this.outputs.map((str) => {write(str);});
};

nodes[0] = new textNode(["%iNight after night thatched myself anew against the pending eraser", "As night falls, you lay awake with the sole company of your thoughts. Do your memories take you to a warm SUMMER evening, or a frigid WINTER night? "], [{inputs: ["winter"], id: 1}, {inputs: ["summer"], id: 2}]);
nodes[1] = new textNode(["%iThat one remaining, barely moving leaf the wind couldn't get to fall all winter long from a bare tree...", "", ""], [{}]);
nodes[2] = new textNode(["%iThe little flags freshly posted in a cemetery said nothing as they hung listlessly in the early-summer breeze...", "", ""], [{}]);

nodes[31] = new textNode(["%iNight fell without asking for our permission", ""], [{inputs: ["33",""], id: 33}]);
nodes[32] = new textNode(["%iNight fell without asking for our permission", ""], [{inputs: ["33",""], id: 33}]);
nodes[33] = new textNode(["%iThe coming of the inevitable, what a strange bliss that is.", "Before you can utter a word, the darkness takes over. All paths led here; there was nothing you could do. A peaceful thought, to some, a heart-wrenching discovery for others. An inevitability to all. "])

//document.ready
$(function() {
	$("#input").keypress(function(e) {
		// The user presses Enter on the keyboard
		if (e.which === 13) {
			// The message needs to be displayed on the screen
			input();
		}
	});
	nodes[currentNode].write();
});
 