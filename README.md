# Loopback REST opt-in

Use this module to choose which automatically generated Loopback REST endpoints to enable rather than which to disable

Install using NPM

```bash
npm install --save git+npm install --save git+https://git@github.com/calleboketoft/co-loopback-rest-opt-in.git
```

Use in the models
```javascript
require('co-loopback-rest-opt-in').enable(MyModel, ['create', 'findById'])
```
See the source code for which endpoints can be specified