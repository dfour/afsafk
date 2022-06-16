
dmgMulPerLvl = 1.11611          // based off testing in excel (yes, I still use excel)
attacksPerMin = 60              // estimated apm
defaultOpenPerHour = 592.1      // how many opens an be done in an hour
defaultMaxOpensPerHour = 40     // how many max opens can be done in a hour
defaultSellRate = 0.25          // value returned for sell (avg)
modLetters = " KMBTQEZYXWVU"    // modifiers for currency


///////////// Non AFS functions //////////////////////
/**
 * Convert the string to a number and if fails return 1
 * @param {string} sv string to always return a number
 */
function forceNumber(sv) {
    if ($.isNumeric(sv)) {
        return parseInt(sv)
    } else {
        return 1
    }
}

///////////// AFS Functions /////////////////////////

/**
 * Get the damage per hit for the unit at a certain level
 * @param {number} baseDMG The base damage of the unit
 * @param {number} level The level of the unit
 * @param {bool} shiny True If the unit is shiny
 */
function getDmgForLevel(baseDMG, level, shiny) {
    if (shiny) {
        baseDMG *= 1.75
    }
    powlvl = Math.pow(dmgMulPerLvl, (level - 1))
    return powlvl * baseDMG
}

/**
 * Gets a string representing the percentage change for a talent value
 * @param {number} talVal The talent value for attack
 */
function dmgTalToPer(talVal) {
    return (((talVal - 5) * 6) + "%")
}

/**
 * Gets the multiplicative value for multiplying against damage
 * @param {number} talVal The talent value
 */
function dmgTalToMod(talVal) {
    return (1 + ((talVal - 5) * 6) / 100)
}

/**
 * Converts the value up through the modifying letters
 * @param {number} value The number value
 * @param {string} mod The Current letter used to identify value
 */
function convertToFormatted(value, mod) {
    if (mod === undefined) {
        mod = " "
    }
    cmodpos = modLetters.indexOf(mod.toUpperCase())
    while (Math.ceil(Math.log10(value + 1)) > 3) {
        cmodpos += 1 // move to next modifier
        value = value * 0.001// divide val by 1000 to mve 3 places down
    }

    return parseFloat(value.toFixed(2)) + modLetters[cmodpos]
    //return value.toPrecision(3) + modLetters[cmodpos];
}

/**
 * Shorthand convertToFormatted
 * @param {number} v the number value
 * @param {string} m Optional: the letter modifier
 */
function ctf(v, m) {
    return convertToFormatted(v, m)
}

/**
 *  Convert AFS value to number and letter modifier
 * @param {string} stringVal AF format value
 */
function costModConvert(stringVal) {
    if (stringVal === undefined) {
        return;
    }
    lastChar = String(stringVal).slice(-1)
    if ($.isNumeric(lastChar)) {
        return [stringVal, ""]
    } else {
        return [stringVal.slice(0, stringVal.length - 1), lastChar]
    }
}

/**
 * Converts AFS format number to standard format
 * @param {number} decimal 
 * @param {string} mod 
 */
function getDecimalValue(decimal, mod) {
    cmodpos = modLetters.indexOf(mod.toUpperCase())
    fullVal = Math.pow(1000, cmodpos) * decimal
    return fullVal
}

/**
 * Shorthand to convert AFS to normal number
 * @param {string} strval normal format number
 */
function qfv(strval) {
    decmod = costModConvert(strval)
    return getDecimalValue(decmod[0], decmod[1])
}