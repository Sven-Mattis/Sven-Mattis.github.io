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
    var part = new Particle( 500, "rgba(0,0,0,1)",5, 190, 100, true, true, true, true, true, "just a test", "hard", false, "rgba(255,100,0.01)", true, 100);
    part.render(100);
    // Clear after 10 seconds
      //setTimeout(() => {
      //  part.clear()
      //}, 18000);
}
