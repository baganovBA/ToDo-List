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

    const allInputDiv = document.querySelectorAll('.input');
    // allInputDiv.forEach((inputDiv) =>{
    //     inputDiv.setAttribute('draggable', 'true');
    // });

    const allInputDrag = document.querySelectorAll('.input_drag')

    allInputDrag.forEach((inputDrag) =>{
        inputDrag.addEventListener('mouseover',(event) =>{
            inputDrag.parentElement.setAttribute('draggable', 'true');

        });
        inputDrag.addEventListener('mouseout', (event) =>{
            inputDrag.parentElement.removeAttribute('draggable');
        });

    })
    
    
    
    allInputDiv.forEach((inputDiv) =>{
        inputDiv.addEventListener('dragstart',(event) =>{

            event.currentTarget.classList.add('yellow');
        });

        inputDiv.addEventListener('dragend',(event) =>{
            
            event.target.classList.remove('selected', 'yellow');
        })

        inputDiv.addEventListener('dragover',(event) =>{
            event.preventDefault();
            console.log(event);
           
            console.log('dragover',event.currentTarget.parentElement.children);
           
            const activeInputDiv = conteinerInput.querySelector('.yellow');
            activeInputDiv.classList.add('selected');
            const currentInputDiv = event.currentTarget;
        
            const isMoveable = activeInputDiv !== currentInputDiv 
            && currentInputDiv.classList.contains('.input');

            if(isMoveable){
                return;
            }

            const nextInputDiv = (currentInputDiv === activeInputDiv.nextElementSibling) ?
            currentInputDiv.nextElementSibling : currentInputDiv;

            conteinerInput.insertBefore(activeInputDiv, nextInputDiv);



        })
    });

    


    console.log(crossButtonsAll);
    console.log(conteinerInput.children.length);
    crossButtonsAll = document.querySelectorAll('.input_cross');

    crossButtonsAll.forEach((crossButton, index, array) => {
        console.log(crossButton);
        crossButton.addEventListener('mouseover', (event) => {
           event.target.src = "http://127.0.0.1:5500/baganovBA.github.io/img/cross_active.png";

        });
        crossButton.addEventListener('mouseout', (event) => {
           event.target.src = "http://127.0.0.1:5500/baganovBA.github.io/img/cross.png";

        });
        crossButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(event);
            if (conteinerInput.children.length > 1){
                crossButton.parentElement.remove();
            }
        })
    })
});

const rollImg = document.querySelector('.roll-img');
console.log("img", rollImg.src);
rollImg.addEventListener('mouseover', event =>{
    if(rollImg.src === "http://127.0.0.1:5500/baganovBA.github.io/img/roll.png"){
        rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/roll_active.png"
    }else{
        rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/unroll_active.png"
    }
})
rollImg.addEventListener('mouseout', event =>{
    if(rollImg.src === "http://127.0.0.1:5500/baganovBA.github.io/img/roll_active.png"){
        rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/roll.png"
    }else{
        rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/unroll.png"
    }
})


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
    // const rollImg = document.querySelector('.roll-img');
    console.log(rollImg.src);


    if(rollImg.src === "http://127.0.0.1:5500/baganovBA.github.io/img/roll_active.png"){
        inputData.sort((a,b) => {
            if(a > b) {
                return 1;
            }else if (a < b){
                return -1;
            }else{
                return 0;
            }
        });
    rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/unroll_active.png"
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
    rollImg.src = "http://127.0.0.1:5500/baganovBA.github.io/img/roll_active.png"
    };

    console.log(inputData);

    let allInputString = document.querySelectorAll(".input_string");
    console.log(allInputString);
    allInputString.forEach((inputString, index, array) =>{
        inputString.value = inputData[index];
    })
});


console.log(crossButtonsAll);



