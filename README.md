# Loopback REST opt-in

Use this module to choose which REST endpoints to enable rather than which to disable

Use in the models
```javascript
require('co-loopback-rest-opt-in').enable(MyModel, ['create', 'findById'])
```

Install using NPM

```bash
npm install --save git+https://git@github.com/calleboketoft/co-loopback-rest-opt-in.git
```