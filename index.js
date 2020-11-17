const addButton = document.querySelector('.conteiner_add_button');

addButton.addEventListener('click',(event)=>{
    event.preventDefault();

    const inputDiv = document.querySelector('.input');
    const conteinerInput = document.querySelector('.conteiner_input');
    const innerInput = inputDiv.innerHTML;
    const divInput = document.createElement('div');
    divInput.classList.add('input');
    divInput.innerHTML = innerInput;
    conteinerInput.append(divInput);
    console.log(divInput);
});

const sortButton = document.querySelector('.roll-button');
sortButton.addEventListener('click', (event)=>{
    event.preventDefault();

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


