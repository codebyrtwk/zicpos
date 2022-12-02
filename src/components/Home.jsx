import React, { useCallback } from 'react';
import "../css/Home.css";
import { useState,useEffect } from 'react';




function Home() {
  // const timer = setTimeout(function(){countDownObj.count(i - 1);},pause);
  const [count, setCount] = useState(10);
  const currentCount = count
  // password = "password";
  const startTimer = () => {
    
    const timer = setInterval(() => {
        setCount(count => {
          if (count !== 0) return count-1;
          clearInterval(timer);
          if(count === 0  ){
            alert("Your Time has been exhausted");
            setCount(10)
            // const quit = document.getElementById("quit")
            // // quit.style.display = "none";
            // quit.click();
            document.getElementById("quit").style.display = "none";
            document.getElementById("abc").style.display = "block";
            document.getElementById("text").style.color = "white";
            document.getElementById("button").style.display = "block";
            document.getElementById("text2").style.display= "none";
                     }
          return count;
          
      } )
    }, 1000)
    document.getElementById("quit").style.display = "block";
    document.getElementById("abc").style.display = "none";
    document.getElementById("text").style.color = "black";
    document.getElementById("button").style.display = "none";
    document.getElementById("text2").style.display= "block";
   
}
// const currentCount = count
  const quitTimer = () => {
    if(count > 0) {
      setCount(count)
    }
    document.getElementById("quit").style.display = "none";
    document.getElementById("abc").style.display = "block";
    document.getElementById("text").style.color = "white";
    document.getElementById("button").style.display = "block";
    document.getElementById("text2").style.display= "none";
 
}


return (
    <>
    <div class="split left">
  <div class="centered">
    {/* <img src="img_avatar2.png" alt="Avatar woman"> */}
    {/* <<h2>Jane Flex</h2>
    <p>Some text.</p>> */}
    {/* <div class="bar"></div>
    <p>45 min remaining</p> */}
  </div>
</div>

<div class="split right">
  <div class="centered2">
    {/* <img src="img_avatar.png" alt="Avatar man"> */}
    <div class="animation-container">
			<span></span>
			
		</div>
    <h2>Timer</h2>
    <p id = "counter">{currentCount} Minutes remaining</p>
    <p>out of 10</p>


  </div>
</div>

<div id="overlay1">
  <div class = "centered">
  <img class = "centeredImg"src="https://th.bing.com/th/id/R.ed1a1eed81db22b493516d3e5c0ef3d6?rik=Id5kPf%2fE47TsEQ&riu=http%3a%2f%2fbackgroundcheckexpress.com%2fuploads%2fimages%2ffingerprint-icon.png&ehk=Y7ylQudh%2bE%2b1wgODjzKdn0ivCMaILqGj7K7qEjUSLeg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="fingerprint" />
  <p id = "text">ENTER YOUR PIELEARNIG PASSWORD </p>
  <p id = "text2">WELCOME TO THE LAB</p>
  </div>
  <form >
  <div  id = "abc"class = "centeredI"><input type="password"/></div>
  <div id = "button"class = "centeredButton"><button type="button" onClick={startTimer } o >Enter Lab</button></div>

  </form>
  
  <div id = "quit"class = "centeredButton"><button type="button" onClick = {quitTimer} o>Quit Lab</button></div>
  



  
</div>
 
      </>
  )
}

export default Home