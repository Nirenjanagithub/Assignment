let buttonel = document.getElementById("button-el");
let meetDeet = document.getElementById("meetdeets");
let displayTime=document.getElementById("timing");
let displayText;



function display(){
let inputvalue=document.getElementById("input-value").value;


    const logTime = new Date();

    const onTime = new Date();
    onTime.setHours(10,30,0,0);
    const tenMinLate = new Date();
    tenMinLate.setHours(10,40,0,0);

    if(logTime<= onTime){
        displayText= inputvalue+" ,You are hitting the BULL'S EYE"+`<img  class="img-style"src="bullseye.png" width="4%">`;

    }
    else if (logTime <= tenMinLate){
        displayText= "Hey "+ inputvalue +" ,You are running on ISLAND " +`<img class="img-style" src="island.png" width="4%">`+"    time!!."
    
    }
    else{
    displayText="Hey"+ inputvalue+" you are running on TURTLE"+`<img class="img-style"src="turtle.png" width="4%">`+" time!!"
    }

    displayTime.innerHTML=displayText;
    meetDeet.innerHTML=`<a href="https://meet.google.com/stq-hqgb-zem?hs=224"  target="_blank" class="style"><img src="login-.png" width="4%">Today's Adventure portal</a>`
 

}
