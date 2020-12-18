var openWindows   = 0;
var aTrigger  = 0;
var bTrigger  = 0;
var cTrigger  = 0;

function moveUp(){
//    alert('moveUp');
    if(openWindows==1){
//        alert('detected 1 remaining open window');
        if(aTrigger==1){
//            alert('detected a opened')
            aContent.style.top = String(110)+"px";
            aClose.style.top = String(140)+"px";
        }
        if(bTrigger==1){
//            alert('detected b opened')
            bContent.style.top = String(110)+"px";
            bClose.style.top = String(140)+"px";
        }
        if(cTrigger==1){
//            alert('detected c opened')
            cContent.style.top = String(110)+"px";
            cClose.style.top = String(140)+"px";
        }
    }
    return false
}

window.onload = function(){
    var a         = document.getElementById("a");
    var aContent  = document.getElementById("aContent");
    var aClose    = document.getElementById("aClose");

    a.onclick = function(){
        if(aTrigger==0 && openWindows<2){
            aContent.style.display="block";
            aContent.style.top = String(110+425*openWindows)+"px";
            aClose.style.top = String(140+425*openWindows)+"px";
            openWindows++;
            aTrigger = 1;
        }
    }
    aClose.onclick = function(){
        aContent.style.display="none";
        openWindows--;
        aTrigger = 0;
        moveUp();
    }
    
    var b         = document.getElementById("b");
    var bContent  = document.getElementById("bContent");
    var bClose    = document.getElementById("bClose");
    
    b.onclick = function(){
        if(bTrigger==0 && openWindows<2){
            bContent.style.display="block";
            bContent.style.top = String(110+425*openWindows)+"px";
            bClose.style.top = String(140+425*openWindows)+"px";
            openWindows++;
            bTrigger = 1;
        }
    }
    bClose.onclick = function(){
        bContent.style.display="none";
        openWindows--;
        bTrigger = 0;
        moveUp();
    }
    
    var c         = document.getElementById("c");
    var cContent  = document.getElementById("cContent");
    var cClose    = document.getElementById("cClose");
    
    c.onclick = function(){
        if(cTrigger==0 && openWindows<2){
            cContent.style.display="block";
            cContent.style.top = String(110+425*openWindows)+"px";
            cClose.style.top = String(140+425*openWindows)+"px";
            openWindows++;
            cTrigger = 1;
        }
    }
    cClose.onclick = function(){
        cContent.style.display="none";
        openWindows--;
        cTrigger = 0;
        moveUp();
    }
    return false;
}
