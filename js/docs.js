let codeblock = document.querySelectorAll(".code");
// Syntax Highlighter JavaScript
for(var j = 0; j < codeblock.length; j++){
    let result = [];
    let text = codeblock[j].innerHTML;
	let words = text.split(" ");
	let newString = "";
	console.log(words)
	for(var i = 0; i < words.length; i++){
		var substring = words[i];
		substring = words[i].replace("new", "<span style='color: blue'>new</span>")
		.replace("let", "<span style='color: blue;'>let</span>")
		.replace("Visual", "<span style='color: green;'>Visual</span>")
		.replace("mouseRadius", "<span style='color: rgb(100,25,0);'>mouseRadius</span>")
		.replace("canvasName", "<span style='color: rgb(100,25,0);'>canvasName</span>")
		.replace("z-index", "<span style='color: rgb(100,25,0);'>z-index</span>")
		.replace("backgroundColor", "<span style='color: rgb(100,25,0);'>background-color</span>")
		.replace("amount", "<span style='color: rgb(100,25,0);'>amount</span>")
		.replace("collision", "<span style='color: rgb(100,25,0);'>collision</span>")
		.replace("collisionOther", "<span style='color: rgb(100,25,0);'>collisionOther</span>")
		.replace("collisionBorder", "<span style='color: rgb(100,25,0);'>collisionBorder</span>")
		.replace("collisionMouse", "<span style='color: rgb(100,25,0);'>collisionMouse</span>")
		.replace("radius", "<span style='color: rgb(100,25,0);'>radius</span>")
		.replace("type", "<span style='color: rgb(100,25,0);'>type</span>")
		.replace("messages", "<span style='color: rgb(100,25,0);'>messages</span>")
		.replace("connect", "<span style='color: rgb(100,25,0);'>connect</span>")
		.replace("connectColor", "<span style='color: rgb(100,25,0);'>connectColor</span>")
		.replace("connectNear", "<span style='color: rgb(100,25,0);'>connectNear</span>")
		.replace("connectMouse", "<span style='color: rgb(100,25,0);'>connectMouse</span>")
		.replace("connectRadius", "<span style='color: rgb(100,25,0);'>connectRadius</span>")
		.replace("negativeX", "<span style='color: rgb(100,25,0);'>negativeX</span>")
		.replace("negativeY", "<span style='color: rgb(100,25,0);'>negativeY</span>")
		.replace("render", "<span style='color: blue;'>render</span>")
		.replace("speed", "<span style='color: blue;'>speed</span>")
		.replace("reset", "<span style='color: blue;'>reset</span>")
		.replace("clear", "<span style='color: blue;'>clear</span>")
		.replace("softLight", "<span style='color: blue;'>softLight</span>")
		.replace("spotLight", "<span style='color: blue;'>spotLight</span>")
		.replace("interface", "<span style='color: blue;'>interface</span>")
		.replace("Particle", "<span style='color: green;'>Particle</span>")
		.replace("startLight", "<span style='color: blue;'>startLight</span>")
		.replace("Integer", "<span style='color: blue;'>Integer</span>")
		.replace("String", "<span style='color: blue;'>String</span>")
		.replace("Boolean", "<span style='color: blue;'>Boolean</span>")
		.replace("Color", "<span style='color: rgb(100,25,0);'>Color</span>")
		.replace("intensity", "<span style='color: rgb(100,25,0);'>intensity</span>")
		.replace("attachMouse", "<span style='color: rgb(100,25,0);'>attachMouse</span>")
		.replace("position", "<span style='color: rgb(100,25,0);'>position</span>")
		.replace("PosX", "<span style='color: rgb(100,25,0);'>PosX</span>")
		.replace("PosY", "<span style='color: rgb(100,25,0);'>PosY</span>")
		.replace("flashLight", "<span style='color: blue;'>flashLight</span>")
		.replace("duration", "<span style='color: rgb(100,25,0);'>duration</span>")
		.replace("yoyo", "<span style='color: rgb(100,25,0);'>yoyo</span>")
		.replace("id", "<span style='color: rgb(100,25,0);'>id</span>")
		
		
		result.push(substring);
	}
	for(var i=0; i < result.length; i++){
		if(result[i] != ""){
		newString += result[i];
		newString += "&nbsp;";
		}
	}
	console.log(newString);
    codeblock[j].innerHTML = newString;
}
