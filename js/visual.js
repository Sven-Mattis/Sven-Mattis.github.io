const version = "0.0.5.1";
// Global variables
let CANVAS, CTX, MESSAGES, CANVASNAME, SPEED = 0;
let MOUSE = {
    x: null,
    y: null,
    radius: null
}
// create the Arrays
// they get multidimensional later
let LIGHTS = [];
let PARTICLE = [];
function drag(e) {
    dragOn = true
    setTimeout(() => {
        drop(e)
    }, 1);
}
function drop(e) {
    document.querySelector(e).style.left = (MOUSE.x - 100)+ "px";
    document.querySelector(e).style.top = (MOUSE.y-20)+ "px";
    if(dragOn){
        drag(e)
    }
}
function dragReset(){
    dragOn = false;
}

// Handle the mousemove event
// and check if a Light is attached to the mouse
window.onmousemove = () => {
    MOUSE.y = window.pageYOffset+window.event.clientY;
    MOUSE.x = window.pageXOffset+window.event.clientX;
    for(let i = 0; i < LIGHTS.length; i++){
        if(LIGHTS[i].mouseAttach == true){
            // set the Light if it is attached
            let obj = document.getElementById((LIGHTS[i].type+LIGHTS[i].name))
            obj.style.left = MOUSE.x+"px";
            obj.style.top = MOUSE.y+"px";
        }
    }
}


window.onresize = () => {
    CANVAS.height = window.innerHeight;
    CANVAS.width = window.innerWidth;
}


class Visual{
    constructor(mouseRadius, canvasName, z_index, backgroundColor, message){
        MESSAGES = message;
        // if message is not given set it to true
        if(message == undefined){
            MESSAGES=true
        }
        // get the canvas
        CANVAS = document.querySelector(canvasName);
        CANVASNAME = canvasName;
        CTX = CANVAS.getContext("2d");
        // finish the global MOUSE-Array
        MOUSE = {
            x: window.innerWidth/2,
            y: window.innerHeight/2,
            radius: mouseRadius
        }
        // set the height and all of the Canvas
        // height and width not with style to
        // create a canvas that has a solotion as the screen
        CANVAS.height = window.innerHeight;
        CANVAS.width = window.innerWidth;
        CANVAS.style.position = "fixed";
        CANVAS.style.zIndex = z_index;
        CANVAS.style.background = backgroundColor;
        CANVAS.style.left = "0px";
        CANVAS.style.top = "0px";
        // Print all if messages is on
        if(MESSAGES){
            console.log("Version: "+version+
            "\nCanvas Name: "+canvasName+
            "\nRadius set to the Mouse: "+mouseRadius+
            "\nBackground: "+backgroundColor+
            "\nz-index: "+z_index+"\n\n");
        }
    }
    fps(){

    }
	reset(canvas){
        if(canvas == undefined){
            canvas = CANVAS;
        } else {
            canvas = docuemnt.querySelector(canvas);
        }
		canvas.style.display = "none";
	}
    // FlashLight effect, here Because of it creates an DOM-Element, always accessable
    flashLight( tempradius, tempposition, tempheight, tempwidth, tempmouseAttach, PosX, PosY, tempduration){
        /* Methods for tempmovement
                    Variables here with temp --- to get no conflict with the names of the array
                    Array is more important than the Initialising
                    there we get later the Variables from 
        */
        // access to FLASHLIGHT-Array
        // FLASHLIGHT[0][1].radius

        // Create a DOM-Element
		let tempmovement = "";
        let flashLight = document.createElement("div");

        // Create the ID of the DOM-Element
        let tempname = LIGHTS.length;

        // Insert every into the Array to have it accessable
        LIGHTS.push({
            type: "flashLight",
            name: tempname,
            radius: tempradius,
            position: tempposition,
            height: tempheight,
            width: tempwidth,
            intensity: null,
            color: null,
            mouseAttach: tempmouseAttach,
            movement: tempmovement,
            duration: tempduration
        });

        // Renaming for better Readability
        let radius = tempradius;
        let position = tempposition;
        let height = tempheight;
        let width = tempwidth;
        let mouseAttach = tempmouseAttach;
		let movement = tempmovement;
        let duration = tempduration;
        // Check if a explicit Position is given or not and if set it
        if(PosX != null && PosY !=null){
            flashLight.style.top = PosY+"%";
            flashLight.style.left = PosX+"%";
        } else {
            flashLight.style.left = "0%";
            flashLight.style.top = "0%";
        }
        // if movement is not given means that it meight be attached to the Mouse or forgot to set
        // To avoid a black screen center it 
        if(!movement){
            flashLight.style.left = "50%";
            flashLight.style.top = "50%";
        }
        // Set every thing to the DOM-Element
        flashLight.setAttribute("id", "flashLight"+tempname)
        flashLight.style.width = width+"px";
        flashLight.style.height = height+"px";
        flashLight.style.position = position;
        flashLight.style.zIndex = 100;
        flashLight.style.pointerEvents = "none";
        flashLight.style.transformOrigin = "center";
        flashLight.style.transform = "translate(-50%, -50%)";
        flashLight.style.background = "radial-gradient(rgba(0,0,0,0)"+(radius/10)+"%,rgba(0,0,0,0.25)"+(radius/5)+"%,rgba(0,0,0,0.7)"+(radius/2.5)+"%,rgba(0,0,0,1)"+(radius/2)+"%)";
        // and append it
        // maybe add a variable to the constructor to append it to an explicit element
        // Need to be stored global
        document.querySelector("body").appendChild(flashLight);
        // if message on and atteched to mouse print to the Console
        // and set transform origin to center
        if(mouseAttach){
            if(MESSAGES){
                console.log("flashLight Attached");
            }
            flashLight.style.transformOrigin = "center";
        }
        return tempname;
    }
    spotLight( tempradius, tempcolor, tempposition, tempmouseAttach, PosX, PosY, tempduration){
        /* Methods for tempmovement
                 letiables here with temp --- to get no conflict with the names of the array
                 Array is more important than the Initialising
                 there we get later the Variables from 
        */
        // access to FLASHLIGHT-Array
        // FLASHLIGHT[0][1].radius

        // Create a DOM-Element
		let tempmovement = "";
        let spotLight = document.createElement("div");

        // Create the ID of the DOM-Element
        let tempname = LIGHTS.length;

        // Insert every into the Array to have it accessable
        LIGHTS.push({
            type: "spotLight",
            name: tempname,
            radius: tempradius,
            position: tempposition,
            height: tempradius*2,
            width: tempradius*2,
            intensity: null,
            color: tempcolor,
            mouseAttach: tempmouseAttach,
            movement: tempmovement,
            duration: tempduration
        });

        // Renaming for better Readability
        let color = tempcolor;
        let radius = tempradius;
        let position = tempposition;
        let mouseAttach = tempmouseAttach;
        let movement = tempmovement;
        let duration = tempduration;
        // Check if a explicit Position is given or not and if set it
        if(PosX != null && PosY !=null){
            spotLight.style.top = PosY+"%";
            spotLight.style.left = PosX+"%";
        } else {
            spotLight.style.left = "0%";
            spotLight.style.top = "0%";
        }
        // Set every thing to the DOM-Element
        spotLight.setAttribute("id", "spotLight"+tempname)
        spotLight.style.width = radius*2+"px";
        spotLight.style.height = radius*2+"px";
        spotLight.style.position = position;
        spotLight.style.zIndex = 1;
        spotLight.style.pointerEvents = "none";
        spotLight.style.transformOrigin = "center";
        spotLight.style.borderRadius = radius+"px";
        spotLight.style.transform = "translate(-50%, -50%)";
        spotLight.style.background = "radial-gradient("+color+" 0%,"+color+" 100%)";
        // and append it
        // maybe add a variable to the constructor to append it to an explicit element
        // Need to be stored global
        document.querySelector("body").appendChild(spotLight);
        // if message on and atteched to mouse print to the Console
        // and set transform origin to center
        if(mouseAttach){
            if(MESSAGES){
                console.log("spotLight Attached");
            }
            spotLight.style.transformOrigin = "center";
        }
        return tempname;
    }
    softLight( tempradius, tempcolor, tempintensity, tempposition, tempmouseAttach, PosX, PosY, tempduration){
        /* Methods for tempmovement
        Center | Left | Right | Top | Bottom | LeftBottom | RightBottom | LeftTop | RightTop
                 letiables here with temp --- to get no conflict with the names of the array
                 Array is more important than the Initialising
                 there we get later the Variables from 
        */
        // access to FLASHLIGHT-Array
        // FLASHLIGHT[0][1].radius

        // Create a DOM-Element
		let tempmovement = "";
        let softLight = document.createElement("div");

        // Create the ID of the DOM-Element
        let tempname = LIGHTS.length;

        // Insert every into the Array to have it accessable
        LIGHTS.push({
            type: "softLight",
            name: tempname,
            radius: tempradius,
            position: tempposition,
            height: tempradius*2,
            width: tempradius*2,
            intensity: tempintensity,
            color: tempcolor,
            mouseAttach: tempmouseAttach,
            movement: tempmovement,
            duration: tempduration
        });

        // Renaming for better Readability
        let intensity = tempintensity;
        let color = tempcolor;
        let radius = tempradius;
        let position = tempposition;
        let mouseAttach = tempmouseAttach;
        let movement = tempmovement;
        let duration = tempduration;
        // Check if a explicit Position is given or not and if set it
        if(PosX != null && PosY != null){
            softLight.style.top = PosY+"%";
            softLight.style.left = PosX+"%";
        } else {
            softLight.style.left = "0%";
            softLight.style.top = "0%";
        }
        // Set every thing to the DOM-Element
        softLight.setAttribute("id", "softLight"+tempname)
        softLight.style.width = radius*2+"px";
        softLight.style.height = radius*2+"px";
        softLight.style.position = position;
        softLight.style.zIndex = 1;
        softLight.style.pointerEvents = "none";
        softLight.style.transformOrigin = "center";
        softLight.style.borderRadius = radius+"px";
        softLight.style.transform = "translate(-50%, -50%)";
        softLight.style.background = "radial-gradient("+color+" 0%, rgba(0,0,0,0) "+intensity+"%)";
        // and append it
        // maybe add a variable to the constructor to append it to an explicit element
        // Need to be stored global
        document.querySelector("body").appendChild(softLight);
        // if message on and atteched to mouse print to the Console
        // and set transform origin to center
        if(mouseAttach){
            if(MESSAGES){
                console.log("softLight Attached");
            }
            softLight.style.transformOrigin = "center";
        }
        return tempname;
    }
    startLight(id, {move: {x: x = undefined, y: y = undefined}} = move, speed, yoyo){
        if(id != undefined){
            // Single Light move
            // Check if Mouse Attched
            if(LIGHTS[id].mouseAttach){
                console.error("Object: "+LIGHTS[id].type+LIGHTS[id].name+" is attached to the Mouse"+
                "\n Something like this is deactivated!\n    I´m Sorry");
            } else {
                let obj = document.getElementById(LIGHTS[id].type+id);
                let ReposX, ReposY;
                speed = speed;
                // Check if variables given
                if(speed===undefined){
                    speed = LIGHTS[id].duration;
                }
                if(yoyo){
                    ReposX = obj.style.left;
                    ReposY = obj.style.top;
                }
                // Set Easing
                if(speed){
                    obj.style.transition = "ease-in-out "+speed+"s";
                } else {
                    obj.style.transition = "ease-in-out 1s";
                }
                // Presets
                setTimeout(() => {
                    if(x != undefined){
                        obj.style.left = x;
                    }
                    if(y != undefined){
                        obj.style.top = y;
                    }
                })
                // Yoyo
                if(yoyo){
                    setTimeout(() => {
                        obj.style.top = ReposY;
                        obj.style.left = ReposX;
                    }, speed*1000);
                }
            }
        } else {
            // All Lights move
            if(MESSAGES){
                console.warn("Your starting every Light Movement at once."+
                "\nto Select a special Light enter the Number from the ID!"+
                "\n\n<div id='spotLight23'> then take the 23 to get this Light\n\n\n"+
                "Or just simple call put the light in a Variable and then call the Method with the Variable!")
            }
            for(let i = 0; i < LIGHTS.length; i++){
                let obj = document.querySelector("#"+LIGHTS[i].type+LIGHTS[i].name);
                // Check if variables given
                if(speed===undefined){
                    let speed = LIGHTS[i].duration;
                }
                if(move===undefined){
                    let move = LIGHTS[i].movement;
                }
                if(yoyo){
                    let ReposX = obj.style.left;
                    let ReposY = obj.style.top;
                }
                if(speed){
                    obj.style.transition = "ease-in-out "+speed+"s";
                } else {
                    obj.style.transition = "ease-in-out 1s";
                }
                // Presets
                setTimeout(() => {
                    if(move=="center"){
                        obj.style.top = "50%";
                        obj.style.left = "50%";
                    } else if(move=="right"){
                        obj.style.top = "50%";
                        obj.style.left = "100%";
                    } else if(move=="left"){
                        obj.style.top = "50%";
                        obj.style.left = "0%";
                    } else if(move=="top"){
                        obj.style.top = "0%";
                        obj.style.left = "50%";
                    } else if(move=="bottom"){
                        obj.style.top = "100%";
                        obj.style.left = "50%";
                    } else if(move=="leftTop"){
                        obj.style.top = "0%";
                        obj.style.left = "0%";
                    } else if(move=="rightTop"){
                        obj.style.top = "0%";
                        obj.style.left = "100%";
                    } else if(move=="leftBottom"){
                        obj.style.top = "100%";
                        obj.style.left = "0%";
                    } else if(move=="rightBottom"){
                        obj.style.top = "100%";
                        obj.style.left = "100%";
                    }
                }, 10);

                // Yoyo
                if(yoyo){
                    setTimeout(() => {
                        obj.style.top = ReposY;
                        obj.style.left = ReposX;
                    }, speed*1000);
                }
            }
        }
    }
    clear(){
        LIGHTS = [];
    }
}
class Particle{
    // the Particle constructor
    // Color can also be a number, with a letter (r,g,b), to get Multiply Colors => 
    // 
    constructor({
        amount: amount = 1,
        color: color = "black",
        radius: radius = 10,
        pos: {
            x: x = 100,
            y: y = 100
        } = {
            x: 100,
            y: 100
        },
        collision: {
            collisionMouse: collisionMouse = false, 
            collisionOther: collisionOther = false,
            collisionBorder: collisionBorder = false
        } = {
            collisionMouse: false, 
            collisionOther: false,
            collisionBorder: false
        },
        negativeX: negativeX = false, 
        negativeY: negativeY = false,
        name: name = false, 
        type: type = "hard",
        connect: {
            connectMouse: connectMouse = false, 
            connectColor: connectColor = false, 
            connectNear: connectNear = "rgba(0,0,0,0.25)",
            connectRadius: connectRadius = 0
        } = {
            connectMouse: false, 
            connectColor: false, 
            connectNear: "rgba(0,0,0,0.25)",
            connectRadius: 0
        }
    } = console.error("Failed to create new particle!")){
        // Set all
        const colors = ["red","green","yellow","pink","purple","black","orange","orangered","blue","gold","violet"];
        let verify = 0;
        for(let i=0; i<amount; i++){
            if(MESSAGES && amount > 2000 && verify == 0){
                if(confirm("Unexcepted high number of Particle detected\n Are you sure to do this, your browser maybe stop working Correcly!")){
                    verify = 1;
                }
            }
            if(color == "random"){
                this.color = colors[Math.round(Math.random()*10)]
            } else {
                this.color = color;
            }
            this.radius = radius;
            if(i != amount){
                this.x = Math.round(Math.random()*(x*10));
                this.y = Math.round(Math.random()*(y*10));
            } else {
                this.x = x;
                this.y = y;
            }
            this.collisionMouse = collisionMouse;
            this.collisionOther = collisionOther;
            this.collisionBorder = collisionBorder;
            if(amount != 1){
                if(Math.round(Math.random()) == 0){
                    this.negativeX = false 
                } else {
                    this.negativeX = true
                }
                if(Math.round(Math.random()) == 0){
                    this.negativeY = false 
                } else {
                    this.negativeY = true
                }
            } else {
                this.negativeX = negativeX;
                this.negativeY = negativeY;
            }
            this.type = type;
            if(this.type === undefined){
                this.type = "hard";
            }
            this.connectMouse = connectMouse;
            this.connectColor = connectColor;
            this.connectNear = connectNear;
            this.connectRadius = connectRadius;
            // if name not given return with an error
            if(name === undefined){
                console.error("Some variables werent given!");
                return null;
            }
            this.name = name;
            // Insert into array
            PARTICLE.push({
                name: this.name,
                type: this.type,
                color: this.color,
                radius: this.radius,
                PosX: this.x,
                PosY: this.y,
                collisionMouse: this.collisionMouse,
                collisionOther: this.collisionOther,
                collisionBorder: this.collisionBorder,
                negativeX: this.negativeX,
                negativeY: this.negativeY,
                connectMouse: this.connectMouse,
                connectColor: this.connectColor,
                connectNear: this.connectNear,
                connectRadius: this.connectRadius,
                counter: 0,
                canvas: CANVAS,
                avoidCounter: 0
            })
        }
    }

    interface({
        function: functionName,
        css: {
            width: width = "100px",
            height: height = "250px",
            top: top = "5px",
            right: right = "10px",
            backgroundColor: bgC = "transparent",
            borderRadius: borderRadius = "0px",
            border: border,
            boxShadow: boxShadow
        } = {
            width: "100px",
            left: "250px",
            top: "5px",
        }

        
    }){
        // If no FunctionName given stop
        (functionName === undefined) ? console.error("No Function given in \t Particle.interface({ })") :
        // Lets set all
        this.width = width;
        this.height = height;
        this.top = top;
        this.right = right;
        this.bgC = bgC;
        this.borderRadius = borderRadius;
        this.border = border;
        this.boxShadow = boxShadow;

        // Create the main DOM-Element
        let mainObj = document.createElement("form");
        mainObj.setAttribute("id", "Particle-Interface");
        mainObj.setAttribute("onmouseout", functionName);
        mainObj.style.position = "fixed";
        mainObj.style.zIndex = 1000;
        mainObj.style.display = "flex";
        mainObj.style.flexDirection = "column";
        mainObj.style.alignItems = "center";
        mainObj.style.justifyContent = "space-between";
        mainObj.style.minWidth = this.width;
        mainObj.style.minHeight = this.height;
        mainObj.style.top = this.top;
        mainObj.style.left = (window.innerWidth - this.right);
        mainObj.style.backgroundColor = this.bgC;
        mainObj.style.borderRadius = this.borderRadius;
        mainObj.style.border = this.border;
        mainObj.style.boxShadow = this.boxShadow;
        document.querySelector("body").appendChild(mainObj);

        // HEADER
        let header = document.createElement("h1");
        header.setAttribute("onmousedown", "drag('#Particle-Interface')");
        header.setAttribute("onmouseup", "dragReset()");
        header.innerHTML = "Interface"
        header.style.margin = "0px";
        header.style.marginBottom = "10px";
        header.style.color = "rgba(0,0,0,0.75)";
        header.style.fontFamily = "monspace";
        header.style.fontWeight = "100";
        header.style.fontShadow = "1px 1px 2px black";
        mainObj.appendChild(header);

        // create the slider
        let value = ["2000", "250", "200"];
        let headerText = ["Amount", "Radius", "ConnectRadius"];
        for(var i=0; i<=headerText.length-1; i++){
            // header
            let header = document.createElement("h1");
            header.innerHTML = headerText[i]
            header.style.pointerEvents = "none";
            header.style.margin = "0px";
            header.style.marginBottom = "-10px";
            header.style.color = "rgba(0,0,0,0.75)";
            header.style.fontFamily = "monspace";
            header.style.fontWeight = "100";
            header.style.fontShadow = "1px 1px 2px black";
            header.style.fontSize = "1.25rem";
            mainObj.appendChild(header);
            // slider
            let slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("id", headerText[i]);
            slider.setAttribute("min", "0");
            slider.setAttribute("max", value[i]);
            slider.setAttribute("value", "500");
            slider.setAttribute("class", "slider");
            slider.style.margin = "10px";
            mainObj.appendChild(slider);
        }
        // Create the Checkboxes
        headerText = ["CollisionMouse", "CollisionOther", "CollisionBorder", "ConnectMouse", "ConnectNear"];
        for(var i=0; i<=headerText.length-1; i++){
            // header
            let header = document.createElement("h1");
            header.innerHTML = headerText[i]
            header.style.pointerEvents = "none";
            header.style.margin = "0px";
            header.style.marginBottom = "-10px";
            header.style.color = "rgba(0,0,0,0.75)";
            header.style.fontFamily = "monspace";
            header.style.fontWeight = "100";
            header.style.fontShadow = "1px 1px 2px black";
            header.style.fontSize = "1.25rem";
            mainObj.appendChild(header);
            // CheckBoxes
            let slider = document.createElement("input");
            slider.setAttribute("type", "checkbox");
            slider.setAttribute("checked", "checked");
            slider.setAttribute("id", headerText[i]);
            slider.setAttribute("class", "slider");
            slider.style.margin = "10px";
            mainObj.appendChild(slider);
        }
        let slider = document.createElement("input");
        slider.setAttribute("type", "text");
        slider.setAttribute("id", "Color");
        slider.setAttribute("class", "slider");
        slider.setAttribute("value", "rgba(0,0,0,0)");
        slider.style.margin = "10px";
        slider.style.padding = "10px";
        slider.style.border = "none";
        slider.style.borderRadius = "10px";
        slider.style.outline = "none";
        slider.style.backgroundColor = "rgba(255,0,0,0.1)";
        mainObj.appendChild(slider);
    }

    render( speed, curve){
        if(speed === undefined){
            speed=Math.random()*50;
            SPEED = speed
            console.error("No SPEED given :("+
            "\n I set the SPEED to: "+SPEED);
        }
        SPEED=speed/10;
        if(MESSAGES){
            console.log("SPEED: "+SPEED)
        }
        function render() {
            // Retry for ervery particle
            for(let i = 0; i < PARTICLE.length; i++){
                // set Variables
                let start = PARTICLE[i].PosX;
                let collisionOther = PARTICLE[i].collisionOther;
                let collisionBorder = PARTICLE[i].collisionBorder;
                let collisionMouse = PARTICLE[i].collisionMouse;
                let radius = PARTICLE[i].radius;
                let negativeX = PARTICLE[i].negativeX;
                let negativeY = PARTICLE[i].negativeY;
                let PosY = PARTICLE[i].PosY;
                let counter = PARTICLE[i].counter;
                let end, middle;

                // Get the right Canvas
                if(i == 0){
                    CANVAS =  PARTICLE[i].canvas;
                    CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
                    CTX = CANVAS.getContext("2d");
                } else 
                if(!(PARTICLE[i].canvas == PARTICLE[i-1].canvas)){
                    CANVAS =  PARTICLE[i-1].canvas;
                    CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
                    CANVAS =  PARTICLE[i].canvas;
                    CTX = CANVAS.getContext("2d");
                }
                
                // Curves will come later
                if(curve === undefined){
                    // Border Collision
                    if(collisionBorder){
                        // if Left or Right border
                        if((start+radius) > window.innerWidth  && counter == 0){
                            PARTICLE[i].negativeX = true;
                        } else if((start-radius) < 0  && counter == 0) {
                            PARTICLE[i].negativeX = false;
                        } else if((start+radius) > window.innerWidth){
                            PARTICLE[i].negativeY = true;
                            PARTICLE[i].counter = counter-1;
                        } else if((start-radius) < 0) {
                            PARTICLE[i].negativeY = false;
                            PARTICLE[i].counter = counter-1;
                        }
                        // for borderhitted
                        if(negativeX && counter == 0){
                            // Set the new cords depending on the SPEED
                            end = start-SPEED;
                        } else if(!negativeX && counter == 0){
                            end = SPEED+start;
                        } else if(negativeX){
                            end = SPEED+start;
                        } else if(!negativeX){
                            end = start-SPEED;
                        } 
                        // If Top or Bottom border
                        if((PosY+radius) > window.innerHeight && counter == 0){
                            PARTICLE[i].negativeY = false;
                        } else if((PosY-radius) < 0 && counter == 0) {
                            PARTICLE[i].negativeY = true;
                        } else if((PosY+radius) > window.innerHeight){
                            PARTICLE[i].negativeY = true;
                            PARTICLE[i].counter = counter-1;
                        } else if((PosY-radius) < 0) {
                            PARTICLE[i].negativeY = false;
                            PARTICLE[i].counter = counter-1;
                        }
                        // for borderhitted
                        if(negativeY && counter == 0){
                            // Set the new cords depending on the SPEED
                            middle = (SPEED+Math.round(Math.random())*0.5)+PosY;
                        } else if(!negativeY && counter == 0){
                            middle = PosY-(SPEED+Math.round(Math.random())*0.5);
                        } else if(negativeY){
                            middle = PosY-(SPEED+Math.round(Math.random())*0.5);
                        } else if(!negativeY){
                            middle = (SPEED+Math.round(Math.random())*0.5)+PosY;
                        } 
                    } else
                    // Dont work atm
                    if(!collisionBorder){
						end = start+SPEED;
						middle = PosY+SPEED
                        // reset if border hitted
                        if((start+radius) > window.innerWidth){
                            end=Math.round( Math.random()*window.innerWidth*1.5)-window.innerWidth;
                        }
                        if((middle+radius) > window.innerHeight){
							middle = Math.round(Math.random()*window.innerHeight)-window.innerHeight;
                        }
                    }
                    // Check for Collison with the Mouse
                    if(collisionMouse){
                        let mouseX = MOUSE.x
                        let mouseY = MOUSE.y
                        let mouseRadius = MOUSE.radius
                        let distance = Math.sqrt((end-mouseX)*(end-mouseX)+(middle-mouseY)*(middle-mouseY))
                        // Calculate a circle and the distance between the the Mouse and the Particle
                        if(distance < mouseRadius+radius){
                            // Check where the collision is to make it bouncy correct
                            //right
                            PARTICLE[i].avoidCounter = PARTICLE[i].avoidCounter + 1 ;
                            if(distance < mouseRadius*0.25){
                                if(counter === 0){
                                    PARTICLE[i].counter = 1;
                                } else {
                                    PARTICLE[i].counter = 0;
                                }
                            }
                            if(end > mouseX){
                                end = end+(mouseRadius/distance)*SPEED;
                            } else 
                            //left
                            if(end < mouseX){
                                end = end-(mouseRadius/distance)*SPEED;
                            }
                            // top
                            if(middle < mouseY){
                                middle = middle-(mouseRadius/distance)*SPEED;
                            } else 
                            // bottom
                            if(middle > mouseY){
                                middle = middle+(mouseRadius/distance)*SPEED;
                            }
                            if(PARTICLE[i].avoidCounter >= 100 && !collisionOther){
                                if(Math.round(Math.random()) == 1){
                                    PARTICLE[i].negativeX = true;
                                } else{
                                    PARTICLE[i].negativeX = false;
                                }
                                if(Math.round(Math.random()) == 1){
                                    PARTICLE[i].negativeY = true;
                                } else {
                                    PARTICLE[i].negativeY = false;
                                }
                                middle = Math.round(Math.random()*window.innerHeight);
                                end = Math.round(Math.random()*window.innerWidth);
                                PARTICLE[i].avoidCounter = 0;
                            }
                        }
                    }
                    
                    // Detect the Collision with an other Particle
                    if(collisionOther){
                        for(let x=0; x < PARTICLE.length; x++){
                            if(x != i){
                                if(PARTICLE[x].collisionOther){
                                    let distance = Math.sqrt((end-PARTICLE[x].PosX)*(end-PARTICLE[x].PosX)+(middle-PARTICLE[x].PosY)*(middle-PARTICLE[x].PosY))
                                    // Calculate a circle and the distance between the the Mouse and the Particle
                                    if(distance < PARTICLE[x].radius+radius){
                                        // Check where the collision is to make it bouncy correct
                                        // right
                                        if(end > PARTICLE[x].PosX){
                                            PARTICLE[i].negativeX = false;
                                        } else 
                                        //left
                                        if(end < PARTICLE[x].PosX){
                                            PARTICLE[i].negativeX = true;
                                        }
                                        // top
                                        if(middle < PARTICLE[x].PosY){
                                            PARTICLE[i].negativeY = false;
                                        } else 
                                        // bottom
                                        if(middle > PARTICLE[x].PosY){
                                            PARTICLE[i].negativeY = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // and make the new obj
                    if(PARTICLE[i].connectNear){
                        // Connect to particle in the Radius
                        for(let x=0; x<PARTICLE.length; x++){
                            let connectRadius = PARTICLE[i].connectRadius;
                            let distance = Math.sqrt((start-PARTICLE[x].PosX)*(start-PARTICLE[x].PosX)+(PosY-PARTICLE[x].PosY)*(PosY-PARTICLE[x].PosY))
                            if(connectRadius+radius+radius > distance){
                                CTX.beginPath();
                                CTX.moveTo(start, PosY);
                                CTX.lineTo(PARTICLE[x].PosX, PARTICLE[x].PosY);
                                // Wave from top
                                //CTX.quadraticCurveTo(PARTICLE[x].PosX, start, PARTICLE[x].PosY, PosY);
                                // Horizontal Lines
                                //CTX.quadraticCurveTo(PARTICLE[x].PosX, PosY, PARTICLE[x].PosX, PosY);
                                // Sunshine
                                //CTX.quadraticCurveTo(end*2, middle*2, start, PosY);
                                // twisted
                                //CTX.quadraticCurveTo(PARTICLE[x].PosX, PARTICLE[x].PosY, start-radius*0.5, PosY);
                                // Try your self some cool effects
                                //CTX.quadraticCurveTo(x1, y1, x2, y2);
                                CTX.strokeStyle = PARTICLE[i].connectColor;
                                CTX.stroke();
                            }
                        }
                    }
                    // connect to the mouse
                    if(PARTICLE[i].connectMouse){
                        let connectRadius = PARTICLE[i].connectRadius;
                        if(connectRadius != undefined){
                            let distance = Math.sqrt((start-MOUSE.x)*(start-MOUSE.x)+(PosY-MOUSE.y)*(PosY-MOUSE.y))
                            if(connectRadius+radius+radius > distance){
                                CTX.beginPath();
                                CTX.moveTo(start, PosY);
                                CTX.lineTo(MOUSE.x, MOUSE.y);
                                // Half lines
                                //CTX.quadraticCurveTo(MOUSE.x, MOUSE.y, start, PosY);
                                // Curvy lines
                                //CTX.quadraticCurveTo(end*2, middle*2, MOUSE.x, MOUSE.y);
                                // Curve to the half
                                //CTX.quadraticCurveTo(MOUSE.x, MOUSE.y, start-radius*0.5, PosY);
                                // Try your self yome coll effects
                                //CTX.quadraticCurveTo(x1, y1, x2, y2);
                                CTX.strokeStyle = PARTICLE[i].connectColor;
                                CTX.stroke();
                            }
                        } else {
                            CTX.beginPath();
                            CTX.moveTo(start, PosY);
                            CTX.lineTo(MOUSE.x, MOUSE.y)
                            CTX.strokeStyle = PARTICLE[i].connectColor;
                            CTX.stroke()
                        }
                    }
                    CTX.beginPath()
                    // hard Particle
                    if(PARTICLE[i].type == "hard"){
                        CTX.fillStyle = PARTICLE[i].color;
                    } else {
                        // Soft Particle
                        var grd = CTX.createRadialGradient(start, PosY, 0, start, PosY, radius);
                        grd.addColorStop(0, PARTICLE[i].color);
                        grd.addColorStop(0.2, PARTICLE[i].color);
                        grd.addColorStop(1, "transparent");
                        CTX.fillStyle = grd;
                    }
                    CTX.arc(start,PosY,radius,0,2*Math.PI);
                    CTX.fill();
                    // Feed the array
                    PARTICLE[i].PosX = end;
                    PARTICLE[i].PosY = middle;
                }
            }
        }
        // Call with 60 FPS
        setInterval(() => {
            // but first clear
            render();
        }, 1000/60);
    }
    clear(){
        PARTICLE = [];
    }
    speed(speed){
        SPEED=speed/10;
    }
}