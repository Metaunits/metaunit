
![final](https://user-images.githubusercontent.com/34160159/95364104-07247300-08ee-11eb-81a0-89d276dcc439.png)


# metaunit
Metaunit is NPM package for unit conversion.


## Installation

`npm i metaunit`

## Usage

### centimeters to millimeters
```
const unit = require('metaunit');

const cm_to_mm = unit.centimeters_to_millimeters(1);
console.log(cm_to_mm);

```

### kilograms to grams
```
const unit = require('metaunit')

const kg_to_g = unit.kilograms_to_grams(20)
console.log(kg_to_g);

```

### liters to milliliter
```
const unit = require('metaunit')

const l_to_ml = unit.liters_to_milliliters(5)
console.log(l_to_ml);

```

## What does it do?

metaunit will convert you metric values. You only have to pass the desired unit values inside as parameter of the method.

## When should I use

If you are trying to convert metric values use **metaunit**


## Available metric conversions

```
    centimeters to millimeters
    decimeters to entimeters
    meters to centimeters
    meters to decimeters
    kilometers to meters
    squareCentimeters to squareMillimeters
    squareMeters to squareCentimeters
    hectares to squareMeters
    squareMeters to hectares
    squareKilometers to squareMeters
    cubicCentimeters to cubicMillimeters
    cubicDecimeters to cubicCentimeters
    cubicMeters to cubicCentimeters
    cubicMeters to cubicDecimeters
    grams to milligrams
    decagrams to grams
    kilograms to grams
    tonnes to kilograms
    gigagrams to megagrams
    centiliters to milliliters
    deciliters to centiliters
    liters to milliliters
    liters to deciliters
    kiloliters to liters
    bytes to bit
    kilobyte to byte
    megabyte to kilobytes
    gigabyte to megabytes
    terabytes to gigabyte
    petabytes to terabyte
    exabyte to petabytes
    zettabyte to exabytes
    yottabyte to zettabytes

```