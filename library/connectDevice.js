const Promise = require('bluebird'),
      adb = require('adbkit'),
      client = adb.createClient();

function connectDevice() {
    
    client
      .listDevices()
        .then((devices) => {
            return Promise.filter(devices, (device) => {
                return client.getFeatures(device.id)
                    .then((features) => {
                        return features['android.hardware.nfc']
                    })
            })
        }).then((supportedDevices) => {
            clog('The following devices support NFC:', supportedDevices)
        }).catch((err) => {
            cerr('Something went wrong:', err.stack)
        })
}

module.exports = connectDevice;