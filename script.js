function computerPlay(){
    var result = Math.floor(Math.random() * 10);
    if( result <= 3){
        return 'rock';
    }
    else if(result <= 6){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}