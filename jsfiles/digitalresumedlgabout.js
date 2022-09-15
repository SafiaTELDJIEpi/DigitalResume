var currentdlg = "dlg1";
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                } 
        else if (currentdlg == "dlg3") {
                        currentdlg = "dlg4" ;
        }
        else if (currentdlg == "dlg4") {
                        currentdlg = "dlg5" ;
        }
        else if (currentdlg  == "dlg5") {
                        currentdlg = "dlg6"
        }
        else if (currentdlg == "dlg6") {
                        currentdlg = "dlg7"     
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  