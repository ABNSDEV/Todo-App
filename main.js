
const todo = [


];


function car_adding() {
    const todo_add = document.getElementById('todo_inp').value;
    if (todo_add.trim() === "") return;  // Prevent adding empty values
    todo.push(todo_add);
    document.getElementById('todo_inp').value='';
    rendertodo();
}

function deleteCar(index) {
    todo.splice(index, 1);  // Remove the car from the array
    rendertodo();  // Re-render the car list
}

function rendertodo() {
    const todo_count = document.getElementById('CarCount');
    todo_count.innerHTML = `${todo.length}`;

    const carList = document.body.querySelector('ul');
    carList.innerHTML = "";  // Clear the existing list
    let ind = 0;
    todo.forEach((car, index) => {
    	ind++
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="spn">${ind}</span> ${car} `;

        const deleteButton = document.createElement('button');
        const del_icon = document.createElement('img');
        del_icon.src="https://cdn-icons-png.flaticon.com/128/8567/8567781.png"
        del_icon.classList.add('del_ico');
   		
       del_icon.onclick = () => deleteCar(index);  // Attach delete functionality


        listItem.appendChild(del_icon);
        carList.appendChild(listItem);
    });
}

// Initial rendering of todo
rendertodo();
