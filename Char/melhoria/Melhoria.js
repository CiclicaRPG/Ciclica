window.onload = function(){
    var openWindows   = 0;
    var aaaaa         = document.getElementById("aaaaa");
    var aaaaaContent  = document.getElementById("aaaaaContent");
    var aaaaaClose    = document.getElementById("aaaaaClose");
    var aaaaaTrigger  = 0;

    aaaaa.onclick = function(){
        if(aaaaaTrigger==0){
            aaaaaContent.style.display="block";
            aaaaaContent.style.top = String(100+410*openWindows)+"px";
            aaaaaClose.style.top = String(120+410*openWindows)+"px";
            openWindows++;
            aaaaaTrigger = 1;
        }
    }
    aaaaaClose.onclick = function(){
        aaaaaContent.style.display="none";
        openWindows--;
        aaaaaTrigger = 0;
    }
    
    var aaaab         = document.getElementById("aaaab");
    var aaaabContent  = document.getElementById("aaaabContent");
    var aaaabClose    = document.getElementById("aaaabClose");
    var aaaabTrigger  = 0;
    
    aaaab.onclick = function(){
        if(aaaabTrigger==0){
            aaaabContent.style.display="block";
            aaaabContent.style.top = String(100+410*openWindows)+"px";
            aaaabClose.style.top = String(120+410*openWindows)+"px"
            openWindows++;
            aaaabTrigger = 1;
        }
    }
    aaaabClose.onclick = function(){
        aaaabContent.style.display="none";
        openWindows--;
        aaaabTrigger = 0;
    }
    return false;
}