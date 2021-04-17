function coin(){
  
  coins = createSprite(100, -40, 20, 20);
  coins.addImage("coins", coinImage);
  coins.scale = 0.5;
  coins.lifetime = 120;
  coinGp.add(coins);
  
  //Asigning random places for the coins
  if(frameCount%30 === 0){
    switch(coinRand) {
        case 1: coins.x = 100;
                coins.velocityY = +(6 + 3*score/100);
                break;
        case 2: coins.x = 300;
                coins.velocityY = +(6 + 3*score/100);
                break;
        case 3: coins.x = 500;
                coins.velocityY = +(6 + 3*score/100);
                break;
        default: break;
    }
  }
}