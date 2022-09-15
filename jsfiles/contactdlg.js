var currentdlg = "dlg1";
document.getElementById("character").style.backgroundImage = "url('https://i.pinimg.com/474x/2c/96/3f/2c963f6e28c6e0382ed80c5d232326b2.jpg')" ;
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                } 
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
}  