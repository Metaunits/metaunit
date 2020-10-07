
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
const sqcentimeter_to_sqmillimeters = (sqmillimeters) => {
    return sqmillimeters * 100
}

//square meter to square centimeters
const sqmeter_to_sqcentimeters = (sqmeter) => {
    return sqmeter * 10000
}

//hectare to square meters
const hectare_to_sqmeters = (hectare) => {
    return hectare * 10000
}

// square kilometer to hectares
const sqmeter_to_hectares = (sqkilometer) => {
    return sqkilometer * 100
}

//square kilometer to square meters
const sqkilometer_to_sqmeters = (sqkilometer) => {
    return sqkilometer * 1000000
}


// ****** Metric area conversion ******



module.exports = {
    centimeter_to_millimeters,
    decimeter_to_centimeters,
    meter_to_centimeters,
    meter_to_decimeters,
    kilometer_to_meters,
    sqcentimeter_to_sqmillimeters,
    sqmeter_to_sqcentimeters,
    hectare_to_sqmeters,
    sqmeter_to_hectares,
    sqkilometer_to_sqmeters
}