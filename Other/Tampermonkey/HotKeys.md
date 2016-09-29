```javascript
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




    document.addEventListener("keydown", event=>{

        if( event.which == 85 && event.altKey ) {
            console.log('you pressed altKey U - unblock' );
            enableDisabledElements();

        }

        if( event.which == 67 && event.altKey ) {
            console.log('you pressed altKey C - contentEditable = true' );
            document.body.contentEditable = true;

        }
        if( event.which && event.altKey ) {
            console.log('you pressed altKey ' + event.which );
        }

    }, false);




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
```
