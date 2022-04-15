//Terrain Rotation
AFRAME.registerComponent("island-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//scubadriver rotation component
AFRAME.registerComponent("scubadriver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var scubadriverRotation = this.data.speedOfRotation;      
      var scubadriverPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (scubadriverRotation.x < 10) {
          scubadriverRotation.x += 0.5;
          this.el.setAttribute("rotation", scubadriverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (scubadriverRotation.x > -10) {
          scubadriverRotation.x -= 0.5;
          this.el.setAttribute("rotation", scubadriverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (scubadriverRotation.z < 20) {
          scubadriverRotation.z += 0.5;
          this.el.setAttribute("rotation", scubadriverRotation);
        }
        if (scubadriverPosition.y < 2) {
          scubadriverPosition.y += 0.01;
          this.el.setAttribute("position", scubadriverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (scubadriverRotation.z > -10) {
          scubadriverRotation.z -= 0.5;
          this.el.setAttribute("rotation", scubadriverRotation);
        }
        if (scubadriverPosition.y > -2) {
          scubadriverPosition.y -= 0.01;
          this.el.setAttribute("position", scubadriverPosition);
        }
      }
    });
  }
});


