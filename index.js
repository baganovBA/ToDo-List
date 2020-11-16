const input = document.querySelector('.input');
const addButton = document.querySelector('.conteiner_input');
const newInput = input.innerHTML;
console.log(newInput);
const divInput = document.createElement('div');
divInput.classList.add('input');
divInput.innerHTML = newInput;
addButton.append(divInput);
console.log(divInput);


