(()=>{"use strict";chrome.runtime.onMessage.addListener((function(o,e,c){o.color?(console.log("Receive color = "+o.color),document.body.style.backgroundColor=o.color,c("Change color to "+o.color)):c("Color message is none.")}))})();