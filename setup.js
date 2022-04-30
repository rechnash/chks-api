let setup = {

    ddmode: EV.DEPLOY_MODE || 'test',
    ddlog: 'true',

    auth: {
        noip: {
            hostname: 'smcorezin.servehttp.com',
            user:     'luizpascoal87@gmail.com',
            pass:     'gagau234'
        }
    },

    port: {
        server: Number(EV.PORT_SERVER) || 3000,
        adbLocal: Number(EV.PORT_ADB_LOCAL) || 5555,
    }, 

    cashout: {
        min: Number(EV.MIN_CASHOUT) || 100,
        max: Number(EV.MAX_CASHOUT) || 270
    },

    delay: {
        ggrate: Number(EV.DELAY_GGRATE) || 3
    },

    chance: {
        flv: Number(EV.CHANCE_FLV) || 30,
        spAddress: Number(EV.CHANCE_SPADDR) || 60,
        mobileUserAgent: Number(EV.CHANCE_MOBUA) || 70
    }
}

module.exports = {
    set () {
        Object.assign(global, { SS: setup })
    }
}