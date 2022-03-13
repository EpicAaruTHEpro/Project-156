AFRAME.registerComponent("target-coin", {
    schema : {
        
    },
    init: function (){
        for (var i = 1; i<=10; i++) {
            var id = `coin${i}`
            var posx = Math.random()*100+(-50)
            var posy = Math.random()*5+(5)
            var posz = Math.random()*60+(-40)
            var position = {x: posx, y: posy, z: posz}
            this.createCoins(id, position)
        }
    },
    update: function (){

    },
    tick: function (){      
        
    },
    createCoins: function(id, position) {
        var coinel = document.createElement("a-entity")
        coinel.setAttribute("material", "color", "#FF9100")
        coinel.setAttribute("geometry", {primitive: "circle", radius: 1})
        coinel.setAttribute("id", id)
        coinel.setAttribute("position", position)
        coinel.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        coinel.setAttribute("game-play", {elementId: `#${id}`})
        coinel.setAttribute("static-body", {shape: "sphere", sphereRadius: 10})
        var terrainel = document.querySelector("#treasureCoins")
        terrainel.appendChild(coinel)
    }
})
