import React from 'react'

const Converter = ({mili}) => {
        
       
    var hours = Math.floor((mili / 60) / 60);
    var minutes = (Math.floor(mili / 60)) % 60; 
    var seconds = mili % 60; 
       
    
 
   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
 

  return (
    <div>
          <p>   {hours}:{minutes}:{seconds}</p>        
    </div>    
  )
    }

export default Converter;

//  measured_at değerleini saniye cinsinden alıp çevirdim microsaniye alıp yapınca 0 oluyorlar

