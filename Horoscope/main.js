function drumRoll() {
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;

    if(month == 1 && day >= 20 || month == 2 && day <=18) {
        document.getElementById('sign').innerHTML='Aquarius'
    }else if(month== 2 && day >=19 || month ==3 && day <= 20){
        document.getElementById('sign').innerHTML='Pisces'
    }else if(month== 3 && day >=21 || month ==4 && day <= 19){
        document.getElementById('sign').innerHTML='Aries'
    }else if(month== 4 && day >=20 || month ==5 && day <= 20){
        document.getElementById('sign').innerHTML='Taurus'
    }else if(month== 5 && day >=21 || month ==6 && day <= 20){
        document.getElementById('sign').innerHTML='Gemini'
    }else if(month== 6 && day >=21 || month ==7 && day <= 22){
        document.getElementById('sign').innerHTML='Cancer' 
    }else if(month== 7 && day >=23 || month ==8 && day <= 22){
        document.getElementById('sign').innerHTML='Leo'
    }else if(month== 8 && day >=23 || month ==9 && day <= 22){
        document.getElementById('sign').innerHTML='Virgo'
    }else if(month== 9 && day >=23 || month ==10 && day <= 22){
        document.getElementById('sign').innerHTML='Libra'
    }else if(month== 10 && day >=23 || month ==11 && day <= 21){
        document.getElementById('sign').innerHTML='Scorpio'
    }else if(month== 11 && day >=22|| month ==12 && day <= 21){
        document.getElementById('sign').innerHTML='Sagittarius'
    }else if(month== 12 && day >=22 || month ==1 && day <= 19){
        document.getElementById('sign').innerHTML='Capricorn'
    }else{
        document.getElementById('sign').innerHTML="what planet are you from?"
    }                                                                  
}
