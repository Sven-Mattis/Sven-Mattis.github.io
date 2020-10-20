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
    var part = new Particle({
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
    part.render(1);
    // Clear after 10 seconds
      //setTimeout(() => {
      //  part.clear()
      //}, 18000);
}