module.exports = (val, cur='usd') => {
    let local;
    let currency;
    switch(cur){
        case 'usd':
            currency='USD';
            local='en-US';break;
        case 'idr':
            currency='IDR';
            local='id';break;
        case 'eur':
            currency='EUR';
            local='en-GB';break;
        case 'jpy':
            currency='JPY';
            local='ja';break;
        case 'inr':
            currency='INR';
            local='hi';break;
        case 'aed':
            currency='AED';
            local='ar';break;
        case 'cny':
            currency='CNY';
            local='zh';break;
        case 'myr':
            currency='MYR';
            local='ms';break;
        case 'krw':
            currency='KRW';
            local='ko';break;
        case 'thb':
            currency='THB';
            local='th';break;
        case 'rub':
            currency='RUB';
            local='ru';break;
    }
    let formatter = new Intl.NumberFormat(local, {
        style: 'currency',
        currency: currency,
    });
    return formatter.format(val)
}