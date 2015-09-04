// Use this module to choose which REST endpoints to enable rather which to disable
// require('co-loopback-rest-opt-in').enable(MyModel, ['create', 'findById'])

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
  restMethods.forEach(function (method) {
    if (enable.indexOf(method.name) === -1) {
      modelObj.disableRemoteMethod(method.name, method.isStatic)
    }
  })
}