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

// * toplevel local module requires...
const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        logger = require('morgan'),
        cors = require('cors'),
        { RateLimiterMemory } = require('rate-limiter-flexible');

const   initAdbLocal = require('./library/initAdbLocal.js'),
        initNoIpDUC = require('./library/initNoIpDUC.js');

// defined by and at
// the of initExpressServer()
var app;

// * inits
initAdbLocal(() => {
    initNoIpDUC(() => {
        initExpressServer();
    })
})

// define start app
// on a closed function
// so that it can be async
function initExpressServer () {

    // coonfig logs
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
    let $app = express(), 
        router = require('./router.js');

    // declare exp $app sets
    $app.set('trust proxy', true)

    // * declare cors behavior
    // ...firstly!
    $app.use(cors())

    // * declare http data parse middles
    $app.use(logger('dev'))
    $app.use(cookieParser())
    $app.use(express.json())
    $app.use(express.urlencoded({ extended: false }))

    // * declare static public dir
    $app.use(express
        .static(path
            .join(__dirname, 'public')))

    // ...finally!
    // * declare router
    $app.use('/', serverMiddelay, router)

    // routeless response
    $app.get('/', (req, res) => {
        res.status(200)
                .send('OK')
                    .end()
    })

    // ...start the server 
    // ...by listening on a port
    $app.listen(SS.port.server, '0.0.0.0', port => {

        clog('   ...$app was succesfully setup!\n')

        if (EV.NODE_ENV === 'deployment') {
            if (SS.ddlog === 'false') {
                console.log = clog == (...args) => {}
            }
        }

        UU.logPort(SS.port.server)(port)
    })

    $app = app;
}

function serverMiddelay (req, res, next) {  
    
    clog('   ...running serverMiddelay()')
    clog(`   ...awaiting SS.delay.ggrate`, SS.delay.ggrate)
    
    setTimeout(() => {
        next()
    }, 1000 * SS.delay.ggrate)
}
