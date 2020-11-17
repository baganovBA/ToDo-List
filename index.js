let crossButtonsAll = document.querySelectorAll('.input_cross_button');
const addButton = document.querySelector('.conteiner_add_button');
let num = 1;

addButton.addEventListener('click',(event)=>{
    event.preventDefault();
    
    const inputDiv = document.querySelector('.input');
    const conteinerInput = document.querySelector('.conteiner_input');
    const innerInput = inputDiv.innerHTML;
    const divInput = document.createElement('div');
    divInput.classList.add('input');
    divInput.setAttribute("id", num);
    divInput.innerHTML = innerInput;
    conteinerInput.append(divInput);
    console.log(divInput);
    num +=1; 
    
    console.log(crossButtonsAll);
    crossButtonsAll = document.querySelectorAll('.input_cross');

    crossButtonsAll.forEach((crossButton, index, array) => {
        console.log(crossButton);
        crossButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(event);
            crossButton.parentElement.remove();
    
        })
    })

    

});

const sortButton = document.querySelector('.roll-button');
sortButton.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event);

    const allInput = document.querySelectorAll('.input_string');
    console.log(allInput);
    const inputData = [];

    allInput.forEach((input, index, array)=>{
        console.log(input.value);
        console.log(input);
        inputData[index] = input.value;

    });
    console.log(inputData);
    const rollImg = document.querySelector('.roll-img');
    console.log(rollImg.src);


    if(rollImg.src === "http://127.0.0.1:5500/baganovBA.github.io/img/roll.png"){
        inputData.sort((a,b) => {
            if(a > b) {
                return 1;
            }else if (a < b){
                return -1;
            }else{
                return 0;
            }
        });
    rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/unroll.png"
    }else {
        inputData.sort((a,b) => {
            if(a < b) {
                return 1;
            }else if (a > b){
                return -1;
            }else{
                return 0;
            }
        });
    rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/roll.png"
    };

    console.log(inputData);

    let allInputString = document.querySelectorAll(".input_string");
    console.log(allInputString);
    allInputString.forEach((inputString, index, array) =>{
        inputString.value = inputData[index];
    })
});


console.log(crossButtonsAll);



