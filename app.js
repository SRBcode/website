let test = function(){
    conole.log('test');
};

document.getElementById("test").addEventListener("mouseover", mouseOver);
function mouseOver(){
    document.getElementById("test").style.color = "red";
}

