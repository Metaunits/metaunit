
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
