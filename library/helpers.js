// helper functions
function delayRandom (_logTxt) {

    const min = $d.min,
          max = $d.max

    let _rms = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(_logTxt, _rms)

    return new Promise(resolve => setTimeout(resolve, _rms))
}

function getRandomAmount () {
    
    const min = $c.minCashout,
          max = $c.maxCashout;

    let _randomBtw5e9 = Math.floor(
            Math.random() * (max - min + 1)) + min

    // to multiple of 10
    return Math.round(_randomBtw5e9 / 10) * 10
}

function getRandomRating () {
    const chance = new Chance(),
          _base = [10,10,10,9,9,8];
    return chance.pickone(_base);
}

function getNanoid (str, leng, pre = '', suf = '') {
    const nanoid = customAlphabet(str, leng)
    return `${pre}${nanoid()}${suf}`
}

module.exports = {
    
    set () {

        clog('    Setting helpers.js as global .UU')
        
        const HH = {
            getNanoid,
            delayRandom,
            getRandomAmount,
            getRandomRating
        }

        Object.assign(global, { HH })
    }
}