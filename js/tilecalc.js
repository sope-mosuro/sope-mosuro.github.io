// Tile Calculator --
let lengthInFeet = document.querySelector('#lengthInFeet');
let lengthInInches = document.querySelector('#lengthInInches');
let widthInFeet = document.querySelector('#widthInFeet');
let widthInInches = document.querySelector('#widthInInches');
let calculate = document.querySelector('#calc');
let userInput = document.querySelectorAll('.userInput');
let reset = document.querySelector('#reset')
let sqft = document.querySelector('#sqft');
let xtra = document.querySelector('#xtra');
let totalsqft = document.querySelector('#totalsqft');
let results = document.querySelectorAll('.results');
let reload = document.querySelector('#reload');
let problem = document.querySelectorAll('.problem');
let solution = document.querySelector('.solution');
//Limits user entry to less than 12 for
//length and width in inches
let temp1=0;
lengthInInches.addEventListener('input', ()=>{
    temp1 = lengthInInches.value;
    if(parseFloat(lengthInInches.value)>=12){
        lengthInInches.value =  lengthInInches.value.slice(0,1);
        alert('Enter a number less than 12.');
    }
})
widthInInches.addEventListener('input', ()=>{
    temp1 = widthInInches.value;
    if(parseFloat(widthInInches.value)>=12){
        widthInInches.value =  widthInInches.value.slice(0,1);
        alert('Enter a number less than 12.');
    }
})

//calculates the square footage, extra square feet and total square feet
//required for the user's entry
const calc = () => {
    if  ((0 > (parseFloat(widthInInches.value)) || 0 > (parseFloat(widthInFeet.value)))||
        (0 > (parseFloat(lengthInInches.value)) || 0 > (parseFloat(lengthInFeet.value)))){
        alert('Measurement cannot be less than 0')
    }
    else if((lengthInFeet.value=="")&&(lengthInInches.value=="")){
        alert("Please enter length.")
    }
    else if((widthInFeet.value=="")&&(widthInInches.value=="")){
        alert("Please enter width.")
    }
    else {
        let totlength = eval(parseFloat(lengthInFeet.value) + (lengthInInches.value/12));
        let totwidth = eval(parseFloat(widthInFeet.value) +(widthInInches.value/12));
        console.log(totlength, totwidth);
        sqft.value = (totlength * totwidth).toFixed(2);
        xtra.value = (totlength * totwidth * 0.1).toFixed(2);
        totalsqft.value = ((totlength * totwidth) + (totlength * totwidth * 0.1)).toFixed(2);
        solution.style.display = 'block';
        problem.forEach(e => {
            e.style.display = "none";
        })
    }
    
    
}

//clears the input
const clearInput = (entry) => {
    entry.value = "";
}
//resets user input
const resetUserInput = () => {
    userInput.forEach(e =>{
        e.value = "";
    })
}
//resets results
const resetResults = () => {
    results.forEach(e =>{
        e.value = "";
    })
    solution.style.display = 'none';
    problem.forEach(e => {
        e.style.display = "block";
    })
}
//listens for a click on the calculate button
//and executes the calc function.
"click ".split(" ").forEach(e => {
    calculate.addEventListener(e, calc);
});

//listens for a click on the reset button
//and executes the resetUserInput function.
reset.addEventListener('click', resetUserInput);

//listens for a click on the reload button
//and executes the resetResults function.
reload.addEventListener('click', resetResults);