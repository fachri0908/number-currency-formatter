# number-currency-formatter
number-currency-formatter is leighweight and easy to use javascript package for convert number to currency and custom format.
there are global conversion to convert number to any available currency, and also custom format.

## Project setup
```
yarn add number-currency-formatter or npm i number-currency-formatter
```
## usage
````
import CurrencyFormat from 'number-currency-formatter'

CurrencyFormat.global(99999, 'usd')

CurrencyFormat.custom(99999,{symbol:'$',separator:',',decimalPlaces:2,decimalPoint:'.',symbolLocation:'front'})

````

## Parameters
###global
param name | type | default
------------ | ------------ | ------------
value (required) | double | -
currency | string | usd

###custom
param name | type | default
------------ | ------------ | ------------
value (required) | double | -
options | object | -

available currency are : usd, idr,eur, jpy, inr, aed, cny, myr, krw, thb,rub

####options
name | type | default
------------ | ------------ | ------------
symbol | string | none
separator | separator | none
decimalPlaces | number | none
decimalPoint | string | none (decimalPoint will be set to . if decimalPlaces provided)
symbolLocation | string (front or back) | front
