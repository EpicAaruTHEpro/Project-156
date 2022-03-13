AFRAME.registerComponent("diver-rotation-reader", {
    schema : {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default : 0}
    },
    init: function (){
        window.addEventListener("keydown", (e) => {

        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");

        var diverRotation = this.data.speedOfRotation;      
        var diverPosition = this.data.speedOfAscent;


            if (e.key === "ArrowRight") {
                if (diverRotation.x < 60) {

                    diverRotation.x += 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }

            if (e.key === "ArrowLeft") {
                if (diverRotation.x > -60) {

                    diverRotation.x -= 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }

            if (e.key === "w") {
                //if (diverRotation.x > -60) {

                    diverPosition.z -= 0.5
                    this.el.setAttribute("rotation", diverRotation)
                //}
            }

            if (e.key === "s") {
                //if (diverRotation.x > -60) {

                    diverPosition.z += 0.5
                    this.el.setAttribute("rotation", diverRotation)
                //}
            }

            if (e.key == "ArrowUp") {
                if (diverRotation.z < 20) {
                    diverRotation.z +=0.5
                    this.el.setAttribute("rotation", diverRotation)
                }

                if (diverPosition.y < 20) {
                    diverPosition.y += 0.1
                    this.el.setAttribute("position", diverPosition)
                }
            }

            if (e.key == "ArrowDown") {
                if (diverRotation.z > -20) {
                    diverRotation.z -=0.5
                    this.el.setAttribute("rotation", diverRotation)
                }

                if (diverPosition.y > -20) {
                    diverPosition.y -= 0.1
                    this.el.setAttribute("position", diverPosition)
                }
            }
            
        })  
    },
    update: function (){

    },
    tick: function (){      
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        this.el.setAttribute("rotation", {x: mapRotation.x, y: mapRotation.y, z: mapRotation.z})
    }
})