var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://i.pinimg.com/originals/69/b6/17/69b617e69929200e9392a53950d6a9c3.jpg')";
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
                document.getElementById('windowprogskills').style.display = "block";
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                } 
        else if (currentdlg == "dlg3") {
                        currentdlg = "dlg4";
        }
        else if (currentdlg == "dlg4") {
                        currentdlg = "dlg5";
                        document.getElementById('windowprogskills').style.display = "none"
        }
        else if (currentdlg == "dlg5") { 
                        currentdlg = "dlg6";
        }
        else if (currentdlg == "dlg6") {
                        currentdlg = "dlg7";
                        document.getElementById('windowotherskills').style.display = "block";
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  