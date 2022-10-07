function openButton() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.height = "90.3vh";
    document.getElementById("gixa").style.display = "block";
    document.getElementById("gixb").style.display = "block";
    document.getElementById("gixc").style.display = "block";
    document.getElementById("gixd").style.display = "block";
    document.getElementById("gixe").style.display = "block";
    document.getElementById("gixf").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("sidebar").style.backgroundColor= "#343a40";
}


function buttonClose() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.height = "0px";
    document.getElementById("gixa").style.display = "none";
    document.getElementById("gixb").style.display = "none";
    document.getElementById("gixc").style.display = "none";
    document.getElementById("gixd").style.display = "none";
    document.getElementById("gixe").style.display = "none";
    document.getElementById("gixf").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("sidebar").style.backgroundColor= "white";
}