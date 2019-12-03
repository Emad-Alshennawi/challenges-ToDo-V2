// select the elements
const list = document.getElementById("list");
const input = document.getElementById("input");
const enterKey = document.getElementById("add-to-do");
const btn = document.getElementById("btn");

// focus function
window.onload = function addFocus(focus) {
  input.focus();
}

//add to-do function
function addToDo(toDo){

    // create the elements
    const li = document.createElement('li');
    const text = document.createElement("p");
    const del = document.createElement("span");

    // add the content to the elements
    text.textContent = input.value;
    del.textContent = 'delete';

    // add the classes name to the elements
    li.classList.add('item')
    text.classList.add('text');
    del.classList.add('delete');

    // append the elements
    list.appendChild(li);
    li.appendChild(text);
    li.appendChild(del);

}

// add the enter key function
enterKey.addEventListener("keyup",function(event){

    if(event.keyCode == 13){

      const toDo = input.value;

        if(toDo){
          addToDo(toDo);
        }
        input.value = "";
        input.focus();
      }
});

// add button to-do function
btn.onclick = function () {

  const toDo = input.value;

  if(toDo){
    addToDo(toDo);
  }
  input.value = "";
  input.focus();
}

//  remove function
list.addEventListener("click", function(event){

  if(event.target.className == 'delete'){

    const li = event.target.parentElement;

    list.removeChild(li);
  }
});
