var openWindows   = 0;
var aTrigger  = 0;
var bTrigger  = 0;
var cTrigger  = 0;
var dTrigger  = 0
var eTrigger  = 0;
var fTrigger  = 0;

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
        if(dTrigger==1){
//            alert('detected c opened')
            dContent.style.top = String(110)+"px";
            dClose.style.top = String(140)+"px";
        }
        if(eTrigger==1){
//            alert('detected c opened')
            eContent.style.top = String(110)+"px";
            eClose.style.top = String(140)+"px";
        }
        if(fTrigger==1){
//            alert('detected c opened')
            fContent.style.top = String(110)+"px";
            fClose.style.top = String(140)+"px";
        }
    }
    return false
}

function openWindow(){
    var styleA = window.getComputedStyle(aContent);
    var styleB = window.getComputedStyle(bContent);
    var styleC = window.getComputedStyle(cContent);
    var styleD = window.getComputedStyle(dContent);
    var styleE = window.getComputedStyle(eContent);
    var styleF = window.getComputedStyle(fContent);
    var step = 0;
    if(openWindows==1){
 //       alert('detected an window opened')
        if(aTrigger==1){
  //        alert('detected a opened');
          step  = parseFloat(styleA.getPropertyValue('height'));
  //        alert(String(step));
        }
        if(bTrigger==1){
  //        alert('detected b opened');
          step  = parseFloat(styleB.getPropertyValue('height'));
  //        alert(String(step));
        }
        if(cTrigger==1){
  //        alert('detected c opened');
          step  = parseFloat(styleC.getPropertyValue('height'));
  //        alert(String(step));
        }
        if(dTrigger==1){
  //        alert('detected d opened');
          step  = parseFloat(styleD.getPropertyValue('height'));
 //         alert(String(step));
        }
        if(eTrigger==1){
  //        alert('detected d opened');
          step  = parseFloat(styleE.getPropertyValue('height'));
 //         alert(String(step));
        }
        if(fTrigger==1){
  //        alert('detected d opened');
          step  = parseFloat(styleF.getPropertyValue('height'));
 //         alert(String(step));
        }
    }
 //   alert(step);
    return step;
}

window.onload = function(){
    var a         = document.getElementById("a");
    var aContent  = document.getElementById("aContent");
    var aClose    = document.getElementById("aClose");

    a.onclick = function(){
        if(aTrigger==0 && openWindows<2){
            step = openWindow();
            aContent.style.display="block";
            aContent.style.top = String(110+(step+20)*openWindows)+"px";
            aClose.style.top = String(140+(step+20)*openWindows)+"px";
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
            step = openWindow();
            bContent.style.display="block";
            bContent.style.top = String(110+(step+20)*openWindows)+"px";
            bClose.style.top = String(140+(step+20)*openWindows)+"px";
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
            step = openWindow();
            cContent.style.display="block";
            cContent.style.top = String(110+(step+20)*openWindows)+"px";
            cClose.style.top = String(140+(step+20)*openWindows)+"px";
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
    
    var d         = document.getElementById("d");
    var dContent  = document.getElementById("dContent");
    var dClose    = document.getElementById("dClose");
    
    d.onclick = function(){
        if(dTrigger==0 && openWindows<2){
            step = openWindow();
            dContent.style.display="block";
            dContent.style.top = String(110+(step+20)*openWindows)+"px";
            dClose.style.top = String(140+(step+20)*openWindows)+"px";
            openWindows++;
            dTrigger = 1;
        }
    }
    dClose.onclick = function(){
        dContent.style.display="none";
        openWindows--;
        dTrigger = 0;
        moveUp();
    }
    
    var e         = document.getElementById("e");
    var eContent  = document.getElementById("eContent");
    var eClose    = document.getElementById("eClose");

    e.onclick = function(){
        if(eTrigger==0 && openWindows<2){
            step = openWindow();
            eContent.style.display="block";
            eContent.style.top = String(110+(step+20)*openWindows)+"px";
            eClose.style.top = String(140+(step+20)*openWindows)+"px";
            openWindows++;
            eTrigger = 1;
        }
    }
    eClose.onclick = function(){
        eContent.style.display="none";
        openWindows--;
        eTrigger = 0;
        moveUp();
    }
    
    var f         = document.getElementById("f");
    var fContent  = document.getElementById("fContent");
    var fClose    = document.getElementById("fClose");

    f.onclick = function(){
        if(fTrigger==0 && openWindows<2){
            step = openWindow();
            fContent.style.display="block";
            fContent.style.top = String(110+(step+20)*openWindows)+"px";
            fClose.style.top = String(140+(step+20)*openWindows)+"px";
            openWindows++;
            fTrigger = 1;
        }
    }
    fClose.onclick = function(){
        fContent.style.display="none";
        openWindows--;
        fTrigger = 0;
        moveUp();
    }
    return false;
}
