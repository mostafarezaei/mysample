importScripts('lovefield.js', 'require.js', 'require.config.js');

self.addEventListener('install', function(e) {});

self.addEventListener('activate', function(e) {});

self.addEventListener('message', function(event) {
 debugger;
 var schemaBuilder = lf.schema.create('crdb', 1);
 schemaBuilder.createTable('Asset').
 addColumn('id', lf.Type.STRING).
 addColumn('asset', lf.Type.STRING).
 addColumn('timestamp', lf.Type.INTEGER).
 addPrimaryKey(['id']);

 // Schema is defined, now connect to the database instance.
 schemaBuilder.connect().then(
  function(db) {
   debugger;
  });
});
