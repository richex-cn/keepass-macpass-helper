'use strict';

try {
  document.body.removeChild(window.iframe);
}
catch (e) {}
var iframe;

iframe = document.createElement('iframe');
iframe.setAttribute('style', `
  color-scheme: none;
  border: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000000000;
`);
document.body.appendChild(iframe);
iframe.onload = () => iframe.contentWindow.postMessage({
  pairs: window.pairs
}, '*');
iframe.src = chrome.runtime.getURL('/data/save/index.html') +
  '?url=' + encodeURIComponent(document.location.href);

