let gopher = document.getElementsByClassName("gopher")[0];
let lastPosX = 0;
let lastPosY = 0;
let left = false;
let up = false;
let scale = 1;
let buffer = 3;

onmousemove = function (e){
    let mouseDeltaX = lastPosX - e.pageX; //find change in position to determine direction we're moving
    let mouseDeltaY = lastPosY - e.pageY;
    let InXBuffer = mouseDeltaX < buffer && mouseDeltaX > -buffer;
    let InYBuffer = mouseDeltaY < buffer && mouseDeltaY > -buffer;
    left = mouseDeltaX > 0;
    up = mouseDeltaY > 0;
    if(left){scale = 1;}else{scale = -1;} //flip image
    if(!InXBuffer && !InYBuffer) //its diagonal
    {
        if(up){gopher.src = "staticfiles/gogopherNW.gif";}
        else {gopher.src = "staticfiles/gogopherSW.gif";}
    }
    else {
        if(InYBuffer) //its horizontal
        {
            if(left){gopher.src = "staticfiles/gogopherW.gif";}
        } else if(InXBuffer) //its vertical
        {
            if(up){gopher.src = "staticfiles/gogopherN.gif";}
            else {gopher.src = "staticfiles/gogopher.gif";}
        }
    }
    gopher.style =
        "pointer-events:none;" +
        "position:absolute;" +
        "transform:scaleX("+scale+") translate("+scale*(-50)+"%,-50%);" +
        " left:"+e.pageX+"px;" +
        " top:"+e.pageY+"px;"
    lastPosX = e.pageX;
    lastPosY = e.pageY;
}


function switchModel()
{
    let modelviewer = document.getElementsByClassName("modelview")[0];
    let dropdown = document.getElementsByClassName("myDropdown")[0];
    let tag = document.getElementsByClassName("viewertag")[0]
    let gif = document.getElementsByClassName("viewergif")[0]
    modelviewer.src = 'staticfiles/' + dropdown.options[dropdown.selectedIndex].value + '.glb';
    gif.src = 'staticfiles/' + dropdown.options[dropdown.selectedIndex].value + '.gif';
    if(dropdown.selectedIndex === 0)
    {
        tag.innerHTML = "This is the Go Gopher. He's the mascot of the Go programming language!";
    }
    else if(dropdown.selectedIndex === 1)
    {
        tag.innerHTML = "Here's a scary goblin. He likes pizza rolls and is always in a bad mood.";
    }
    else if(dropdown.selectedIndex === 2)
    {
        tag.innerHTML = "This is a delicious pizza roll.";
    }
}

function ShowInput()
{
    alert("Your input was " + inputValue);
}