//#######################################################
//## Rakuten Widget                                    ##
//##                                                   ##
//## Copyright 2009 Rakuten, Inc. All rights reserved. ##
//##    v1.0                                           ##
//#######################################################
(function (rakuten) {
 var lastUpdatedDate = '20130423';

 if ( rakuten.pointbackId.length == 0 ) {
    document.write('<scr' + 'ipt src="//image.ias.rakuten.co.jp/www/adnw/rasi.js">');
    document.write('</scr' + 'ipt>\n');
 }

 rakuten.mw_api = 'on';
 rakuten.prefix = 'api_';
 rakuten.suffix = '';
 rakuten.no_link = 'off';

 var formatPointbackId = "_RTmtlk2000";
 var pointbackId;
 var rapi = 'on';
 var itemNumber = getItemNum();
 var sizeNumber;
 var swf_width;
 var swf_height;
 var pattern;
 var previewTag = '';
 var rakutenPreviewTag = '';
 var optimized_flag = true;
 var ffOption = checkBrowser() == "Firefox" ? 'true' : 'false';
 var isAdvanced = false;
 var is_corp = ( existMediaId() || rakuten.pointbackId.length > 0 && rakuten.pointbackId.substring(10, 11) == 1 ) ? true : false;

 if(typeof rakuten.preview != "undefined" && "true" == rakuten.preview){
	 previewTag = '&preview=true';
	 rakutenPreviewTag = '&rakuten_preview=true';
 }

 //--- Design & Size Check
 if(rakuten.design == "slide" || rakuten.design == "circle"){
	 rakuten.design = "slide";
	 switch (rakuten.size){
		 case '468x160': // 00
			 var patternNum = parseInt(Math.random() * 2);
			 switch (patternNum) {
				 case 0:
					 break;
				 case 1:
					 rakuten.suffix = '_design_p3';
					 break;
			 }
			 swf_width  = 468;
			 swf_height = 160;
			 pattern = 'H1A';
			 break;
		 case '600x200': // 10
		 /*
			 if ( !is_corp ) {
			     switch (parseInt(Math.random() * 2)) {
				     case 0:
					     formatPointbackId = "_RTmtlk5700";
					     break;
				     case 1:
                         formatPointbackId = "_RTmtlk5900";
                         rakuten.suffix += '_advance';
                         isAdvanced = true;
                         break;
			     }
			 }
			 */
			 swf_width  = 600;
			 swf_height = 200;
			 pattern = 'H1B';
			 break;
		 case '728x200': // 20
			 swf_width  = 728;
			 swf_height = 200;
			 pattern = 'H1C';
			 break;
		 case '120x240': // 30
			 swf_width  = 120;
			 swf_height = 240;
			 pattern = 'V1A';
			 break;
		 case '148x300': // 40
			 swf_width  = 148;
			 swf_height = 300;
			 pattern = 'V1B';
			 break;
		 case '200x350': // 50
			 swf_width  = 200;
			 swf_height = 350;
			 pattern = 'V1C';
			 break;
		 case '148x600': // 60
			 var patternNum = parseInt(Math.random() * 2);
			 switch (patternNum) {
				 case 0:
					 break;
				 case 1:
					 rakuten.suffix = '_design_p1';
					 break;
			 }
			 /*
			 if ( !is_corp ) {
			     switch (parseInt(Math.random() * 2)) {
				     case 0:
					     formatPointbackId = "_RTmtlk5700";
					     break;
				     case 1:
                         formatPointbackId = "_RTmtlk5900";
                         rakuten.suffix += '_advance';
                         isAdvanced = true;
                         break;
			     }
			 }
			 */
			 swf_width  = 148;
			 swf_height = 600;
			 pattern = 'V1D';
			 break;
		 case '200x600': // 70
			 swf_width  = 200;
			 swf_height = 600;
			 pattern = 'V1E';
			 break;
		 case '450x160': // 450x160 => 300x160
		 	rakuten.size = '300x160';
			 swf_width  = 300;
			 swf_height = 160;
			 pattern = 'H1D';
			 break;
		 case '300x160': // 90
			 swf_width  = 300;
			 swf_height = 160;
			 pattern = 'H1D';
			 break;
		 case '300x250': // 02
			 var patternNum = parseInt(Math.random() * 2);
			 switch (patternNum) {
				 case 0:
					 break;
				 case 1:
					 rakuten.suffix = '_design_p5';
					 break;
			 }
			 swf_width  = 300;
			 swf_height = 250;
			 pattern = 'H2A';
			 break;
		 /* delete 120x170
		 case '120x170': // 12 no api
			 optimized_flag = false;
			 rakuten.mw_api = 'off';
			 rakuten.prefix = 'new_';
			 swf_width  = 120;
			 swf_height = 170;
			 break;
		*/
		 case '160x600': // 22
			 swf_width  = 160;
			 swf_height = 600;
			 pattern = 'V1F';
			 break;
		 case '200x200': // 32
			 swf_width  = 200;
			 swf_height = 200;
			 pattern = 'H2C';
			 break;
		 case '250x250': // 42
			 swf_width  = 250;
			 swf_height = 250;
			 pattern = 'H2B';
			 break;
		 case '336x280': // 52
			 swf_width  = 336;
			 swf_height = 280;
			 pattern = 'H2D';
			 break;
		 case '728x90': // 62
			 swf_width  = 728;
			 swf_height = 90;
			 pattern = 'H3A';
			 break;
		 case '468x60': // 72
			 swf_width  = 468;
			 swf_height = 60;
			 pattern = 'H3B';
			 break;
		 case '800x180': // for mixi no api
			 rakuten.size='728x90';
			 swf_width  = 728;
			 swf_height = 90;
			 pattern = 'H3A';
			 break;
		 case '320x50': // for corp
			 rakuten.size = '320x48';
			 swf_width  = 320;
			 swf_height = 48;
			 pattern = 'H3B';
			 break;
		 case '120x300': // 30 for circle
			 rakuten.size = '120x240';
			 swf_width  = 120;
			 swf_height = 240;
			 pattern = 'V1A';
			 break;
		 case '148x500': // 40 for circle
			 rakuten.size = '148x300';
			 swf_width  = 148;
			 swf_height = 300;
			 pattern = 'V1B';
			 break;
		 case '320x48': // SmartPhone Page
			 swf_width  = 320;
			 swf_height = 48;
			 pattern = 'H3B';
			 break;
		 case '120x600': // new size
			 swf_width  = 120;
			 swf_height = 600;
			 pattern = 'V1G';
			 break;
		 case '520x160': // new size
			 swf_width  = 520;
			 swf_height = 160;
			 pattern = 'H1B';
			 rakuten.imageSize = "80x80";
			 break;
		 case '298x170': // for corp
		 	 var patternNum = parseInt(Math.random() * 2);
			 switch (patternNum) {
				 case 0:
				 	 rakuten.suffix = 'A_a';
					 break;
				 case 1:
					 rakuten.suffix = 'A_b';
					 break;
			 }
		 	 swf_width = 300;
		 	 swf_height = 172;
			 pattern = 'H1D';
			 rakuten.moreInfoDisplay = "on";
			 rakuten.txtRow = "1";
			 rakuten.imageSize = "81x81";
		 	 break;
		 default :
			 rakuten.mw_api = 'on';
			 rakuten.prefix = 'api_';
			 rakuten.design = 'slide';
			 rakuten.size   = '120x240';
			 swf_width  = 120;
			 swf_height = 240;
			 pattern = 'V1A';
			 break;
	 }
	 sizeNumber = slideSizeMap()(rakuten.size);
 } else if(rakuten.design == "text"){
	 switch (rakuten.size){
		 case '125x125': // 05
			 swf_width  = 125;
			 swf_height = 125;
			 pattern = 'V1A';
			 break;
		 case '120x600': // 15
			 swf_width  = 120;
			 swf_height = 600;
			 pattern = 'V5B';
			 break;
		 case '160x600': // 25
			 swf_width  = 160;
			 swf_height = 600;
			 pattern = 'V6A';
			 break;
		 case '180x150': // 35
			 swf_width  = 180;
			 swf_height = 150;
			 pattern = 'V2A';
			 break;
		 case '120x240': // 45
			 swf_width  = 120;
			 swf_height = 240;
			 pattern = 'V5A';
			 break;
		 case '200x200': // 55
			 swf_width  = 200;
			 swf_height = 200;
			 pattern = 'V3A';
			 break;
		 case '250x250': // 65
			 swf_width  = 250;
			 swf_height = 250;
			 pattern = 'V3B';
			 break;
		 case '300x250': // 75
			 swf_width  = 300;
			 swf_height = 250;
			 pattern = 'V4A';
			 break;
		 case '336x280': // 85
			 swf_width  = 336;
			 swf_height = 280;
			 pattern = 'V4B';
			 break;
		 case '728x90': // 95
			 swf_width  = 728;
			 swf_height = 90;
			 pattern = 'H1A';
			 break;
		 case '468x60': // 06
			 swf_width  = 468;
			 swf_height = 60;
			 pattern = 'H2A';
			 break;
		 default :
			 rakuten.mw_api = 'on';
			 rakuten.prefix = 'api_';
			 rakuten.design = 'text';
			 rakuten.size   = '120x240';
			 swf_width  = 120;
			 swf_height = 240;
			 pattern = 'V5A';
			 break;
	 }
	 sizeNumber = textSizeMap()(rakuten.size);
 }else{
	 //default
	 rakuten.mw_api = 'on';
	 rakuten.prefix = 'api_';
	 rakuten.design = 'slide';
	 rakuten.size   = '120x240';
	 swf_width  = 120;
	 swf_height = 240;
	 pattern = 'V1A';
	 sizeNumber = slideSizeMap()(rakuten.size);
 }

 pointbackId = getPointbackId();
 swf_width  = swf_width  -2;
 swf_height = swf_height -2;
 load_image();

 if(rakuten.size == "320x48") {
		rakuten.imageSize = '42x42';
		rakuten.design    = 'slide';
		rakuten.slideCell = '5x1';
		rakuten.auto_mode = 'on';
		rakuten.noScrollButton = 'on';
		createPCIframe('//static.affiliate.rakuten.co.jp/widget/html/pc_pcview_all.html');
 } else if (checkSmartPhone()) {
	 iframe_width = swf_width + 2;
	 iframe_height = swf_height + 2;
	 if(rakuten.design == "slide" || rakuten.design == "circle"){
		 switch (rakuten.size) {
			case '300x250':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_300x250.html');
				break;
			case '148x600':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_148x600.html');
				break;
			case '468x160':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_468x160.html');
				break;
			case '120x240':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x240.html');
				break;
			case '148x300':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_148x300.html');
				break;
			case '160x600':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_160x600.html');
				break;
			case '200x200':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_200x200.html');
				break;
			case '200x350':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_200x350.html');
				break;
			case '200x600':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_200x600.html');
				break;
			case '250x250':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_250x250.html');
				break;
			case '300x160':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_300x160.html');
				break;
			case '336x280':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_336x280.html');
				break;
			case '468x60':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_468x60.html');
				break;
			case '600x200':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_600x200.html');
				break;
			case '728x200':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_728x200.html');
				break;
			case '728x90':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_728x90.html');
				break;
			default:
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x240.html');
				break;
		 }
	 } else if(rakuten.design == "text"){
		 switch (rakuten.size) {
		  case '120x240':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x240_text.html');
				break;
		  case '120x600':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x600_text.html');
				break;
		  case '125x125':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_125x125_text.html');
				break;
		  case '160x600':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_160x600_text.html');
				break;
		  case '180x150':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_180x150_text.html');
				break;
		  case '200x200':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_200x200_text.html');
				break;
		  case '250x250':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_250x250_text.html');
				break;
		  case '300x250':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_300x250_text.html');
				break;
		  case '336x280':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_336x280_text.html');
				break;
		  case '468x60':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_468x60_text.html');
				break;
		  case '728x90':
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_728x90_text.html');
				break;
			default:
				pointbackId = forABgetPointbackId(pointbackId, 91);
				createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x240_text.html');
				break;
		 }
	 } else {
		createIframe('//static.affiliate.rakuten.co.jp/widget/html/smartphone_pcview_120x240.html');
	 }
 }
 
 else if( showJS() ) {
		createPCIframe('//static.affiliate.rakuten.co.jp/widget/html/pc_pcview_all.html');
 }

 else if( typeof rakuten.recommend != "undefined" && rakuten.recommend == "on") {
	 // recommend(view history)
	 var iframe_width    = swf_width  + 2;
	 var iframe_height   = swf_height + 2;
	 
	 if ( rakuten.size == "298x170" ) {
	 	iframe_width    = swf_width;
	 	iframe_height   = swf_height;
	 }
	 document.write('<iframe width="'    + iframe_width  + '"'
			 + ' height="'       + iframe_height + '"'
			 + ' frameBorder="0"'
			 + ' scrolling="no"'
			 + ' marginheight="0"'
			 + ' marginwidth="0"'
			 + ' allowtransparency="true"'
			 + ' src="//xml.affiliate.rakuten.co.jp/widget/recommend/index.php'
			 + '?rakuten_design='         + rakuten.design
			 + '&rakuten_affiliateId='    + rakuten.affiliateId
			 + '&rakuten_items='          + rakuten.items
			 + '&rakuten_items_sub='      + rakuten.items_sub
			 + '&rakuten_genreId='        + rakuten.genreId
			 + '&rakuten_size='           + rakuten.size
			 + '&rakuten_target='         + rakuten.target
			 + '&rakuten_theme='          + rakuten.theme
			 + '&rakuten_border='         + rakuten.border
			 + '&rakuten_auto_mode='      + rakuten.auto_mode
			 + '&rakuten_genre_title='    + rakuten.genre_title
			 + '&rakuten_pointbackId='    + rakuten.pointbackId
			 + '&rakuten_no_link='        + rakuten.no_link
			 + '&rakuten_no_afl='         + rakuten.no_afl
			 + '&rakuten_no_logo='        + rakuten.no_logo
			 + '&rakuten_undispGenre='    + rakuten.undispGenre
			 + '&rakuten_wmode='          + rakuten.wmode
			 + '&rakuten_bgColor='        + rakuten.bgColor
			 + '&rakuten_txtColor='       + rakuten.txtColor
			 + '&rakuten_captionColor='   + rakuten.captionColor
			 + '&rakuten_moverColor='     + rakuten.moverColor
			 + '&rakuten_noScrollButton=' + rakuten.noScrollButton
			 + '&rakuten_adNetworkId='    + rakuten.adNetworkId
			 + '&rakuten_adNetworkUrl='   + rakuten.adNetworkUrl
			 + '&rakuten_disableLogo='    + rakuten.disableLogo
			 + '&rakuten_searchKeyword='  + rakuten.searchKeyword
			 + '&rakuten_mediaId='        + rakuten.mediaId
			 + '&rakuten_pointSiteId='    + rakuten.pointSiteId
			 + '&rakuten_measurementId='  + rakuten.measurementId
			 + rakutenPreviewTag
			 + '">'
			 + '</iframe>'
			 );
 }else{
	 if(rakuten.border == "on"){
		 if(rakuten.mw_api == "on") {
			 document.write('<div style="border:1px solid #cccccc;width:'+ swf_width + 'px;">');
		 } else {
			 document.write('<div style="border:1px solid black;width:'+ swf_width + 'px;">');
		 }
	 }else{
		 document.write('<div>');
	 }

	 if(typeof rakuten.rlogin === "undefined") rakuten.rlogin = 'none';
	 // if(rakuten.no_afl == "on")  rakuten.affiliateId = "";
	 if(rakuten.mw_api == "on" && rakuten.items == "ashiato") {
		 rakuten.items = rakuten.items_sub;
		 rakuten.recommend = "on";
	 }
	 // for point site
	 if (pointbackId.indexOf('%') != -1) {
	 	pointbackId = encodeURIComponent(pointbackId);
	 }

	 //Auto Install
	 document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '
			 + 'codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" '
			 + 'id="externalfi1" align="" allowscriptaccess="always" '
			 + 'width="'  + swf_width  + '" '
			 + 'height="' + swf_height + '" '
			 + '>'
			 );
	 document.write('<param name="movie" '
			 +'value="//static.affiliate.rakuten.co.jp/widget/swf/' + rakuten.prefix + rakuten.design + '_' + rakuten.size + rakuten.suffix + '.swf?'
			 + 'item='           + rakuten.items
			 + '&itemType='      + rakuten.items
			 + '&item_sub='      + rakuten.items_sub
			 + '&genreId='       + rakuten.genreId
			 + '&affiliateId='   + rakuten.affiliateId
			 + '&target='        + rakuten.target
			 + '&theme='         + rakuten.theme
			 + '&auto='          + rakuten.auto_mode
			 + '&title='         + rakuten.genre_title
			 + '&ff='            + ffOption
			 + '&rapi='          + rapi
			 + '&rlogin='        + rakuten.rlogin
			 + '&pointbackId='   + pointbackId
			 + '&noLink='        + rakuten.no_link
			 + '&noAffiliate='   + rakuten.no_afl
			 + '&noLogo='        + rakuten.no_logo
			 + '&undispGenre='   + rakuten.undispGenre
			 + '&recommend='     + rakuten.recommend
			 + '&bgColor='       + rakuten.bgColor
			 + '&txtColor='      + rakuten.txtColor
			 + '&captionColor='  + rakuten.captionColor
			 + '&moverColor='    + rakuten.moverColor
			 + '&noScrollButton='+ rakuten.noScrollButton
			 + '&adNetworkId='   + rakuten.adNetworkId
			 + '&adNetworkUrl='  + rakuten.adNetworkUrl
			 + '&version='       + lastUpdatedDate
			 + '&disableLogo='   + rakuten.disableLogo
			 + '&mediaId='       + rakuten.mediaId
			 + '&pointSiteId='   + rakuten.pointSiteId
			 + '&isAdvanced='    + isAdvanced
			 + '&searchKeyword=' + rakuten.searchKeyword
			 + '&measurementId=' + rakuten.measurementId
			 + previewTag
			 + '">');
	 document.write('<param name="allowscriptaccess" value="always">');
	 var wmode_param;
	 if(rakuten.wmode == "on") {
		 document.write('<param name="wmode" value="opaque">');
		 wmode_param = 'wmode="opaque"';
	 } else {
		 wmode_param = '';
	 }
	 document.write('<embed src="//static.affiliate.rakuten.co.jp/widget/swf/' + rakuten.prefix + rakuten.design + '_' + rakuten.size + rakuten.suffix + '.swf?'
			 + 'item='           + rakuten.items
			 + '&itemType='      + rakuten.items
			 + '&item_sub='      + rakuten.items_sub
			 + '&genreId='       + rakuten.genreId
			 + '&affiliateId='   + rakuten.affiliateId
			 + '&target='        + rakuten.target
			 + '&theme='         + rakuten.theme
			 + '&auto='          + rakuten.auto_mode
			 + '&title='         + rakuten.genre_title
			 + '&ff='            + ffOption
			 + '&rapi='          + rapi
			 + '&rlogin='        + rakuten.rlogin
			 + '&pointbackId='   + pointbackId
			 + '&noLink='        + rakuten.no_link
			 + '&noAffiliate='   + rakuten.no_afl
			 + '&noLogo='        + rakuten.no_logo
			 + '&undispGenre='   + rakuten.undispGenre
			 + '&recommend='     + rakuten.recommend
			 + '&bgColor='       + rakuten.bgColor
			 + '&txtColor='      + rakuten.txtColor
			 + '&captionColor='  + rakuten.captionColor
			 + '&moverColor='    + rakuten.moverColor
			 + '&noScrollButton='+ rakuten.noScrollButton
			 + '&adNetworkId='   + rakuten.adNetworkId
			 + '&adNetworkUrl='  + rakuten.adNetworkUrl
			 + '&version='       + lastUpdatedDate
			 + '&disableLogo='   + rakuten.disableLogo
			 + '&mediaId='       + rakuten.mediaId
			 + '&pointSiteId='   + rakuten.pointSiteId
			 + '&isAdvanced='    + isAdvanced
			 + '&searchKeyword=' + rakuten.searchKeyword
			 + '&measurementId=' + rakuten.measurementId
			 + previewTag
			 + '" '
			 + 'width="'  + swf_width  + '" '
			 + 'height="' + swf_height + '" '
			 + 'allowscriptaccess="always" name="externalfi1" align="" '
			 + 'type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" '
			 + wmode_param
			 + '></embed>'
			 );
	 document.write('</object>');
	 document.write('</div>');
 }
 rakuten.pointbackId='';

 function load_image () {
	 if ( false && typeof Image != "undefined" ) {
		 var image = new Image();
		 image.src = "http://xml.affiliate.rakuten.co.jp/widget/img/t.gif?" + (new Date().getTime())
			 + "&pointback_id=" + pointbackId
			 + "&size=" + rakuten.size
			 + "&item_type=" + rakuten.items
			 + "&recommend=" + rakuten.recommend;
	 }
 }

 function forABgetPointbackId (pointbackId, recogNumber) {
	 // Exist MediaId
	 if ( existMediaId() ) {
		 rakuten.mediaId = rakuten.mediaId.substring(0, 2) != "10" ? recogNumber + rakuten.mediaId.substr(2) : rakuten.mediaId;
		 return pointbackId;
	 }
	 // Not MediaId
	 return pointbackId.substring(7, 9) != "10" ? "_RTmtlk" + recogNumber + pointbackId.substr(9) : pointbackId;
 }

 function getItemNum(){
	 if(rakuten.items == "ashiato" && rakuten.rlogin == "on"){
		 if (rakuten.items_sub 
				 && (rakuten.items_sub == "productranking" || rakuten.items_sub == "newproduct")) {
			 return "23";
		 } else {
			 return "03";
		 }
	 } else if(rakuten.items == "ashiato" && rakuten.rlogin == "off" ){
		 if (rakuten.items_sub 
				 && (rakuten.items_sub == "productranking" || rakuten.items_sub == "newproduct")) {
			 return "24";
		 } else {
			 return "04";
		 }
	 } else {
		 return itemMap()(rakuten.items);
	 }
 }

 function showJS() {
	if(!is_corp && rakuten.items != 'ashiato' ) {
			var randNum = Math.floor(Math.random() * 10);
			var mDate = "_0422";

			if(randNum < 2) {
					rakuten.measurementId = 'js_' + checkIE() + mDate;
					return true;
			} else if(randNum < 4) {
					rakuten.measurementId = 'fl_' + checkIE() + mDate;
					return false;
			}
	}
	return false;
}
 function checkItemType(){
   if(rakuten.recommend == 'on') return 'ashiato';
   return rakuten.items;
 }

 function checkIE(){
	 var agent = navigator.userAgent;
	 if(agent.indexOf('MSIE') != -1){
		 return "IE";
	 }else{
		 return "other";
	 }
 }

 function checkBrowser(){
	 var agent = navigator.userAgent;
	 if(agent.indexOf('MSIE') != -1){
		 return "IE";
	 }else if(agent.indexOf('Chrome') != -1){
		 return "Chrome";
	 }else if(agent.indexOf('Safari') != -1){
		 return "Safari";
	 }else if(agent.indexOf('Firefox') != -1){
		 return "Firefox";
	 }else{
		 return "other";
	 }
 }

 function escapeHTML(str) {
	   if ( null == str ) return '';
	   str += '';
	   return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;");
 }

 function createIframe (url) {
	 document.write('<iframe width="'    + iframe_width  + '"'
			 + ' height="'       + iframe_height + '"'
			 + ' marginheight="0"'
			 + ' marginwidth="0"'
			 + ' scrolling="no"'
			 + ' frameBorder="0"'
			 + ' src=' + escapeHTML(url) 
			 + '?rakuten_design='       + escapeHTML(rakuten.design)
			 + '&rakuten_affiliateId='  + escapeHTML(rakuten.affiliateId)
			 + '&rakuten_items='        + escapeHTML(rakuten.items)
			 + '&rakuten_genreId='      + escapeHTML(rakuten.genreId)
			 + '&rakuten_size='         + escapeHTML(rakuten.size)
			 + '&rakuten_target='       + escapeHTML(rakuten.target)
			 + '&rakuten_theme='        + escapeHTML(rakuten.theme)
			 + '&rakuten_border='       + escapeHTML(rakuten.border)
			 + '&rakuten_auto_mode='    + escapeHTML(rakuten.auto_mode)
			 + '&rakuten_genre_title='  + escapeHTML(rakuten.genre_title)
			 + '&rakuten_pointbackId='  + escapeHTML(pointbackId)
			 + '&rakuten_no_link='      + escapeHTML(rakuten.no_link)
			 + '&rakuten_no_afl='       + escapeHTML(rakuten.no_afl)
			 + '&rakuten_no_logo='      + escapeHTML(rakuten.no_logo)
			 + '&rakuten_undispGenre='  + escapeHTML(rakuten.undispGenre)
			 + '&rakuten_wmode='        + escapeHTML(rakuten.wmode)
			 + '&rakuten_noScrollButton='+ escapeHTML(rakuten.noScrollButton)
			 + '&rakuten_recommend='+ escapeHTML(rakuten.recommend)
			 + '&rakuten_service_flag='+ escapeHTML(rakuten.service_flag)
			 + '&rakuten_adNetworkId='    + escapeHTML(rakuten.adNetworkId)
			 + '&rakuten_adNetworkUrl='   + escapeHTML(rakuten.adNetworkUrl)
			 + '&rakuten_searchKeyword=' + escapeHTML(rakuten.searchKeyword)
			 + '&rakuten_mediaId=' + escapeHTML(rakuten.mediaId)
			 + '&rakuten_measurementId=' + escapeHTML(rakuten.measurementId)
			 + '&rakuten_pointSiteId=' + escapeHTML(rakuten.pointSiteId)
			 + '&rakuten_isAdvanced=' + escapeHTML(isAdvanced)
			 + '&rakuten_version=' + escapeHTML(lastUpdatedDate)
			 + escapeHTML(rakutenPreviewTag)
			 + '>'
			 + '</iframe>'
			 );
 }


 function createPCIframe (url) {
 var sizeArray = rakuten.size.split("x");
 var width = sizeArray[0];
 var height = sizeArray[1];
	 document.write('<iframe width="'    + escapeHTML(width)  + '"'
			 + ' height="'       + escapeHTML(height) + '"'
			 + ' frameBorder="0"'
			 + ' scrolling="no"'
			 + ' allowtransparency="true"'
			 + ' src=' + escapeHTML(url) 
			 + '?rakuten_design='       + escapeHTML(rakuten.design)
			 + '&rakuten_affiliateId='  + escapeHTML(rakuten.affiliateId)
			 + '&rakuten_items='        + escapeHTML(rakuten.items)
			 + '&rakuten_genreId='      + escapeHTML(rakuten.genreId)
			 + '&rakuten_size='         + escapeHTML(rakuten.size)
			 + '&rakuten_pattern='      + escapeHTML(pattern)
			 + '&rakuten_target='       + escapeHTML(rakuten.target)
			 + '&rakuten_theme='        + escapeHTML(rakuten.theme)
			 + '&rakuten_border='       + escapeHTML(rakuten.border)
			 + '&rakuten_auto_mode='    + escapeHTML(rakuten.auto_mode)
			 + '&rakuten_genre_title='  + escapeHTML(rakuten.genre_title)
			 + '&rakuten_pointbackId='  + escapeHTML(pointbackId)
			 + '&rakuten_no_link='      + escapeHTML(rakuten.no_link)
			 + '&rakuten_no_afl='       + escapeHTML(rakuten.no_afl)
			 + '&rakuten_no_logo='      + escapeHTML(rakuten.no_logo)
			 + '&rakuten_undispGenre='  + escapeHTML(rakuten.undispGenre)
			 + '&rakuten_wmode='        + escapeHTML(rakuten.wmode)
			 + '&rakuten_noScrollButton='	+ escapeHTML(rakuten.noScrollButton)
			 + '&rakuten_bgColor='      + escapeHTML(rakuten.bgColor)
			 + '&rakuten_txtColor='     + escapeHTML(rakuten.txtColor)
			 + '&rakuten_captionColor=' + escapeHTML(rakuten.captionColor)
			 + '&rakuten_moverColor='   + escapeHTML(rakuten.moverColor)
			 + '&rakuten_recommend='+ escapeHTML(rakuten.recommend)
			 + '&rakuten_service_flag='	+ escapeHTML(rakuten.service_flag)
			 + '&rakuten_adNetworkId='  + escapeHTML(rakuten.adNetworkId)
			 + '&rakuten_adNetworkUrl=' + escapeHTML(rakuten.adNetworkUrl)
			 + '&rakuten_searchKeyword='+ escapeHTML(rakuten.searchKeyword)
			 + '&rakuten_disableLogo='  + escapeHTML(rakuten.disableLogo)
			 + '&rakuten_moverItembgColor=' + escapeHTML(rakuten.moverItembgColor)
			 + '&rakuten_moverCaptionColor='+ escapeHTML(rakuten.moverCaptionColor)
			 + '&rakuten_slideSpeed='		+ escapeHTML(rakuten.slideSpeed)
			 + '&rakuten_moreInfoColor='+ escapeHTML(rakuten.moreInfoColor)
			 + '&rakuten_subTxtColor='	+ escapeHTML(rakuten.subTxtColor)
			 + '&rakuten_loadingImage=' + escapeHTML(rakuten.loadingImage)
			 + '&rakuten_imageDisplay=' + escapeHTML(rakuten.imageDisplay)
			 + '&rakuten_txtDisplay='		+ escapeHTML(rakuten.txtDisplay)
			 + '&rakuten_captionDisplay='		+ escapeHTML(rakuten.captionDisplay)
			 + '&rakuten_moreInfoDisplay='	+ escapeHTML(rakuten.moreInfoDisplay)
			 + '&rakuten_txtRow='				+ escapeHTML(rakuten.txtRow)
			 + '&rakuten_captionRow='		+ escapeHTML(rakuten.captionRow)
			 + '&rakuten_auto_interval='+ escapeHTML(rakuten.auto_interval)
			 + '&rakuten_imageSize='		+ escapeHTML(rakuten.imageSize)
			 + '&rakuten_slideCell='		+ escapeHTML(rakuten.slideCell)
			 + '&rakuten_slideDirection='		+ escapeHTML(rakuten.slideDirection)
			 + '&rakuten_order='				+ escapeHTML(rakuten.order)
			 + '&rakuten_loadingTimeout='		+ escapeHTML(rakuten.loadingTimeout)
			 + '&rakuten_mediaId=' + escapeHTML(rakuten.mediaId)
			 + '&rakuten_measurementId=' + escapeHTML(rakuten.measurementId)
			 + '&rakuten_pointSiteId=' + escapeHTML(rakuten.pointSiteId)
			 + '&rakuten_isAdvanced=' + escapeHTML(isAdvanced)
			 + '&rakuten_version='			+ escapeHTML(lastUpdatedDate)
			 + escapeHTML(rakutenPreviewTag)
			 + '>'
			 + '</iframe>'
			 );
 }

 function checkSmartPhone () {
	 var isSmartPhone = false;
	 var agent = navigator.userAgent;
	 if (agent.indexOf('iPhone') != -1) {
		 return true;
	 } else if (agent.indexOf('iPad') != -1) {
		 return true;
	 } else if (agent.indexOf('iPod') != -1) {
		 return true;
	 } else if (agent.indexOf('Android') != -1) {
		 return true;
	 } else {
		 return isSmartPhone;
	 }
 }

 function itemMap() {
	 var innerfunction = (function(){
			 var mapping = {'ranking': '00',
			 'ctsmatch': '01',
			 'ashiato': '04',
			 'productranking': '20', 
			 'newproduct': '26'};
			 return function(code) {
			 return (typeof mapping[code] != "undefined")? mapping[code] : '';
			 };
			 })();
	 return innerfunction;
 }

 function slideSizeMap() {
	 var innerfunction = (function(){
			 var mapping = {
			 '468x160': '00',
			 '600x200': '10',
			 '728x200': '20',
			 '120x240': '30',
			 '148x300': '40',
			 '200x350': '50',
			 '148x600': '60',
			 '200x600': '70',
			 '450x160': '80',
			 '300x160': '90',
			 '300x250': '02', 
			 '120x170': '12',
			 '160x600': '22', 
			 '200x200': '32', 
			 '250x250': '42',
			 '336x280': '52',
			 '728x90' : '62',
			 '468x60' : '72',
			 '320x48' : '82',
			 '120x600': '92'};
			 return function(code) {
				 return (typeof mapping[code] != "undefined")? mapping[code] : '';
			 };
	 })();
	 return innerfunction;
 }

 function textSizeMap() {
	 var innerfunction = (function(){
			 var mapping = {
			 '125x125': '05',
			 '120x600': '15',
			 '160x600': '25',
			 '180x150': '35',
			 '120x240': '45',
			 '200x200': '55',
			 '250x250': '65',
			 '300x250': '75',
			 '336x280': '85',
			 '728x90' : '95',
			 '468x60' : '06'};
			 return function (code) {
			 return ( typeof mapping[code] != "undefined" ) ? mapping[code] : '';
			 };
			 })();
	 return innerfunction;
 }

 function getPointbackId () {
        // Exist MediaId
        if ( existMediaId() ) return rakuten.pointbackId;
        // Not MediaId
        return setItemAndSize(setDefaultPointbackId(rakuten.pointbackId));
 }

 function setDefaultPointbackId (aPointbackId) {
       if (0 != aPointbackId.length) {
               return aPointbackId;
       }
       return formatPointbackId + "0000" ;
}

 function setItemAndSize (aPointbackId) {
         if( aPointbackId.length > 0 && aPointbackId.substring(10, 11) == 1 ){
                //is_corp
                return aPointbackId;
         }
         return aPointbackId.substring(0, 11) +  itemNumber + sizeNumber;
 }

 function existMediaId () {
         if (rakuten.mediaId) return true;
         return false;
 }

 //flash player version check
 /*
		function hasFlashPlayer() {
		if(checkBrowser() == "IE"){
 // for IE
 try{
 // flash player install check
 var aox = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10");
 }catch(e){
 return false;
 }
 return true;
 }else{
 // for not IE
 var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
 if(plugin){
 var f_ver = parseInt(plugin.description.match(/\d+\.\d+/));
 if(f_ver >= 9) {
 return true;
 }
 }
 return false;
 }
 }*/

})({
 design:         typeof rakuten_design         != 'undefined' ? rakuten_design : 'slide'
,items:          typeof rakuten_items          != 'undefined' ? rakuten_items : 'ranking'
,items_sub:      typeof rakuten_items_sub      != 'undefined' ? rakuten_items_sub : ''
,genreId:        typeof  rakuten_genreId       != 'undefined' ? rakuten_genreId : '0'
,size:           typeof rakuten_size           != 'undefined' ? rakuten_size : '120x240'
,target:         typeof rakuten_target         != 'undefined' ? rakuten_target : 'off'
,theme:          typeof rakuten_theme          != 'undefined' ? rakuten_theme : 'gray'
,border:         typeof rakuten_border         != 'undefined' ? rakuten_border : 'off'
,auto_mode:      typeof rakuten_auto_mode      != 'undefined' ? rakuten_auto_mode : 'off'
,genre_title:    typeof rakuten_genre_title    != 'undefined' ? rakuten_genre_title : 'off'
,rlogin:         typeof rakuten_rlogin         != 'undefined' ? rakuten_rlogin : 'off'
,pointbackId:    typeof rakuten_pointbackId    != 'undefined' ? rakuten_pointbackId : ''
,recommend:      typeof rakuten_recommend      != 'undefined' ? rakuten_recommend : 'off'
,no_link:        typeof rakuten_no_link        != 'undefined' ? rakuten_no_link : 'off'
,no_afl:         typeof rakuten_no_afl         != 'undefined' ?  rakuten_no_afl : 'off'
,no_logo:        typeof rakuten_no_logo        != 'undefined' ? rakuten_no_logo : 'off'
,undispGenre:    typeof rakuten_undispGenre    != 'undefined' ? rakuten_undispGenre : 'off'
,wmode:          typeof rakuten_wmode          != 'undefined' ? rakuten_wmode : 'off'
,affiliateId:    typeof rakuten_affiliateId    != 'undefined' ? rakuten_affiliateId : ''
,service_flag:   typeof rakuten_service_flag   != 'undefined' ? rakuten_service_flag : 'ichiba'
,noScrollButton: typeof rakuten_noScrollButton != 'undefined' ? rakuten_noScrollButton : 'off'
,preview:        typeof rakuten_preview        != 'undefined' ? rakuten_preview : 'false'
,bgColor:        typeof rakuten_bgColor        != 'undefined' ? rakuten_bgColor : 'FFFFFF'
,txtColor:       typeof rakuten_txtColor       != 'undefined' ? rakuten_txtColor : '1D54A7'
,captionColor:   typeof rakuten_captionColor   != 'undefined' ? rakuten_captionColor : '000000'
,moverColor:     typeof rakuten_moverColor     != 'undefined' ? rakuten_moverColor : 'C00000'
,adNetworkId:    typeof rakuten_adNetworkId    != 'undefined' ? rakuten_adNetworkId : ''
,adNetworkUrl:   typeof rakuten_adNetworkUrl   != 'undefined' ? rakuten_adNetworkUrl : ''
,disableLogo:    typeof rakuten_disableLogo    != 'undefined' ? rakuten_disableLogo  : ''
,searchKeyword:  typeof rakuten_searchKeyword  != 'undefined' ? rakuten_searchKeyword  : ''
,moverItembgColor:  typeof rakuten_moverItembgColor  != 'undefined' ? rakuten_moverItembgColor  : ''
,moverCaptionColor:  typeof rakuten_moverCaptionColor  != 'undefined' ? rakuten_moverCaptionColor  : ''
,pattern:        typeof rakuten_pattern        != 'undefined' ? rakuten_pattern  : 'default'
,slideSpeed:     typeof rakuten_slideSpeed     != 'undefined' ? rakuten_slideSpeed  : '250'
,moreInfoColor:  typeof rakuten_moreInfoColor  != 'undefined' ? rakuten_moreInfoColor  : 'red'
,subTxtColor:    typeof rakuten_subTxtColor    != 'undefined' ? rakuten_subTxtColor  : ''
,loadingImage:   typeof rakuten_loadingImage   != 'undefined' ? rakuten_loadingImage  : 'auto'
,imageDisplay:   typeof rakuten_imageDisplay   != 'undefined' ? rakuten_imageDisplay  : 'auto'
,txtDisplay:     typeof rakuten_txtDisplay     != 'undefined' ? rakuten_txtDisplay  : 'auto'
,captionDisplay: typeof rakuten_captionDisplay != 'undefined' ? rakuten_captionDisplay  : 'auto'
,moreInfoDisplay:typeof rakuten_moreInfoDisplay!= 'undefined' ? rakuten_moreInfoDisplay  : 'auto'
,txtRow:         typeof rakuten_txtRow         != 'undefined' ? rakuten_txtRow  : 'auto'
,captionRow:     typeof rakuten_captionRow     != 'undefined' ? rakuten_captionRow  : 'auto'
,auto_interval:  typeof rakuten_auto_interval  != 'undefined' ? rakuten_auto_interval  : '6000'
,imageSize:      typeof rakuten_imageSize      != 'undefined' ? rakuten_imageSize  : 'auto'
,slideCell:      typeof rakuten_slideCell      != 'undefined' ? rakuten_slideCell  : 'auto'
,slideDirection: typeof rakuten_slideDirection != 'undefined' ? rakuten_slideDirection  : 'auto'
,order:          typeof rakuten_order          != 'undefined' ? rakuten_order  : '0,1,2,3'
,loadingTimeout: typeof rakuten_loadingTimeout != 'undefined' ? rakuten_loadingTimeout  : '0'
,mediaId:        typeof rakuten_mediaId        != 'undefined' ? rakuten_mediaId: ''
,pointSiteId:    typeof rakuten_pointSiteId    != 'undefined' ? rakuten_pointSiteId: ''
,measurementId:  typeof rakuten_measurementId  != 'undefined' ? rakuten_measurementId: ''
});
rakuten_adNetworkId="";
rakuten_mediaId="";
rakuten_pointSiteId="";

