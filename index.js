
// ****** Metric length conversion ******

//centimeters to millimeters
const centimeters_to_millimeters =(centimeter) => {
    return centimeter * 10
}

//decimeters to centimeters
const decimeters_to_centimeters = (decimeter) => {
    return decimeter * 10
}

//meters to centimeters
const meters_to_centimeters = (meter) => {
    return meter * 100
}

//meters to decimeters
const meters_to_decimeters = (meter) => {
    return meter * 10
}

//kilometers to meters
const kilometers_to_meters = (kilometer) => {
    return kilometer * 1000
}

// ****** Metric area conversion ******

//square centimeters to square millimeters
const squareCentimeters_to_squareMillimeters = (squareCentimeter) => {
    return sqmillimeters * 100
}

//square meters to square centimeters
const squareMeters_to_squareCentimeters = (sqmeter) => {
    return sqmeter * 10000
}

//hectares to square meters
const hectares_to_squareMeters = (hectare) => {
    return hectare * 10000
}

// square kilometers to hectares
const squareMeters_to_hectares = (sqkilometer) => {
    return sqkilometer * 100
}

//square kilometers to square meters
const squareKilometers_to_squareMeters = (sqkilometer) => {
    return sqkilometer * 1000000
}


// ****** Metric volume conversion ******

//cubic centimeters to cubic millimeter
const cubicCentimeters_to_cubicMillimeters = (cubicCentimeter) => {
    return cubicCentimeter * 1000
}

//cubic decimeters to cubic centimeter
const cubicDecimeters_to_cubicCentimeters = (cubicDecimeter) =>{
    return cubicDecimeter * 1000
}

//cubic meters to cubic centimeter
const cubicMeters_to_cubicCentimeters = (cubicMeter) => {
    return cubicMeter * 1000000
}

//cubic meters to cubic decimeter
const cubicMeters_to_cubicDecimeters = (cubicMeter) => {
    return cubicMeter * 1000
}


// ****** Metric weight conversion ******

//grams to milligrams
const grams_to_milligrams = (gram) => {
    return gram * 1000
}

//decagrams to grams
const decagrams_to_grams = (decagram) => {
    return decagram * 10
}

//kilograms to grams
const kilograms_to_grams = (kilogram) => {
    return kilogram * 1000
}

//tonnes to kilogram
const tonnes_to_kilograms = (tonne) => {
    return tonne * 1000
}

//gigagrams to megagram 
const gigagrams_to_megagrams = (gigagram) => {
    return gigagram * 1000
}


// ****** Metric liquid conversion ******

//centiliters to milliliters
const centiliters_to_milliliters = (centiliter) => {
    return centiliter * 10
}

//deciliters to centiliters
const deciliters_to_centiliters = (deciliter) => {
    return deciliter * 10
}

//liters to milliliters
const liters_to_milliliters = (liter) => {
    return liter * 1000
}

//liters to deciliters
const liters_to_deciliters = (liter) => {
    return liter * 10
}

//kiloliters to liters
const kiloliters_to_liters = (kiloliter) => {
    return kiloliter * 1000
}


// ****** Byte conversion ******

//byte to bits
const bytes_to_bit = (bytes) => {
    return bytes * 8
}

//kilobyte to bytes
const kilobyte_to_byte = (kilobytes) => {
    return kilobytes * 1024
}

//megabyte to kilobytes
const megabyte_to_kilobytes = (megabytes) => {
    return megabytes * 1024
}

//gigabyte to megabytes
const gigabyte_to_megabytes = (gigabyte) => {
    return gigabyte * 1024
}

//terabyte to gigabytes
const terabytes_to_gigabyte = (terabytes) => {
    return terabytes * 1024
}

//petabyte to terabytes
const petabytes_to_terabyte = (petabytes) => {
    return petabytes * 1024
}

//exabyte to petabytes
const exabyte_to_petabytes = (exabyte) => {
    return exabyte * 1024
}

//zettabyte to exabytes
const zettabyte_to_exabytes = (zettabyte) => {
    return zettabyte * 1024
}

//yottabyte to zettabytes
const yottabyte_to_zettabytes = (yottabyte) => {
    return yottabyte * 1024
}



module.exports = {
    centimeters_to_millimeters,
    decimeters_to_centimeters,
    meters_to_centimeters,
    meters_to_decimeters,
    kilometers_to_meters,
    squareCentimeters_to_squareMillimeters,
    squareMeters_to_squareCentimeters,
    hectares_to_squareMeters,
    squareMeters_to_hectares,
    squareKilometers_to_squareMeters,
    cubicCentimeters_to_cubicMillimeters,
    cubicDecimeters_to_cubicCentimeters,
    cubicMeters_to_cubicCentimeters,
    cubicMeters_to_cubicDecimeters,
    grams_to_milligrams,
    decagrams_to_grams,
    kilograms_to_grams,
    tonnes_to_kilograms,
    gigagrams_to_megagrams,
    centiliters_to_milliliters,
    deciliters_to_centiliters,
    liters_to_milliliters,
    liters_to_deciliters,
    kiloliters_to_liters,
    bytes_to_bit,
    kilobyte_to_byte,
    megabyte_to_kilobytes,
    gigabyte_to_megabytes,
    terabytes_to_gigabyte,
    petabytes_to_terabyte,
    exabyte_to_petabytes,
    zettabyte_to_exabytes,
    yottabyte_to_zettabytes
}