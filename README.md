# Loopback REST opt-in

Choose which automatically generated Loopback REST endpoints to enable rather than which to disable

Opt-in for REST methods
```javascript
var coOptIn = require('co-loopback-rest-opt-in')
coOptIn.enable(MyModel, [
  'create',
  'findById'
])
// create, deleteById, findById, upsert, find, exists,
// updateAll, createChangeStream, count, findOne,
// updateAttributes
```

Opt-in for REST methods for related resources
```javascript
var coOptIn = require('co-loopback-rest-opt-in')
coOptIn.enableRelated(MyModel, 'RelatedModel', [
  'create',
  'destroyById'
])
// create, destroyById, updateById, get, findById,
// delete, destory, update, count
```
