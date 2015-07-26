importScripts('require.js', 'require.config.js');

self.addEventListener('install', function(e) {});

self.addEventListener('activate', function(e) {});

self.addEventListener('message', function(event) {
 debugger;
 require(['db'], function(db) {
  debugger;
 });
});
