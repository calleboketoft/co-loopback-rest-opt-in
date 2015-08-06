# Loopback REST opt-in

 Use this module to choose which REST endpoints to enable rather which to disable

Use in the models
```javascript
require('restMethods').enable(MyModel, ['create', 'findById'])
```

Install using NPM

```bash
npm install --save git+https://git@github.com/calleboketoft/loopback-rest-opt-in.git
```