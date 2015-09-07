// Manage which of the automatically generated REST endpoints to expose from Loopback application

/**
 * Main methods
 * require('co-loopback-rest-opt-in').enable(MyModel, ['create', 'findById'])
 */

var restMethods = [
  { name: 'create', isStatic: true },             // POST /[model]
  { name: 'deleteById', isStatic: true },         // DELETE /[model]/{id}
  { name: 'findById', isStatic: true },           // GET /[model]/{id}
  { name: 'upsert', isStatic: true },             // PUT /[model]
  { name: 'find', isStatic: true },               // GET /[model]
  { name: 'exists', isStatic: true },             // HEAD /[model]/{id} and GET /[model]/{id}/exists
  { name: 'updateAll', isStatic: true },          // POST /[model]/update
  { name: 'createChangeStream', isStatic: true }, // POST /[model]/change-stream and GET /[model]/change-stream
  { name: 'count', isStatic: true },              // GET /[model]/count
  { name: 'findOne', isStatic: true },            // GET /[model]/findOne
  { name: 'updateAttributes', isStatic: false }   // PUT /[model]/{id}
]

module.exports.enable = function (modelObj, enable) {
  enable = enable || []
  restMethods.forEach(function (method) {
    if (enable.indexOf(method.name) === -1) {
      modelObj.disableRemoteMethod(method.name, method.isStatic)
    }
  })
}

/**
 * Relation methods
 * require('co-loopback-rest-opt-in').enableRelated(Inbox, 'InboxMessage', ['create', 'delete'])
 * The relationModelName is found in model.json relations specification
 */

var restRelationMethods = [
  { name: 'prototype.__create__', isStatic: true },
  { name: 'prototype.__destroyById__', isStatic: true },
  { name: 'prototype.__updateById__', isStatic: true },
  { name: 'prototype.__get__', isStatic: true },
  { name: 'prototype.__findById__', isStatic: true },
  { name: 'prototype.__delete__', isStatic: true },
  { name: 'prototype.__count__', isStatic: true },
]

module.exports.enableRelated = function (modelObj, relationModelName, enable) {
  enable = enable || []
  restRelationMethods.forEach(function (method) {
    var enableCurrent = enable.some(function(enableMethod) {
      return method.name.indexOf(enableMethod) !== -1
    })
    if (!enableCurrent) {
      modelObj.disableRemoteMethod(method.name + relationModelName, method.isStatic)
    }
  })
}
