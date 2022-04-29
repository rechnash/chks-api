const Promise = require('bluebird'),
      adb = require('adbkit');

function initAdbLocal (cb1) {

    clog('  ...running initAdbLocal()')

    let client = adb.createClient();

    checkConnection((deviceLocal, err1) => {

        if (err1) {
            cerr('  * Fail at checkConnection()', err1)
            cb1(null, err1)
            return;
        }

        if (deviceLocal) {
            clog('  ...connection already found', deviceLocal)
            
            // * Success resolving #1
            clog('  ...going on!')
            cb1(deviceLocal, null)

        } else {
        
            clog('  * No deviceLocal was found.')
            clog('  ...trying to establish connection.')
            
            connect(_deviceLocal, err2 => {
                if (err2) {
                    cerr('  Fail at connect()', err2)
                    cb1(null, err2)
                } else {
                    // * Success resolving #2
                    clog('  ...connect successfully', _deviceLocal)
                    clog('  ...going on!')
                    cb1(_deviceLocal, null)
                }
            })
        }

    })

    function checkConnection (cb2) {
        clog('      * Running checkConnection()')
        client.listDevices().then(devices => {
            clog('  ...devices:', devices)
            
            if (devices && devices[0]) {
                cb2(devices[0], null)
            } else {
                cb2(null, new Error('No devices detected'))
            }

            return devices
        }).then(r => r).catch(err => {
            cb2(null, err)
        })
    }

    function connect (cb3) {
        client.connect(
            'localhost',
             [SS.port.adbLocal], 
            (device) => {
                cb3(device, null)
        }).catch(err => {
            cb3(null, errr)
        })
    }
}

module.exports = initAdbLocal;