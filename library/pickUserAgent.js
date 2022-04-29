const 	UserAgent = require('user-agents'),
		Chance = require('chance');

function pickUserAgent () {

    const   chance = new Chance(),
            pickdesk = chance.bool({ 
                likelihood: UU.chance.mobileUserAgent
            })

    let deviceCategory = pickdesk 
                            ? 'desktop' 
                                : 'mobile',
        connection = pickdesk 
                            ? undefined 
                                : {
                                    rtt: 0,
                                    downlink: 10,
                                    effectiveType: "4g" };
    return new UserAgent({
        deviceCategory,
        connection
    })
}

module.exports = pickUserAgent;