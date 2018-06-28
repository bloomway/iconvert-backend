const LatestRate = require('../model/latest-rate.model');

const service = {};


module.exports = service;

function getRate(currencyCode) {
    return new Promise( (resolve, reject) => {
        LatestRate
            .find({'rate.code': currencyCode})
            .exec()
            .then( latestRate => resolve(latestRate))
            .catch( err => reject(err));

    });
}

function computeRate(rateSrc, rateDst) {
    return rateDst/rateSrc;
}

service.convert = (options) => {
    let rateValue = [];
    let src = 0, dst = 0;
    Promise.all([getRate(options.currencySrc), getRate(options.currencyDst)])
        .then( rates => {
           return rates.map( (rate, index) => rate.rates );
        })
        .then(rates => rateValue = rate)
        .catch (err => console.log(err));

    for( let idx in rateValue) {
        let val = rateValue[idx];
        for(prop in val) {
            if (prop === val[options.currencySrc]) {
                src = val[prop];
            }
            if (prop === val[options.currencyDSt]) {
                dst = val[prop];
            }
        }
    }

    let realRate = computeRate(src, dst);
};