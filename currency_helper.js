/**
 * Created by SUCCESS\phungdinh on 4/17/15.
 */
var df_usd_rate = 20000;
var df_eu_rate = 40000;

function changeVNDToUSD(number, rate){
    var rate = rate || df_usd_rate;
    if(rate > 0){
        return Math.round(number/rate, 2);
    }
    else{
        console.log("rate error, can not change to USD");
        return 0;
    }
}

function changeVNDToEU(number, rate){
    var rate = rate || df_eu_rate;
    if(rate > 0){
        return Math.round(number/rate, 2);
    } else {
        console.log("rate error, can not chang to EURO");
        return 0;
    }
}

function changeUSDToVND(number, rate){
    var rate = rate || df_usd_rate;
    return Math.round(number * rate, 2);
}

exports.changeVNDToUSD = changeVNDToUSD;
exports.changeUSDToVND = changeUSDToVND;