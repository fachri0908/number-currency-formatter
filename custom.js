module.exports = (val, options) => {
    // check for options
    symbol=(options.symbol)?options.symbol:''
    dp=(options.decimalPlaces)?options.decimalPlaces:0
    decpoint=(options.decimalPoint)?options.decimalPoint:''
    //set value of decimal point by . if decimal places provided but decimal point not provided
    decpoint=(dp!=0 && decpoint==='')?'.':decpoint
    separator=(options.separator)?options.separator:''
    symbolpos=(options.symbolPosition)?options.symbolPosition:'front'
    var e = '',
        s = e+val,
        l = s.length,
        b = val < 0 ? 1 : 0,
        i = s.lastIndexOf('.'),
        j = i == -1 ? l : i,
        r = e,
        d = s.substr(j+1, dp);
    while ( (j-=3) > b ) {
      r = separator + s.substr(j, 3) + r;
    }
    if(symbolpos=='back'){
        return s.substr(0, j + 3) + r + (dp ? decpoint + d + ( d.length < dp ? ('00000').substr(0, dp - d.length):e):e) + symbol;
    }else{
        return symbol + s.substr(0, j + 3) + r + (dp ? decpoint + d + ( d.length < dp ? ('00000').substr(0, dp - d.length):e):e);
    }
}
