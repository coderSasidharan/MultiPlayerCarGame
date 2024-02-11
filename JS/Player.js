class Player{
    constructor(){
        this.name = null;
        this.index = 0;
        this.distance = 0;
        this.carsAtEnd = null;
        this.x = 0;
        this.place = 0;

    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val()
        })
    }
    update(){
        var details = 'players/player'+ this.index
        database.ref(details).set({
            playerName: this.name,
            playerDistance: this.distance,
            playerX: this.x,
            place: this.place
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    static playerDetails(){
        database.ref('players').on("value",(data)=>{
            playerDetails = data.val()
        })
    }
    clearPlayerDetails(){
        database.ref('players').set({
            playerDetails: []
        })
    }
    static finished(x){
       // var details = 'finished/finish'+ this.finish
        database.ref('/').update({
            finished: x,
           // finishedPlayer: this.name
        })
    }
    readFinished(){
        database.ref('finished').on("value",(data)=>{
            this.carsAtEnd = data.val();
        })
    }
}
