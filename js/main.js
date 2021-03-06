let firstLight, secondLight, thirdLight, fourthLight, vis, part, scrolled=false;
window.onload = async function() {
  setInterval(() => {
    if(window.pageYOffset < window.innerHeight-100 && !(scrolled)){
      window.scrollBy(0,window.pageYOffset/40+1);
    } else if(!scrolled) {
      scrolled=true
    }
    console.log(scrolled)
  }, 25);
  start();
  part.render(100);
  setTimeout(() => {
    document.getElementById("preloader").style.transition = "0.5s";
    document.getElementById("preloader").style.bottom = "-100%";
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 1500);
  }, 1000)
}
function start(){
  topCanvas();
  vis.flashLight(45, "absolute", 5000, 5000, true);
  firstLight = vis.softLight(100, "rgba(255, 0, 0, 0.5)", 40, "fixed", false, "middle", 10, 120);
  secondLight = vis.softLight(100,"rgba(255, 200, 0, 0.52))", 30, "fixed", false, "middle", 20, 150);
  thirdLight = vis.softLight(100, "rgba(255, 200, 0, 0.52)", 50, "fixed", false, "middle", 80, 110);
  fourthLight = vis.softLight(100,"rgba(255, 200, 0, 0.52)", 40, "fixed", false, "middle", 30, 120);
  fithLight = vis.softLight(100,  "rgba(255, 200, 0, 0.52)", 70, "fixed", false, "middle", 70, 190);
  sixthLight = vis.softLight(100, "rgba(255, 0, 100, 0.6)", 60, "fixed", false, "middle", 10, 110);
  eigthLight = vis.softLight(100, "rgba(255, 0, 0, 0.5)", 80, "fixed", false, "middle", 50, 160);
  ninthLight = vis.softLight(100, "rgba(255, 0, 0, 0.4)", 20, "fixed", false, "middle", 60, 180);
  moveLights();
  document.getElementById("mainSite").style.display = "block";
  part.speed(100)
  let links = document.querySelectorAll("a");
  document.getElementById("navbarLinks").style.color = "white";
  for(var i = 0; i < links.length; i++){
    links[i].style.color = "rgb(" + (255-(window.pageYOffset/4)) + ", "+ (255-(window.pageYOffset/4)) + ", "+ (255-(window.pageYOffset/4)) + ")"
  }
  return part;
}
window.onscroll = () => {
  moveLights();
  document.getElementById("footer").style.height = window.pageYOffset/40+"px";
  if(window.pageYOffset < 1000 && window.pageYOffset > 100){
    let links = document.querySelectorAll("a");
    for(var i = 0; i < links.length; i++){
      links[i].style.color = "rgb(" + (255-(window.pageYOffset/4)) + ", "+ (255-(window.pageYOffset/4)) + ", "+ (255-(window.pageYOffset/4)) + ")"
    }
    document.getElementById("navbarLinks").style.color = "rgb(" + (255-(window.pageYOffset/10)) + ", "+ (255-(window.pageYOffset/2)) + ", "+ (255-(window.pageYOffset)) + ")";
    document.querySelector("#flashLight0").style.opacity = 1-window.pageYOffset/1000;
    document.querySelector("#flashLight0").style.display = "block";
    document.getElementById("navbarLinks").style.backgroundColor = "rgba(240, 240 ,240 ,0." + window.pageYOffset + ")";
    document.getElementById("navbarLinks").style.height = 100-window.pageYOffset/50 + "px";
    document.getElementById("navbarLinks").style.top = -30+window.pageYOffset/1000 + "px";
    document.getElementById("navbarLinks").style.boxShadow = "0px 0px " + window.pageYOffset/50 + "px black";
  }
  if(window.pageYOffset < 1){
    document.querySelector("#flashLight0").style.opacity = 1;
    document.getElementById("navbarLinks").style.color = "white";
    document.getElementById("navbarLinks").style.backgroundColor = "rgba(255, 255 ,255 ,0)";
    document.getElementById("navbarLinks").style.height = "100px";
    document.getElementById("navbarLinks").style.top = "-30px";
    document.getElementById("navbarLinks").style.boxShadow = "0px 0px 0px black";
  }
  if(window.pageYOffset < 1000 && window.pageYOffset > 800){
    part.clear();
    topCanvas();
    part.speed(100)
  }
  if(window.pageYOffset > 1000){
    part.clear();
    document.getElementById("navbarLinks").style.color = "rgba(200, 50, 0)";
    document.querySelector("#flashLight0").style.display = "none";
  }
  if(window.pageYOffset >= window.height-window.innerHeight-100){
    console.log("aisd")
  }
}
function moveLights() {
  vis.startLight(firstLight, {move: {x: 100-window.pageYOffset/100+"%", y: window.pageYOffset/100+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(secondLight, {move: {x: window.pageYOffset/110+"%", y: window.pageYOffset/50+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(thirdLight, {move: {x: 100-window.pageYOffset/92+"%", y: 50+window.pageYOffset/100+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(fourthLight, {move: {x: window.pageYOffset/56+"%", y: window.pageYOffset/230+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(fithLight, {move: {x: window.pageYOffset/70+"%", y: window.pageYOffset/40+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(sixthLight, {move: {x: 100-window.pageYOffset/120+"%", y: 50+window.pageYOffset/600+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(eigthLight, {move: {x: 100-window.pageYOffset/150+"%", y: window.pageYOffset/700+"%"}}, 0.00000000000000000000000000000001, false);
  vis.startLight(ninthLight, {move: {x: window.pageYOffset/200+"%", y: window.pageYOffset/800+"%"}}, 0.00000000000000000000000000000001, false);
}
function topCanvas(){
  vis = new Visual(200, "#startCanvas", 4, "black", false);
  part = new Particle({
    amount: 200,
    color: "orangered",
    radius: 1,
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
    amount: 200,
    color: "orangered",
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
    color: "rgba(200, 150, 150, 1)",
    radius: 1,
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
    amount: 33,
    color: "rgba(200, 100, 50, 0.5)",
    radius: 5,
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
  return part, vis;
}