importScripts('require.js', 'require.config.js');
debugger;
self.addEventListener('install', function(e) {
 debugger;
});

self.addEventListener('activate', function(e) {
 debugger;
});

self.addEventListener('message', function(event) {
 debugger;
 require({
  'packages': [{
   'name': 'ydn',
   'location': 'path/to/ydn-db',
   'main': 'ydn.db-iswu-core-e-qry-dev'
  }]
 }, ['ydn'], function(ydn) {
  debugger;
  console.log(ydn.db.version);
  var db = new ydn.db.Storage('db name');
 });
 // require(['ydn'], function(ydn) {
 //  debugger;
 // });
});
