let buttonel = document.getElementById("button-el");
let meetDeet = document.getElementById("meetdeets");
let displayTime=document.getElementById("timing");
let displayText;



function display(){
let inputvalue=document.getElementById("input-value").value;


    const logTime = new Date();
    const onTime = new Date();
    onTime.setHours(21,50,0,0);
    const tenMinLate = new Date();
    tenMinLate.setHours(22,40,0,0);

    if(logTime<= onTime){
        displayText= "Hey "+inputvalue+" ,You are on time.Keepup the gppd work!!";

    }
    else if (logTime <= tenMinLate){
        displayText= "Hey "+ inputvalue +" ,You are litle bit late."
    
    }
    else{
    displayText=inputvalue+"you are late"
    }

    displayTime.innerText=displayText;
    meetDeet.innerHTML=`<a href="https://meet.google.com/stq-hqgb-zem?hs=224"  target="_blank" class="style">Today's Adventure portal</a>`
 

}
