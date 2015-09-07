# Loopback REST opt-in

Use this module to choose which automatically generated Loopback REST endpoints to enable rather than which to disable

Install using NPM

```bash
npm install --save git+npm install --save git+https://git@github.com/calleboketoft/co-loopback-rest-opt-in.git
```

Opt-in for REST methods
```javascript
require('co-loopback-rest-opt-in').enable(MyModel, ['create', 'findById'])
// create, deleteById, findById, upsert, find, exists, updateAll, createChangeStream, count, findOne, updateAttributes
```

Opt-in for REST methods for related resources
```javascript
require('co-loopback-rest-opt-in').enableRelated(MyModel, 'RelatedModel', ['create', 'destroyById'])
// create, destroyById, updateById, get, findById, delete, count
```
