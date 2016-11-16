
// ==UserScript==
// @name         Hot Keys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    
  var keyCodes =   {"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,
                    "L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,
                    "W":87,"X":88,"Y":89,"Z":90}

    document.addEventListener("keydown", event=>{

        if( event.which == keyCodes.U && event.altKey ) {
            console.log('you pressed altKey U - unblock' );
            enableDisabledElements();

        }

        if( event.which == keyCodes.C && event.altKey ) {
            console.log('you pressed altKey C - contentEditable = true' );
            document.body.contentEditable = true;

        }
        
        if( event.which == keyCodes.P && event.altKey){
          console.log('you pressed altKey P - show passwords ');
          revealSavedHiddenPasswords(); 
        }
    
        if( event.which && event.altKey ) {
            console.log('you pressed altKey ' + event.which );
        }

    }, false);


    function revealSavedHiddenPasswords(){
        document.querySelectorAll('input[type=password]').forEach(v=>v.type='text');
    }

    function enableDisabledElements () {
        var selectors = ['button', 'input', 'textarea', 'select', 'li', 'a', 'fieldset', 'div', 'img'];
        selectors.forEach(selector=> {
            var elems =  document.querySelectorAll(selector);
            elems.forEach(el=> {
                el.disabled = false;
                el.classList.remove("disabled");
                el.readOnly = false;
            });
        });
    }
    
    
   
})();
