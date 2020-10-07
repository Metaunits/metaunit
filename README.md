# metaunit
Metaunit is NPM package for unit conversion.


## Installation

`npm i metaunit`

## Usage

### centimeter to millimters
```
const unit = require('metaunit');

const cm_to_mm = unit.centimeter_to_millimeters(1);
console.log(cm_to_mm);

```

### kilogram to grams
```
const unit = require('metaunit')

const kg_to_g = unit.kilogram_to_grams(20)
console.log(kg_to_g);

```

### liter to milliliter
```
const unit = require('metaunit')

const l_to_ml = unit.liter_to_milliliters(5)
console.log(l_to_ml);

```

## What does it do?

metaunit will convert you metric values. You only have to pass the desired unit values insdie as paramet of the method.

## When should I use

If you are trying to convert metric values use **metaunit**