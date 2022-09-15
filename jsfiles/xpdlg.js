var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://i.etsystatic.com/15381260/r/il/831617/3866359645/il_340x270.3866359645_oi0i.jpg')";
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