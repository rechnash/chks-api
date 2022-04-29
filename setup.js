const setup = {

    deftport: 3000,

    ddmode: EV.DEPLOY_MODE || 'test',

    cashout: {
        min: EV.MIN_CASHOUT || 100,
        max: EV.MAX_CASHOUT || 270
    },

    delay: {
        ggrate: EV.DELAY_GGRATE || 3
    },

    chance: {
        flv: EV.CHANCE_FLV || 30,
        spAddress: EV.CHANCE_SPADDR || 60,
        mobileUserAgent: EV.CHANCE_MOBUA || 70
    }
}

module.exports = {
    set () {
        const SS = setup;
        Object.assign(global, { SS })
    }
}