const NoIP = require('no-ip')

function initNoIpDUC (cb) {

    clog('\n    ...connecting NoIP DUC: initNoIpDUC() \n')
    
    try {
        
        let noip = new NoIP(SS.auth.noip)

        noip.on('error', (err) => {
            cerr(err)
            cb(null, err)
        })
         
        noip.on('success', (isChanged, ip) => {
            clog('\n    ...connection NoIP DUC started successfully. \n')
            cb({isChanged, ip}, null)
        })
         
        noip.start()
        noip.update() // Manual update, you can also provide a custom IP address
        
    } catch (err) {
        cerr('  Fail at new NoIP', err)
    }
}

module.exports = initNoIpDUC;