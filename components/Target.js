AFRAME.registerComponent("treasure",{
    init:function(){
        for (var i=1;i<11;i++){
            var id = "treasure"+i
            var posx=(Math.random()*100 + -50)
            var posy=(Math.random()*5 + 5)
            var posz=(Math.random()*60+ -40)
            var pos={x:posx,y:posy,z:posz}
            this.createtreasure(id,pos)
        }
    },
    createtreasure:function(id,pos){
       var island=document.querySelector("#island") 
       var treasure=document.createElement("a-entity")
       treasure.setAttribute("id",id)
       treasure.setAttribute("position",pos)
       treasure.setAttribute("gltf-model","./assets/treasure/model.gltf")
       island.appendChild(treasure)
    }
})



AFRAME.registerComponent("fish",{
    init:function(){
        for (var i=1;i<11;i++){
            var id = "fish"+i
            var posx=(Math.random()*100 + -50)
            var posy=(Math.random()* 5 + 5)
            var posz=(Math.random()*60 + -40)
            var pos={x:posx,y:posy,z:posz}
            this.createfish(id,pos)
        }
    },
    createfish:function(id,pos){
       var land=document.querySelector("#island") 
       var fish=document.createElement("a-entity")
       fish.setAttribute("id",id)
       fish.setAttribute("position",pos)
       fish.setAttribute("scale",{ x: 0.3, y: 0.3, z: 0.3 })
       fish.setAttribute("rotation", { x: 0, y: 180, z: 0 });
       fish.setAttribute("gltf-model","./assets/fish/scene.gltf")
       fish.setAttribute("animation", {
        property: "position",
        to: "100 10 -20",
        loop: "true",
        dur: 20000
      });
      fish.setAttribute("animation-mixer", {});
       land.appendChild(fish)
    }
})
