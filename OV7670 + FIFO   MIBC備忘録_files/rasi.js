//****************************************************
//*
//*  RM Include Functions.
//*  Copyright 2011 Rakuten, Inc. All rights reserved.
//* 
//****************************************************

// Set variables
var cnt = 0;
var rrmParams = "";
var elmSource;
var rid = 0;


// include nolog.js
document.write('<scr' + 'ipt src="' + location.protocol + '//pix04.revsci.net/H10977/a6/0/0/nolog.js?csid=H10977&auto=t">\n');
document.write('</scr' + 'ipt>\n');

setApiTimer();


//----- below function -----


//-------------------------------
// Set Timer
//-------------------------------
function setApiTimer() {
    if (typeof (rsinetsegs) != "undefined" && rrmParams != null) {
        clearTimeout(rid);
        elmSource = showAD(rrmParams);

        //setInnerHtml(elmSource);
        
        return;
        
    } else if (cnt > 7) {
        clearTimeout(rid);
		elmSource = showAD(null);
		//setInnerHtml(elmSource);
		
        return;
    }
    cnt = cnt + 1;
    rid = setTimeout("setApiTimer()", 100);
    
    return;
}


//-------------------------------
// Set param
//------------------------------- 
function DM_onSegsAvailable(rsinetsegs, csid) {

	if (csid == "h10977") {
	    
		var resNetsegsRm;

		if (rsinetsegs.length > 0) {

			resNetsegsRm = arShuffle(rsinetsegs);

	        rrmParams = resNetsegsRm.length > 0 ? "code=" + resNetsegsRm[0] : null;
	        for ( var i = 1; i < ((resNetsegsRm.length > 25) ? 25 : resNetsegsRm.length); i++) {
	            rrmParams += ("&code=" + resNetsegsRm[i]);
	        }
	        
		}else{

			rrmParams = null;

		}

	} else {
	
		rrmParams = "";
	
	}
}


//-------------------------------
// Array shuffle
//-------------------------------
function arShuffle(rsinetsegs) {

	var i = rsinetsegs.length;
	
	while (--i) {
	
		var j = Math.floor(Math.random() * (i + 1));
		if (i == j) continue;
		var k = rsinetsegs[i];
		rsinetsegs[i] = rsinetsegs[j];
		rsinetsegs[j] = k;
	}
	
	return rsinetsegs;
}


//-------------------------------
// Set tags & Appending
//-------------------------------
function showAD(rsiParameters){

    var obj = document.getElementsByTagName("body").item(0); 
    
    var elem = document.createElement("img");
    elem.src = location.protocol+"//ad.yieldmanager.com/pixel?adv=502621&" + rsiParameters + "&t=2";
    elem.type = "text/javascr"+"ipt"
    elem.width = 0;
    elem.height = 0;
    elem.border = 0;
    
	obj.appendChild(elem);

}
