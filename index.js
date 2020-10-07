
// ****** Metric length conversion ******

//centimeter to millimeters
const centimeter_to_millimeters =(centimeter) => {
    return centimeter * 10
}

//decimeter to centimeters
const decimeter_to_centimeters = (decimeter) => {
    return decimeter * 10
}

//meter to centimeters
const meter_to_centimeters = (meter) => {
    return meter * 100
}

//meter to decimeters
const meter_to_decimeters = (meter) => {
    return meter * 10
}

//kilometer to meters
const kilometer_to_meters = (kilometer) => {
    return kilometer * 1000
}

// ****** Metric area conversion ******

//square centimeter to square millimeters
const squareCentimeter_to_squareMillimeters = (squareCentimeter) => {
    return sqmillimeters * 100
}

//square meter to square centimeters
const squareMeter_to_squareCentimeters = (sqmeter) => {
    return sqmeter * 10000
}

//hectare to square meters
const hectare_to_squareMeters = (hectare) => {
    return hectare * 10000
}

// square kilometer to hectares
const squareMeter_to_hectares = (sqkilometer) => {
    return sqkilometer * 100
}

//square kilometer to square meters
const squareKilometer_to_squareMeters = (sqkilometer) => {
    return sqkilometer * 1000000
}


// ****** Metric volume conversion ******

//cubic centimeter to cubic millimeter
const cubicCentimeter_to_cubicMillimeters = (cubicCentimeter) => {
    return cubicCentimeter * 1000
}

//cubic decimeter to cubic centimeter
const cubicDecimeter_to_cubicCentimeters = (cubicDecimeter) =>{
    return cubicDecimeter * 1000
}

//cubic meter to cubic centimeter
const cubicMeter_to_cubicCentimeters = (cubicMeter) => {
    return cubicMeter * 1000000
}

//cubic meter to cubic decimeter
const cubicMeter_to_cubicDecimeters = (cubicMeter) => {
    return cubicMeter * 1000
}


// ****** Metric weight conversion ******

//gram to milligrams
const gram_to_milligrams = (gram) => {
    return gram * 1000
}

//decagram to grams
const decagram_to_grams = (decagram) => {
    return decagram * 10
}

//kilogram to grams
const kilogram_to_grams = (kilogram) => {
    return kilogram * 1000
}

//tonne to kilogram
const tonne_to_kilograms = (tonne) => {
    return tonne * 1000
}

//gigagram to megagram 
const gigagram_to_megagrams = (gigagram) => {
    return gigagram * 1000
}


module.exports = {
    centimeter_to_millimeters,
    decimeter_to_centimeters,
    meter_to_centimeters,
    meter_to_decimeters,
    kilometer_to_meters,
    squareCentimeter_to_squareMillimeters,
    squareMeter_to_squareCentimeters,
    hectare_to_squareMeters,
    squareMeter_to_hectares,
    squareKilometer_to_squareMeters,
    cubicCentimeter_to_cubicMillimeters,
    cubicDecimeter_to_cubicCentimeters,
    cubicMeter_to_cubicCentimeters,
    cubicMeter_to_cubicDecimeters,
    gram_to_milligrams,
    decagram_to_grams,
    kilogram_to_grams,
    tonne_to_kilograms,
    gigagram_to_megagrams
}