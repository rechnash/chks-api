const     express = require('express'),
          router = express.Router()

let controls = require('./controls.js')
    
clog('\ndonchks/chks-api/controls.js =', controls, '\n')   

for (let _key in controls) {
     let _ctr = controls[_key]
     router[_ctr.method](_key, _ctr.handler)
}

module.exports = router;