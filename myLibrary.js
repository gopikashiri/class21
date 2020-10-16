function isTouching(first,second){
    if(first.x - second.x < first.width/2 + second.width/2 &&
      first.x - second.x < first.width/2 + second.width/2&&
      second.y - first.y < first.height/2 + second.height/2 &&
       first.y - second.y < first.height/2 + second.height/2){
      
        return true;
     }
     else{
      return false;
     }
    
  }
  
  function bounceOff(ball1,ball2){
    if(ball1.x - ball2.x < ball2.width/2 + ball1.width/2 &&
      ball2.x - ball1.x < ball2.width/2 + ball1.width/2){
    
        ball1.velocityX = ball1.velocityX * (-1);
        ball2.velocityX = ball2.velocityX * (-1);
    
      }
      if (ball1.y -ball2.y < ball2.height/2 + ball1.height/2
        && ball2.y - ball1.y < ball2.height/2 + ball1.height/2){
          ball1.velocityY = ball1.velocityY * (-1);
          ball2.velocityY = ball2.velocityY * (-1);
      }
  }