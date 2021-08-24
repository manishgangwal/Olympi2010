canvas=document.getElementById("my_canvas");

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle="blue";
canvas.getContext("2d").linewidth ="5";
canvas.getContext("2d").arc(200,200,55,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle="black";
canvas.getContext("2d").linewidth ="5";
canvas.getContext("2d").arc(325,200,55,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle="red";
canvas.getContext("2d").linewidth ="5";
canvas.getContext("2d").arc(450,200,55,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle="yellow";
canvas.getContext("2d").linewidth ="5";
canvas.getContext("2d").arc(265,275,55,0,2*Math.PI);
canvas.getContext("2d").stroke();

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle="green";
canvas.getContext("2d").linewidth ="5";
canvas.getContext("2d").arc(387,275,55,0,2*Math.PI);
canvas.getContext("2d").stroke();



