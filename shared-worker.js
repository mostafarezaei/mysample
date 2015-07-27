importScripts('require.js', 'require.config.js');
debugger;

var lastNumber = null;

onconnect = function(e) {
 throw new exception("test");
 debugger;

 // require(['ydn'], function(ydn) {
 //  debugger;
 //  var port = e.ports[0];
 //  port.onmessage = handleMessages(e, ydn);
 //  port.start();
 // });
}

function handleMessages(event, ydn) {
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
