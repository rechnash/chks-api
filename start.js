// * toplevel local module requires...
const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        logger = require('morgan'),
        cors = require('cors'),
        { RateLimiterMemory } = require('rate-limiter-flexible');

// gnative shortcuts
global.EV = process.env;
global.clog = console.log;
global.cerr = console.error;

// deffs globals .SS
require("dotenv").config()
require('./setup.js').set()

// deffs globals .UU & .HH
require('./library/util.js').set()
require('./library/helpers.js').set()

// * inits
// ...exports returned app
start()

// define start app
// on a closed function
// so that it can be async
async function start () {

    clog('\n    ...starting donchks/chks-api \n')
    clog('   EV.NODE_ENV',               `"${ EV.NODE_ENV }"`, '\n')
    clog('   SS.ddmode',                 `"${ SS.ddmode }"`)
    clog('   SS.cashout.min',            `"${ SS.cashout.min }"`)
    clog('   SS.cashout.max',            `"${ SS.cashout.max }"`)
    clog('   SS.delay.ggrate',           `"${ SS.delay.ggrate }"`)
    clog('   SS.delay.ggrate',           `"${ SS.delay.ggrate }"`)
    clog('   SS.chance.flv',             `"${ SS.chance.flv }"`)
    clog('   SS.chance.spAddress',       `"${ SS.chance.spAddress }"`)
    clog('   SS.chance.mobileUserAgent', `"${ SS.chance.mobileUserAgent }"`)

    // * toplevel local declarations
    var app = express(), 
        router = require('./router.js');

    // declare exp app sets
    app.set('trust proxy', true)

    // * declare cors behavior
    // ...firstly!
    app.use(cors())

    // * declare http data parse middles
    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    // * declare static public dir
    app.use(express
            .static(path
                    .join(__dirname, 'public')));

    // ...finally!
    // * declare router
    app.use('/', middelay, router)

    // routeless response
    app.get('/', (req, res) => {
        res.status(200)
                .send('OK')
                    .end()
    })

    // ...start the server 
    // ...by listening on a port
    app.listen(SS.deftort, port => {

        clog('   ...app was succesfully setup!\n')

        if (EV.NODE_ENV === 'deployment') {
            if (SS.depLog === 'false') {
                console.log = (...args) => {}
            }
        }

        UU.logPort(SS.deftort)(port)
    })
}

async function middelay (req, res, next) {  
    
    clog('   ...running serviceDelayMiddle()')
    clog(`   ...awaiting SS.delay.ggrate`, SS.delay.ggrate)
    
    await new Promise(resolve => 
                        setTimeout(resolve,
                                SS.delay.ggrate));
    next()
}