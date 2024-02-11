class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement('h2')
        this.reset = createButton("reset")
        this.rules = createElement('h4')

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.rules.hide();
    }
    view(){
        
        this.input.position(displayWidth/2-40,displayWidth/2-80)

        this.button.position(displayWidth/2+30,displayHeight/2)
        var title = createElement('h1');
        title.position(displayWidth/2-50,0)
       // title.html("4 Player Online Car Race")
        this.reset.position(displayWidth-150,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("Details Uploaded "+player.name +"Player: "+playerCount+"/4")
            this.greeting.position(displayWidth/2-100,displayHeight/4-50)
           
            this.rules.html("Rules: Use arrow Keys to move. Moving diagonally is faster. Don't hit teleporters, lasers, or slow pads. Press spacebar for boost.")
            this.rules.position(displayWidth/2-300,displayHeight/4+50)
        })
        this.reset.mousePressed(()=>{
            game.updateGameState(0);
            player.updateCount(0);
            player.clearPlayerDetails();
            Player.finished(0);
        })
    }
}
