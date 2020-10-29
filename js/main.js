var part;
window.onload = async function() {
  //               Visual(NUMBER ,      STRING,    NUMBER, STRING         , BOOLEAN);
  //               Visual(MouseRadius , Canvas ID, zIndex, backgroundColor, Messages);
    var vis = new Visual(200, "#particle", "", "");
  //flashLight( Radius , Position Type, Height, Width, Attach to mouse, movement, PosX, PosY, speed);
    //vis.flashLight(25, "absolute", 5000, 5000, true)
  //spotLight( tempradius, tempcolor, tempposition, tempmouseAttach, tempmovement, PosX, PosY, tempduration)
    //vis.spotLight( 200, "red", "absolute", false, "", 0, 0, 1);
  //softLight( tempradius, tempcolor, tempintensity, tempposition, tempmouseAttach, tempmovement, PosX, PosY, tempduration)
    //vis.softLight( 200, "red", 70, "absolute", false, "", 50, 20, 10);
    //setInterval(() => {
    //  vis.startLight(2, "right", 4, true);
    //}, 8000);
    // new Particle( amount, color, radius, PosX, PosY, collisionMouse, collisionOther, collisionBorder, name)
    part = new Particle({
      amount: 250,
      color: "transparent",
      pos: {
        x: 199,
        y: 99
      },
      collision: {
        collisionMouse: true,
        collisionOther: true,
        collisionBorder: true
      },
      radius: 10,
      type: "hard",
      connect: {
        connectColor: "rgba(0,0,0,0.15)",
        connectNear: true,
        connectRadius: 100
      }
    });
	part.render(80);
    // Clear after 10 seconds
      //setTimeout(() => {
      //  part.clear()
      //}, 18000);
  part.interface({
    function: "update()",
    css: {
      width: "100px",
      height: "0",
      top: "5px",
      right: "10px",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: "20px",
      boxShadow: "1px 1px 4px black"
    }
  })
}
function update() {
  var amount = document.querySelector("#Amount").value/2;
  var radius = document.querySelector("#Radius").value/2;;
  var conRadius = document.querySelector("#ConnectRadius").value;
  var colMouse = document.querySelector("#CollisionMouse").checked;
  var colOther = document.querySelector("#CollisionOther").checked;
  var colBorder = document.querySelector("#CollisionBorder").checked;
  var conMouse = document.querySelector("#ConnectMouse").checked;
  var conNear = document.querySelector("#ConnectNear").checked;
  var color = document.querySelector("#Color").value;
  part.clear();
  new Particle({
      amount: Math.round(amount),
      color: color,
      pos: {
        x: 199,
        y: 99
      },
      collision: {
        collisionMouse: colMouse,
        collisionOther: colOther,
        collisionBorder: colBorder
      },
      radius: Math.round(radius),
      type: "hard",
      connect: {
        connectColor: color,
        connectNear: conNear,
        connectMouse: conMouse,
        connectRadius: Math.round(conRadius)
      }
    });
}
function start(){
	part.clear();
	document.getElementById("startVisual").style.transition = "linear 1s";
	document.getElementById("startVisual").style.transform = "scale(1000)";
	setTimeout(() => {
	document.getElementById("startVisual").style.display = "none";
  new Visual(200, "#startCanvas", -1, "black");
  new Particle({
    amount: 333,
    color: "rgba(255, 100, 0, 0.4)",
    radius: 2,
    pos: {
      x: 200,
      x: 200
    },
    collision: {
      collisionMouse: true,
      collisionBorder: false
    },
    connect: {
      connectColor: "",
      connectNear: false,
      connectMouse: false,
      connectRadius: 0
    },
    negativeX: true, negativeY: true
  });
  new Particle({
    amount: 333,
    color: "rgba(255, 0, 0, 0.25)",
    radius: 2,
    pos: {
      x: 200,
      x: 200
    },
    collision: {
      collisionMouse: true,
      collisionBorder: false
    },
    connect: {
      connectColor: "",
      connectNear: false,
      connectMouse: false,
      connectRadius: 0
    },
    negativeX: true, negativeY: true
  });
  new Particle({
    amount: 333,
    color: "rgba(250, 100, 100, 0.25)",
    radius: 2,
    pos: {
      x: 200,
      x: 200
    },
    collision: {
      collisionMouse: true,
      collisionBorder: false
    },
    connect: {
      connectColor: "",
      connectNear: false,
      connectMouse: false,
      connectRadius: 0
    },
    negativeX: true, negativeY: true
  });
  document.getElementById("mainSite").style.display = "block";
	}, 1000)
	document.getElementById("clickNotice").style.display = "none";
	document.getElementById("Particle-Interface").style.display = "none";
}
window.onscroll = () => {
  if(window.pageYOffset < 1000 && window.pageYOffset > 100){
    var b = 0.1;
    document.getElementById("navbarLinks").style.backgroundColor = "rgba(255, 255 ,255 ,0." + window.pageYOffset + ")";
    document.getElementById("navbarLinks").style.height = 100-window.pageYOffset/50 + "px";
    document.getElementById("navbarLinks").style.top = -30+window.pageYOffset/1000 + "px";
    document.getElementById("navbarLinks").style.boxShadow = "0px 0px " + window.pageYOffset/50 + "px black";
  }
}