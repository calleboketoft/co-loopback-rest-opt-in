var tap = require('tap')
var lbRestOptIn = require('../lbRestOptIn')

// modelObj mock factory
function ModelObj () {
  return {
    disabled: {}, // obj so the deep comparison don't care about order
    disableRemoteMethod: function (methodToDisable) {
      this.disabled[methodToDisable] = 1
      return true
    }
  }
}

/**
 * enable
 */
tap.test('"enable" should be able to disable all methods', function (t) {
  var modelObj = ModelObj()
  lbRestOptIn.enable(modelObj, [])
  var expectedObj = {
    'create': 1,
    'deleteById': 1,
    'findOne': 1,
    'findById': 1,
    'upsert': 1,
    'find': 1,
    'exists': 1,
    'updateAll': 1,
    'createChangeStream': 1,
    'count': 1,
    'updateAttributes': 1
  }
  t.strictSame(expectedObj, modelObj.disabled)
  t.end()
})

tap.test('"enable" should skip disabling the specified methods', function (t) {
  var modelObj = ModelObj()
  lbRestOptIn.enable(modelObj, ['create', 'deleteById', 'findOne', 'findById'])
  var expectedObj = {
    // 'create': 1,
    // 'deleteById': 1,
    // 'findOne': 1,
    // 'findById': 1,
    'upsert': 1,
    'find': 1,
    'exists': 1,
    'updateAll': 1,
    'createChangeStream': 1,
    'count': 1,
    'updateAttributes': 1
  }
  t.strictSame(expectedObj, modelObj.disabled)
  t.end()
})

/**
 * enableRelated
 */
tap.test('"enableRelated" should be able to disable all methods', function (t) {
  var modelObj = ModelObj()
  lbRestOptIn.enableRelated(modelObj, 'Inbox', [])
  var expectedObj = {
    'prototype.__create__Inbox': 1,
    'prototype.__destroyById__Inbox': 1,
    'prototype.__updateById__Inbox': 1,
    'prototype.__get__Inbox': 1,
    'prototype.__findById__Inbox': 1,
    'prototype.__delete__Inbox': 1,
    'prototype.__count__Inbox': 1
  }
  t.strictSame(modelObj.disabled, expectedObj)
  t.end()
})

tap.test('"enableRelated" should skip disabling the specified methods', function (t) {
  var modelObj = ModelObj()
  lbRestOptIn.enableRelated(modelObj, 'Inbox', ['updateById', 'findById', 'count'])
  var expectedObj = {
    'prototype.__create__Inbox': 1,
    'prototype.__destroyById__Inbox': 1,
    // 'prototype.__updateById__Inbox': 1,
    'prototype.__get__Inbox': 1,
    // 'prototype.__findById__Inbox': 1,
    'prototype.__delete__Inbox': 1,
    // 'prototype.__count__Inbox': 1
  }
  t.strictSame(modelObj.disabled, expectedObj)
  t.end()
})
