debugger;
importScripts('require.js', 'require.config.js');

var lastNumber = null;

onconnect = function(e) {
 debugger;

 require(['ydn', 'q'], function(ydn, q) {
  debugger;
  var port = e.ports[0];
  port.onmessage = handleMessages(e, ydn);
  port.start();
 });
}

function handleMessages(event, ydn) {
 debugger;
 //ws.ensureServerConnectivity();
 console.log('Handling message event:', event);
 switch (event.data.command) {
  case 'run':
   event.ports[0].postMessage({
    error: null,
    response: 'this is your response3!!'
   });
   break;
  default:
   // This will be handled by the outer .catch().
   throw 'Unknown command: ' + event.data.command;
 }
};
