AFRAME.registerComponent("collider-fish", {
    schema : {
        
    },
    init: function (){
        for (var i = 1; i<=20; i++) {
            var id = `fish${i}`
            var posx = Math.random()*100+(-50)
            var posy = Math.random()*5+(5)
            var posz = Math.random()*60+(-40)
            var position = {x: posx, y: posy, z: posz}
            this.flyingFish(id, position)
        }
    },
    update: function (){

    },
    tick: function (){      
        
    },
    flyingFish: function(id, position) {
        var fishel = document.createElement("a-entity")
        fishel.setAttribute("gltf-model", "./assets/models/fish/scene.gltf")
        fishel.setAttribute("id", id)
        fishel.setAttribute("position", position)
        fishel.setAttribute("rotation", {x: 0, y: 180, z: 0})
        fishel.setAttribute("scale", {x: 0.3, y: 0.3, z: 0.3})
        fishel.setAttribute("animation", {
            property: "position",
            to: "100 10 -20",
            loop: "true",
            dur: 20000
          });
        fishel.setAttribute("animation-mixer", {})
        fishel.setAttribute("game-play", {elementId: `#${id}`})
        fishel.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        var terrainel = document.querySelector("#fishModels")
        terrainel.appendChild(fishel)
    }
})
