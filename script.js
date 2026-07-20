let myh1=document.querySelectorAll("h1")
let myimgP1=document.querySelectorAll("img")[0]
let myimgP2=document.querySelectorAll("img")[1]
let mybtnP=document.querySelectorAll("button")[0]
let myh3=document.querySelectorAll("h3")[0]
let mybtnReset=document.querySelectorAll("button")[1]
let mydivpl1=document.getElementById("p1")
let mydivpl2=document.getElementById("p2")
let myresult=document.getElementById("result")

console.log(myh1,myimgP1,myimgP2,mybtnP,myh3,mybtnReset);

let arr=["Rock","Paper","Scissor"]

let player1=null;
let player2=null;

mybtnP.addEventListener("click",()=>{
    player1=Math.floor(Math.random()*3)
    player2=Math.floor(Math.random()*3)

    myimgP1.src=arr[player1]+".png";
    myimgP2.src=arr[player2]+".png";

    if(arr[player1]===arr[player2]){
        myh3.innerHTML="Draw";
        myresult.style.backgroundColor="#cd4848cf";
    }
    else if(arr[player1]==="Rock" && arr[player2]==="Scissor"||
        arr[player1]==="Paper" && arr[player2]==="Rock"||
        arr[player1]==="Scissor" && arr[player2]==="Paper"){
        myh3.innerHTML="Player 1 Wins"; 
        mydivpl1.style.backgroundColor = "#56c75fcf";
    }
    else{
        myh3.innerHTML="Player 2 Wins";
        mydivpl2.style.backgroundColor= "#56c75fcf";
    }
    mybtnP.disabled=true;

})

mybtnReset.addEventListener("click",()=>{
    player1=null;
    player2=null;

    myimgP1.src=""
    myimgP2.src=""

    myh3.innerHTML=""

    mybtnP.disabled=false;

    mydivpl1.style.backgroundColor ="#ffffff";
    mydivpl2.style.backgroundColor= "#ffffff";
    myresult.style.backgroundColor="#ffffff";
})
