

var x=document.querySelector(".tooltiptext1")
var y=document.querySelector(".tooltiptext2")
var z=document.querySelector(".tooltiptext3")

var btn1=document.querySelector(".btn1")
var btn2=document.querySelector(".btn2")
var btn3=document.querySelector(".btn3")

btn1.onclick=function(){
  alert("text sent")
  x.innerText="sent"
}

btn2.onclick=function(){
  alert("text sent")
  y.innerText="sent"
}

btn3.onclick=function(){
  alert("text sent")
  z.innerText="sent"
}