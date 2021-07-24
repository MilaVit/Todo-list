const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const todoList = document.querySelector('#todoList');
const numberList = document.querySelector('.numberList');
let count = 0;

btn.addEventListener('click', showInformation)
input.addEventListener('input', showBtn);

function showBtn () {
  (input.value !== '') ? btn.removeAttribute('disabled') 
  : btn.setAttribute('disabled', true)
}

function showInformation() {
  count++;
  createElements(input.value)
  input.value = ''
}

function createElements (value){
  const li = document.createElement('li');
  const btn = document.createElement('button');
  li.className = 'li';
  btn.className = 'btn';
  li.textContent = value;

  btn.innerText = 'delete';
  li.appendChild(btn)
  todoList.appendChild(li);
  numberList.innerText = count;

  btn.addEventListener('click', function removeElement (e) {
    li.remove(li)
    count--
    numberList.innerText = count;
  })
}

