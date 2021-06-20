let test = function(){
    conole.log('test');
};

document.getElementById("test").onmouseover = function() {mouseOver();}
function mouseOver(){
    document.getElementById("test").style.color = "red";
}

