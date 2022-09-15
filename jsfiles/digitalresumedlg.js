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
        else if (currentdlg == "dlg7") {
                        currentdlg = "dlg8";
                        document.getElementById("pseudouser").style.display = "block";
                        document.getElementById("imputuser").value = null
        }
        else if (currentdlg == "dlg8" && document.getElementById("imputuser").value) {
                document.getElementById("pseudouser").style.display = "none";
                var pseudo = document.getElementById("imputuser").value ;
                        currentdlg = "dlg9" ;
                        dlgs["dlg9"] = dlgs["dlg9"] + pseudo + '."' ;
                        
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  