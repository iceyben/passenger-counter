

//function for increment and decrement
let countPpl = document.getElementById("count_ppl");
let counter = 0;

function increment(){
    counter++;
    countPpl.textContent = counter;
     console.log(counter);
 }

function decrement(){
    counter--;
    countPpl.textContent = counter;
     console.log(counter);
 }


 // function for save and paragrahy


 let saveEl = document.getElementById("save_el");
 console.log(saveEl);

 
 
 function save(){
    let countResult = counter+ " - ";
    saveEl.textContent += countResult;
    console.log(counter);

    countPpl.textContent = 0;
    counter = 0
    
    
 }

 