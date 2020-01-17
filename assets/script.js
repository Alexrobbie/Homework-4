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
        var score= [name,time];
        var highscore=window.localStorage.getItem('NewScore');
        highscore=JSON.parse(highscore);
        score.push(highscore);
        window.localStorage.setItem('NewScore',JSON.stringify(score));
        window.location.href="assets/highscore.html";
    }
}, 1000);
}
//Print out Highscore
function printHS() {
var highscore=window.localStorage.getItem('NewScore');
highscore=JSON.parse(highscore);
var q=2;
var a=[];
for (i=0;i<highscore.length;i=i+2) {
a=highscore.slice(i,q)
a=JSON.stringify(a);
$("#HS").append("<div class=hs>"+a+"</div>");
q++;
q++;
}




}
printHS();