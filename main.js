
// Getting Elements

let inputAdults = document.getElementById('adults')
let inputKids = document.getElementById('kids')
let inputDuration = document.getElementById('duration')
let result = document.getElementById('result')


// Logic

function meat(hour) {
    let meat = 300;
    if (hour > 1) {
        for (i = 1; i <= hour; i++) {
            meat += 80;
        }
        return meat
    } else {
        return meat;
    }
}

function beer(hour) {
    let beer = 600;
    if (hour > 1) {
        for (i = 1; i <= hour; i++) {
            beer += 200;
        }
        return beer
    } else {
        return beer;
    }
}

function soda(hour) {
    let soda = 500;
    if (hour > 1) {
        for (i = 1; i <= hour; i++) {
            soda += 150;
        }
        return soda;
    } else {
        return soda;
    }
}


// Calculation function

function calc() {
    console.log('calculating...')
    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value



    let totalMeat = meat(duration) * adults + (meat(duration) / 2 * kids)
    let totalBeer = beer(duration) * adults
    let totalSoda = soda(duration) * adults + (soda(duration)/2 * kids)


    result.innerHTML = `<p>${totalMeat / 1000}kg of meat</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer / 355)} beer cans </p>`
    result.innerHTML += `<p>${Math.ceil(totalSoda / 2000)} soda bottles</p>`
    result.style.fontFamily = 'Arial'
    result.style.fontWeight = '600'
}


