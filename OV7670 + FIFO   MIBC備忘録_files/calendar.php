
var _calenarURL = "http://keisan.casio.jp/keisan/blogparts/calendar/casio_calendar.swf";
var _casio_calendar = "casio_calendar";
calendar_Go();

function calendar_Go(){
	var html = "";
	html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="155" height="367" id="' + _casio_calendar + '" align="middle">';
	html += '<param name="allowScriptAccess" value="always" />';
	html += '<param name="movie" value="' + _calenarURL + '" />';
	html += '<param name="FlashVars" value="pref=3&color=&ymd="/>';
	html += '<param name="quality" value="high" />';
	html += '<param name="bgcolor" value="#ffffff" />';
	html += '<param name="wmode" value="transparent" />';
	html += '<embed ' + 'FlashVars="pref=3&color=&ymd="' + ' width="155" height="367" src="' + _calenarURL + '" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" wmode="transparent" allowScriptAccess="always"> </embed>';
	html += '</object>';

	document.write(html);
}

