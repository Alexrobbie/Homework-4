//Each question and answer is an array with the format of question, question 1, question 2,
//question 3, question 4, and the answer

var q1= ["What Code is used to create the foundation of a Website?",
"A. CSS", "B. HTML", "C. JQuery", "D. Javascript", 2]
var q2= ["What Code is used to edit the displayed style in a Website?",
"A. CSS", "B. HTML", "C. JQuery", "D. Javascript", 1]
var q3= ["What Code is used to add user interaction and functionality to a website?",
"A. CSS", "B. HTML", "C. JQuery", "D. Javascript", 4]
var q4= ["What Code is a third party aplication to another code?",
"A. CSS", "B. HTML", "C. JQuery", "D. Javascript", 3]
var q5= ["What tag is used to create hyperlinks?",
"A. Link", "B. Hyperlink", "C. a", "D. External-Link", 3]
var q= [q1,q2,q3,q4,q5];
//Time Var
var time=75
//Function to build Question in css
var qNum=0;
function start(){
$("#start").css('opacity', '0');

for (i=0;i<q[qNum].length-1;i++) {
    if(i==0) {
        $("#startDiv").append("<div class=text id=text>"+q[qNum][0]+"</div>");
    }
    else {
        $("#startDiv").append("<button id="+i+" class=button onclick=an(this.id)>"+q[qNum][i]+"</button><br>");
    }
}

}

//Function to grab the answer and compair it to the correct answer

function an(clcikedId) {
    $("#rw").empty();
if (q[qNum][5]==clcikedId) {
    $("#rw").css("color","green")
    $("#rw").append("Correct");
}
else {
    $("#rw").css("color","red")
    $("#rw").append("Wrong");
    time=time-5;
}
$("#startDiv").empty();
qNum++;
start();
}

//Function for timer
function timer() {
var t=setInterval(function () { 
    time--;
    $("#timer").empty();
    $("#timer").append(time);
    if(time==0) {
      clearInterval(t);  
    }
    if(qNum>q.length-1) {
        clearInterval(t);
        var name=prompt("Your Score is "+time+". Please enter your Initials")
        var highscore=[name,time];
        //window.localStorage.setItem('New',JSON.stringify(score));
        if(window.localStorage.getItem('i')!=null) {
          var i=JSON.parse(window.localStorage.getItem('i'))
          window.localStorage.setItem(JSON.stringify(i),JSON.stringify(highscore))
          i++
          window.localStorage.setItem('i',JSON.stringify(i));
        }
        else {
            var i=1;
            window.localStorage.setItem(JSON.stringify(i),JSON.stringify(highscore));
            window.localStorage.setItem('i',"1");
        }
       

        

        
        

        window.location.href="assets/highscore.html"; 
        
    }
}, 1000);
}
//Print out Highscore
function printHS() {
    x=JSON.parse(window.localStorage.getItem('i'));
    for (i=1;i<x;i++) {
       a=window.localStorage.getItem(JSON.stringify(i));
    $("#HS").append("<div class=hs>"+a+"</div>");
    }

}
printHS();