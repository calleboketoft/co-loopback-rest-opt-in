# Loopback REST opt-in

 Use this module to choose which REST endpoints to enable rather which to disable

Use in the models
```javascript
require('restMethods').enable(MyModel, ['create', 'findById'])
```