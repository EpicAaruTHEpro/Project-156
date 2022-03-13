AFRAME.registerComponent("game-play", {
    schema : {
        elementId: {type: "string", default: "#coin1"}
    },
    init: function() {
        let duration = 120
        let timerel = document.querySelector("#timer")
        this.startTimer(duration, timerel)
    },
    update: function (){
        this.isCollided(this.data.elementId)
    },
    tick: function (){      
        
    },
    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                console.log(elementId + "collided")
                this.updateTarget()
                this.updateScore()
            }

            else if (elementId.includes("#fish")) {
                console.log(elementId + "collided")
                this.gameOver()
            }
        })
    },
    updateScore: function (){
        var element = document.querySelector("#score")
        let count = element.getAttribute("text").value
        let currentScore = parseInt(count)
        currentScore+=50
        element.setAttribute("text", {value: currentScore})

    },
    updateTarget: function (){
        var element = document.querySelector("#target")
        let count = element.getAttribute("text").value
        let currentTargets = parseInt(count)
        if (currentTargets > 0) {
            currentTargets-=1
            element.setAttribute("text", {value: currentTargets})
        }

    },
    startTimer: function(duration, timerel) {
        let mins, secs
        setInterval(() => {
            if (duration >= 0) {
                mins = parseInt(duration/60)
                secs = parseInt(duration%60)
                if (mins < 10) {
                    mins = "0" + mins
                }

                if (secs < 10) {
                    secs = "0" + secs
                }

                timerel.setAttribute("text", {value:mins + ":" + secs})
                duration -= 1
            }

            else {
                this.gameOver()
            }
        }, 1000);
    },
    gameOver: function () {
        var diverEl = document.querySelector("#scuba");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        diverEl.setAttribute("dynamic-body", {
          mass: 1
        });
      },
    
})