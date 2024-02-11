class Game{
    constructor(){
    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val()
        })
    }
    start(){
        if(gameState===0){
            player = new Player()
            form = new Form()
            player.getCount();
            form.view();
        }

    

      mushroom = [10]

      for(var i = 0; i<10;i++){
        var randX = Math.floor(Math.random() * 1400) + 300;
        var randY = Math.floor(-150-Math.random() * 3400);
        console.log(randX)
        console.log(randY)

        mushroom[i] = createSprite(randX,randY)
        mushroom[i].addImage(m1) 

      }



      laser = [10]

      for(var i = 0; i<2;i++){
        var randX = Math.floor(Math.random() * 1400) + 300;
        var randY = -4000;
        console.log(randX)
        console.log(randY)

        laser[i] = createSprite(randX,randY)
        laser[i].addImage(l1) 

        var details = 'lasers/laser'+ i
      database.ref(details).set({
        wallX: randX,
        wallY: randY
      })
      }

      

       wall = [5]

      for(var i = 0; i<10;i++){
        var randX = Math.floor(Math.random() * 1400) + 300;
        var randY = Math.floor(-150-Math.random() * 3400);
        console.log(randX)
        console.log(randY)

        wall[i] = createSprite(randX,randY)
        wall[i].addImage(w1) 

        var details = 'walls/wall'+ i
      database.ref(details).set({
        wallX: randX,
        wallY: randY
      })
      }

      teleporter = [5]

      for(var i = 0; i<10;i++){
        var randX = Math.floor(Math.random() * 1400) + 300;
        var randY = Math.floor(-150-Math.random() * 3400);
        console.log(randX)
        console.log(randY)

        teleporter[i] = createSprite(randX,randY)
        teleporter[i].addImage(t1) 

        var details = 'teleporters/teleporter'+ i
      database.ref(details).set({
        wallX: randX,
        wallY: randY
      })
      }


      
        
        car1 = createSprite(100,200)
        car1.addImage(c1)

        car2 = createSprite(300,200)
        car2.addImage(c2)

        car3 = createSprite(500,200)
        car3.addImage(c3)

        car4 = createSprite(700,200)
        car4.addImage(c4)

       

        
      this.greeting1 = createElement('h1')
        this.greeting2 = createElement('h1')
      this.greeting3 = createElement('h1')
      this.greeting4 = createElement('h1')

       this.greeting5 = createElement('h1')


        carsArray = [car1, car2, car3, car4]

    }
    updateGameState(gameState){
        database.ref('/').update({
            gameState: gameState
        })
    }
    playGame(){
      document.getElementById("start").innerHTML = "Start";
         form.hide(); 
         Player.playerDetails(); 
         player.readFinished();
         if(playerDetails !== undefined){ 
             background("green")
             image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
             var index = 0; 
             var s = 200; 
             var x = 200; 
             var y;
             for(var plr in playerDetails){ 
                 index = index + 1 ; 
                 x = 300+s+playerDetails[plr].playerX; 
                 s+= 200;
                 y = displayHeight - playerDetails[plr].playerDistance; 
                 carsArray[index-1].x = x; 
                 carsArray[index-1].y = y; 
                 if (index === player.index){ 
                     ellipseMode(CENTER);
                     fill("red")
                     ellipse(carsArray[index-1].x,carsArray[index-1].y,70,70)
                     camera.position.x = displayWidth/2; 
                     camera.position.y = carsArray[index-1].y }
                 }
          }


            
         
        if(player.index == 1 && car1.isTouching(car2)){
            if(car1.x<car2.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 1 && car1.isTouching(car3)){
              if(car1.x<car3.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 1 && car1.isTouching(car4)){
              if(car1.x<car4.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }

        if(player.index == 2 && car2.isTouching(car1)){
              if(car2.x<car1.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 2 && car2.isTouching(car3)){
              if(car2.x<car3.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 2 && car2.isTouching(car4)){
              if(car2.x<car4.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }

        if(player.index == 3 && car3.isTouching(car1)){
             if(car3.x<car1.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 3 && car3.isTouching(car2)){
             if(car3.x<car2.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 3 && car3.isTouching(car4)){
              if(car3.x<car4.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }

        if(player.index == 4 && car4.isTouching(car1)){
              if(car4.x<car1.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 4 && car4.isTouching(car2)){
              if(car4.x<car2.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }
        if(player.index == 4 && car4.isTouching(car3)){
              if(car4.x<car3.x){
                player.x -= 14
            }else{
                player.x += 14
            }
              player.update();
          }





        for(var i = 0; i<10; i++){
            if(player.index == 1 && car1.isTouching(wall[i])){
                player.distance -= 6
              
                player.update();
            }
        }

        for(var i = 0; i<10; i++){
            if(player.index == 2 && car2.isTouching(wall[i])){
                player.distance -= 6
              
                player.update();
            }
        }

        for(var i = 0; i<10; i++){
            if(player.index == 3 && car3.isTouching(wall[i])){
                player.distance -= 6
              
                player.update();
            }
        }

        for(var i = 0; i<10; i++){
            if(player.index == 4 && car4.isTouching(wall[i])){
                player.distance -= 6
              
                player.update();
            }
        }




      for(var i = 0; i<10; i++){
          if(player.index == 1 && car1.isTouching(teleporter[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 2 && car2.isTouching(teleporter[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 3 && car3.isTouching(teleporter[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 4 && car4.isTouching(teleporter[i])){
              player.distance = 10

              player.update();
          }
      }



      for(var i = 0; i<2; i++){
          if(player.index == 1 && car1.isTouching(laser[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<2; i++){
          if(player.index == 2 && car2.isTouching(laser[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<2; i++){
          if(player.index == 3 && car3.isTouching(laser[i])){
              player.distance = 10

              player.update();
          }
      }

      for(var i = 0; i<2; i++){
          if(player.index == 4 && car4.isTouching(laser[i])){
              player.distance = 10

              player.update();
          }
      }




      for(var i = 0; i<10; i++){
          if(player.index == 1 && car1.isTouching(mushroom[i])){
              xyz += 10
              mushroom[i].destroy()
              player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 2 && car2.isTouching(mushroom[i])){
            xyz += 10
            mushroom[i].destroy()
            player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 3 && car3.isTouching(mushroom[i])){
            xyz += 10
            mushroom[i].destroy()
            player.update();
          }
      }

      for(var i = 0; i<10; i++){
          if(player.index == 4 && car4.isTouching(mushroom[i])){
            xyz += 10
            mushroom[i].destroy()
            player.update();
          }
      }

       

         
         this.greeting5.html("Boost: "+xyz)
         this.greeting5.position(displayWidth-275,displayHeight-300)
   
        if(keyIsDown(32) && player.index !== null && xyz>0){ 
          xyz = xyz-1
          player.distance +=20 
          player.update(); 
        } 
       

        
          if(keyIsDown(UP_ARROW) && player.index !== null){ 
              player.distance +=10 
              player.update(); 
            } 
            if(keyIsDown(DOWN_ARROW) && player.index !== null){ 
                player.distance -=10 
                player.update(); 
              } 
            if(keyIsDown(LEFT_ARROW) && player.index !== null){ 
              player.x -=13 
              player.distance += 4
              player.update(); 
            } 
            if(keyIsDown(RIGHT_ARROW) && player.index !== null){ 
                player.x +=13
                player.distance += 4
                player.update(); 
              } 


          if(player.index == 1 && car1.x<331){
              player.x +=13
              player.update();
          }
       
          if(player.index == 1 && car1.x>1605){
              player.x -=13
              player.update();
          }
        
        if(player.index == 2 && car2.x<331){
              player.x +=13
              player.update();
          }
          if(player.index == 2 && car2.x>1605){
              player.x -=13
              player.update();
          }

        if(player.index == 3 && car3.x<331){
              player.x +=13
              player.update();
          }
          if(player.index == 3 && car3.x>1605){
              player.x -=13
              player.update();
          }

        if(player.index == 4 && car4.x<331){
              player.x +=13
              player.update();
          }
          if(player.index == 4 && car4.x>1605){
              player.x -=13
              player.update();
          }


            if(player.distance>5350){
                gameState = 2
                if(player.carsAtEnd<4){

            
                player.carsAtEnd += 1
                }
                Player.finished(player.carsAtEnd);
                player.place = player.carsAtEnd;
                player.update();
            }
            if(player.carsAtEnd === 4){
                game.updateGameState(2);

            }
            drawSprites(); 
        }
    end(){
    /*  var place;
      database.ref('finished').on("value",(data)=>{
            place = data.val()
        })*/

      var place = player.place;
      
      if(player.index == 1){
        
        this.greeting1.html("YOUR PLACE: "+place)
        this.greeting1.position(displayWidth/2-70,displayHeight/4)
      }
      if(player.index == 2){
        this.greeting2.html("YOUR PLACE: "+place)
        this.greeting2.position(displayWidth/2-70,displayHeight/4)
      }
      if(player.index == 3){
        this.greeting3.html("YOUR PLACE: "+place)
        this.greeting3.position(displayWidth/2-70,displayHeight/4)
      }
      if(player.index == 4){
        this.greeting4.html("YOUR PLACE: "+place)
        this.greeting4.position(displayWidth/2-70,displayHeight/4)
      }
      
        
    }
    
}
