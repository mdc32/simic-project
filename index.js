var input = function () {  
	
	var txt = $("#input").val();

	if (txt === "" || currentNode === 33) return;

	write("> " + txt);

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

nodes[0] = new textNode(["%iNight after night thatched myself anew against the pending eraser", "As night falls, you lie awake with the sole company of your thoughts. Are you restless on a frigid WINTER night, or a warm SUMMER evening?"], [{inputs: ["summer"], id: 1}, {inputs: ["winter"], id: 2}]);

nodes[1] = new textNode(["%iThe little flags freshly posted in a cemetery said nothing as they hung listlessly in the early-summer breeze...", "You decide to take a walk to clear your head. As you pass a now-decrepit church, you feel a chill come over you. Do you ENTER or KEEP WALKING?", ""], [{inputs: ["enter"], id: 3}, {inputs: ["keep walking", "keep", "walking"], id: 4}]);
nodes[2] = new textNode(["%iThat one remaining, barely moving leaf the wind couldn't get to fall all winter long from a bare tree...", "", ""], [{inputs: [""], id: 5}, {inputs: [""], id: 6}]);
nodes[3] = new textNode(["%iThe future was like an unfriendly waiter standing ready to take their dinner order from a menu they could not read.", "The church doors creak as they open, revealing the dim chapel. Do you SIT among the empty pews or EXPLORE the church?"], [{inputs: ["sit"], id: 7}, {inputs: ["explore"], id: 8}]);
nodes[4] = new textNode(["%iThe future was like an unfriendly waiter standing ready to take their dinner order from a menu they could not read.", "You continue past the church, to an old Chinese restaurant. The 24-hour Bamboo Garden welcomes you. Do you STOP for a late night snack, or KEEP WALKING to see what else awaits you?"], [{inputs: ["stop"], id: 9}, {inputs: ["keep walking", "keep", "walking"], id: 10}]);
nodes[5] = new textNode(["%iThe future was like an unfriendly waiter standing ready to take their dinner order from a menu they could not read.", ""], [{inputs: [""], id: 0}]);
nodes[6] = new textNode(["%iThe future was like an unfriendly waiter standing ready to take their dinner order from a menu they could not read.", ""], [{inputs: [""], id: 0}]);

nodes[7] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", "You seat yourself in the chapel, looking up towards the vaulted ceilings. You bow your head and PRAY in complete peace and quiet."], [{inputs: ["pray"], id: 15}]);
nodes[8] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", "You avoid the chapel and WALK up the stairs to the office rooms, looking for anything interesting you can find."], [{inputs: ["WALK"], id: 17}]);
nodes[9] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", "You enter the restaurant, and are greeted warmly by the hostess. You ORDER orange chicken as usual, and take a seat awaiting your dish."], [{inputs: ["order"], id: 19}]);
nodes[10] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", "You walk further down the road, into the center of town. It is surprisingly busy for the nighttime. You SIT down on a bench near the fountain, observing everyone else around you."], [{inputs: ["sit"], id: 21}]);
nodes[11] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", ""], [{inputs: [""], id: 0}]);
nodes[12] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", ""], [{inputs: [""], id: 0}]);
nodes[13] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", ""], [{inputs: [""], id: 0}]);
nodes[14] = new textNode(["%iThe sunset over the approaching city was like a banquet in a madhouse", ""], [{inputs: [""], id: 0}]);

nodes[15] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", "You feel a sudden pain in your heart, as if God has deemed you unworthy. You try to MOVE, wondering what has happened."], [{inputs: ["MOVE"], id: 32}]);
nodes[16] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[17] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", "You open yet another door, and discover a balcony overlooking the chapel. As you approach the railing, the floor suddenly gives way and you fall, landing on the ground among the pews."], [{inputs: ["fall"], id: 32}]);
nodes[18] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[19] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", "The dish arrives, and you start to eat. Your throat itches at first, then quickly progresses to a burning pain as it constricts. You FALL out of your chair soon after."], [{inputs: ["fall"], id: 31}]);
nodes[20] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[21] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", "As you watch the activity in town, your chest starts to tighten up, and you find yourself unable to breathe. You CRY for help."], [{inputs: ["cry"], id: 31}]);
nodes[22] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[23] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[24] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[25] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[26] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[27] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[28] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[29] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);
nodes[30] = new textNode(["%iThe dark sneaking up on me, to blow out the match in my hand.", ""], [{inputs: [""], id: 0}]);

nodes[31] = new textNode(["%iNight fell without asking for our permission", "Everyone else in your view starts to fade away. You make an attempt to YELL for help."], [{inputs: ["yell"], id: 33}]);
nodes[32] = new textNode(["%iNight fell without asking for our permission", "Your vision starts to narrow, and you gradually feel a chill overcome your body. You try to BREATHE."], [{inputs: ["breathe"], id: 33}]);
nodes[33] = new textNode(["%iThe coming of the inevitable, what a strange bliss that is.", "Before you can take your last breath, the darkness takes over. All paths led here; there was nothing you could do. A peaceful thought, to some, a heart-wrenching discovery for others. An inevitability to all.", "THE END"]);

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
 