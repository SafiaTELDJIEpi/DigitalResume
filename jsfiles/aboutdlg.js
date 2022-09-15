var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://cf.shopee.ph/file/c22b3271c59a8e150c3590816796d61a')" ;
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
                        currentdlg = "dlg5"
                        document.getElementById('windowabout').style.display = "block";
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  