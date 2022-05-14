function confirm(){
    var question1= document.ans.value;
    var correct = 0;
    if(question1=="Math.absa"){
        correct++;}   
    document.getElementById("submit").style.visibility="visible";
    document.getElementById("button").innerHTML ="You got" +correct +"correct.";
}