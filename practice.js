let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let items = document.getElementsByClassName('list-group-item');

    
    for(let i=0;i<items.length;i++){
        let editButton = document.createElement('button');
    editButton.className = 'btn btn-danger btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('EDIT'));
        items[i].appendChild(editButton);
    }
form.addEventListener('submit' , addItem);

//delete event
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    
    //get input value
    let newItem = document.getElementById('item').value;

    // CReate a new li element

    let li = document.createElement('li');
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    //create a delete button

    let deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node 
    deleteButton.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteButton);
    //append li to list 
    itemList.appendChild(li); 
}

//remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

    

    
    
}