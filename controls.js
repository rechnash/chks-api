module.exports = {

    '/checkout/:infotxt' : {

        method: 'post',

        async handler (req, res) {

            console.log('   ...running /checkout', '\n')

            const infotxt = req.body;

            console.log('   * info: ', info, '\n')
            console.log('   ')

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