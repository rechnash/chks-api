module.exports = {

    '/checkout/:infotxt' : {

        method: 'post',

        async handler (req, res) {

            clog('   ...running /checkout', '\n')

            const infotxt = req.params.infotxt;

            clog('   * infotxt: ', infotxt, '\n')
            clog('   ')

            res.send({ infotxt }).end()

        }
    },

    '/online' : {

        method: 'get',

        async handler (req, res) {

            clog('   ...running /test/online', '\n')
            
            res.status(200)
                .send({res: true})
                    .end()

        }
    }
}

function infoTextToObject (_inft) {

    let inft  = _inft.replace(/ /g,''),
        toarr = inft.split('|');

    return {
        number: toarr[0],
        month: toarr[1],
        year: toarr[2],
        cvv: toarr[3]
    }
}