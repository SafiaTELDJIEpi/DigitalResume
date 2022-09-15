var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://pbs.twimg.com/media/E7Y7UBPXsAYDNnp.jpg')" ;
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                } 
        else if (currentdlg == "dlg3") {
                        currentdlg = "dlg4";
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  