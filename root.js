//###############root.js
// -*- coding: utf-8 -*-

(function ($)
{ //=================================================================================
    $(document).ready(function()
    {
        $(document).bind("deviceready", init);
    });

    function init()
    {
		alert("entra");
        var s = 'Device Name: '     + device.name     + '<br />' +
				'Device PhoneGap: ' + device.phonegap + '<br />' +
				'Device Platform: ' + device.platform + '<br />' +
				'Device UUID: '     + device.uuid     + '<br />' +
				'Device Version: '  + device.version  + '<br />';

       // $('#deviceProperties').html(s);

        var platform = device.platform;
		var p = navigator.platform;
		
/*        if(platform.search("iPad") != -1)
*/		if( p === 'iPad' )
        {
            alert("ipad");
            location.href="index_k.html";
        }

/*        if(platform.search("iPhone") != -1)
*/		else if(  p === 'iPod' )
        {
            alert("ipod");
            location.href="index_m.html";
        }
		else if(  p === 'iPhone' )
        {
            alert("iphone");
            location.href="index_m.html";
        }
		

    }

//=================================================================================
})(jQuery)// JavaScript Document