var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://i.etsystatic.com/15381260/r/il/831617/3866359645/il_340x270.3866359645_oi0i.jpg')";
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                       document.getElementById("windoweducationxp").style.display = "block";
                } 
        else if (currentdlg == "dlg3") {
                        currentdlg = "dlg4";
                        document.getElementById("windoweducationxp").style.display ="none";
        }
        else if (currentdlg == "dlg4") {
                        currentdlg = "dlg5";
                        document.getElementById("windowworkingxp").style.display = "block";
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  