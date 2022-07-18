const userBirthdate = prompt ("When were you born?");
let userCity = null;
let userSport = null;
let err = null;

if(userBirthdate === null) {
    alert(err = `It is a pity that you did not want to enter your date of birth`)
    throw err;
} else (userCity = prompt('What city do you live in?'))


if(userCity === null) {
    alert(`It is a pity that you did not want to enter your city`)
    throw err;
} else(userSport = prompt("What sport do you like?"))


if(userSport === null) {
    alert(`It is a pity that you did not want to enter your favorite sport`)
    throw err;
} else (
    console.log( 2022 - userBirthdate)
)

switch(userCity){
    case 'Kyiv': 
        console.log (`You live in the capital ${userCity}`)
        break;
    case 'London':
        console.log (`You live in the capital ${userCity}`)  
        break;
    case 'Tokio': 
        console.log (`You live in the capital ${userCity}`) 
        break;
    default: console.log(`You live in a town ${userCity}`)
}

switch(userSport) {
    case 'football': 
        console.log (`Cool! Do you want to become Andrey Shevchenko?`)
        break;
    case 'boxing': 
        console.log (`Cool! Do you want to become Vladimir Klichko?`)
        break;
    case 'fencing': 
        console.log (`Cool! Do you want to become Olga Harlan?`)
        break;
    default: console.log(`It is a pity that you did not want to enter your favorite sport`)
        throw err;
}
