// Getting Elements

let inputAdults = document.getElementById('adults')
let inputKids = document.getElementById('kids')
let inputDuration= document.getElementById('duration')
let result = document.getElementById('result')


// Calculation function

function calc(){
    console.log('calculating...')
    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value

    let totalMeat = meat(duration) * adults + (meat(duration)/2 * kids)
    let totalBeer = beer(duration) * adults
    let totalSoda = soda(duration) * adults + (soda(duration)/2 * kids)
    result.innerHTML = `<p>${totalMeat / 1000}kg of meat</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer / 355)} beer cans </p>`
    result.innerHTML += `<p>${Math.ceil(totalSoda/2000)} soda bottles</p>`
}

// Basic quantity logic

function meat(duration){
    if(duration >= 6){
        return 700;
    }else{
        return 400;
    }
}
function beer(duration){
    if(duration >= 6){
        return 3000;
    }else{
        return 1500;
    }
}
function soda(duration){
    if(duration >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

