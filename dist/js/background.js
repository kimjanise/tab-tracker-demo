(()=>{"use strict";var t=function(t,o,e,i){return new(e||(e=Promise))((function(n,s){function r(t){try{l(i.next(t))}catch(t){s(t)}}function d(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var o;t.done?n(t.value):(o=t.value,o instanceof e?o:new e((function(t){t(o)}))).then(r,d)}l((i=i.apply(t,o||[])).next())}))};let o=null;chrome.storage.local.get(["todos"],(t=>{const e=(t.todos||[]).find((t=>t.active));e&&(o=e.id,console.log(`Active id: ${e.id}`))})),chrome.runtime.onMessage.addListener(((t,e,i)=>{"SET_ACTIVE_TODO"===t.type&&(o=t.todoId),i({success:!0})})),chrome.tabs.onCreated.addListener((e=>t(void 0,void 0,void 0,(function*(){if(console.log(`tab: ${e}, ${e.url}, ${e.title}, ${o}`),!(o&&e.url&&e.title&&e.id))return;const{todos:t=[]}=yield chrome.storage.local.get(["todos"]),i=t.find((t=>t.id===o));if(!(null==i?void 0:i.tabs))return;if(i.tabs.some((t=>t.id===e.id||t.currentUrl===e.url||t.title===e.title||t.title===e.url)))return;const n={id:e.id,currentUrl:e.url,history:[],title:e.title,timestamp:Date.now()},s=t.map((t=>t.id===o?Object.assign(Object.assign({},t),{tabs:[...t.tabs||[],n]}):t));console.log(`Updated todos: ${s}`),yield chrome.storage.local.set({todos:s})})))),chrome.tabs.onUpdated.addListener(((e,i,n)=>t(void 0,void 0,void 0,(function*(){var t;if(!o||!i.url||(null===(t=n.url)||void 0===t?void 0:t.includes("chrome://newtab/")))return;const{todos:s=[]}=yield chrome.storage.local.get(["todos"]),r=s.find((t=>t.id===o));if(!(null==r?void 0:r.tabs))return;const d=r.tabs.find((t=>t.id===n.id||t.currentUrl===n.url||t.title===n.title||t.title===n.url)),l=s.map((t=>{var s;if(t.id===o){let o;return o=d&&d.currentUrl!==n.url?null===(s=t.tabs)||void 0===s?void 0:s.map((t=>t.id===e?Object.assign(Object.assign({},t),{history:[t.currentUrl,...t.history].slice(0,50),currentUrl:i.url,title:n.title||i.url,timestamp:Date.now()}):t)):[{id:e,currentUrl:i.url,history:[],title:n.title||i.url,timestamp:Date.now()},...t.tabs||[]],Object.assign(Object.assign({},t),{tabs:o})}return t}));yield chrome.storage.local.set({todos:l})})))),chrome.windows.onRemoved.addListener((o=>t(void 0,void 0,void 0,(function*(){const{todos:t=[]}=yield chrome.storage.local.get(["todos"]),e=t.map((t=>t.windowId===o?Object.assign(Object.assign({},t),{windowId:void 0}):t));yield chrome.storage.local.set({todos:e})})))),chrome.windows.onFocusChanged.addListener((e=>t(void 0,void 0,void 0,(function*(){if(e===chrome.windows.WINDOW_ID_NONE)return;const{todos:t=[]}=yield chrome.storage.local.get(["todos"]),i=t.find((t=>t.windowId===e));if(i){o=i.id;const e=t.map((t=>Object.assign(Object.assign({},t),{active:t.id===i.id})));yield chrome.storage.local.set({todos:e})}})))),chrome.runtime.onInstalled.addListener((()=>{console.log("Extension installed")}))})();