let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let items = document.getElementsByClassName('list-group-item');
let filter = document.getElementById('filter');

//ADDED EDIT BUTTON 
for(let i=0;i<items.length;i++){
    let editButton = document.createElement('button');
    editButton.id = 'edit';
    editButton.className = 'btn btn-sm float-right editBtn';
    editButton.appendChild(document.createTextNode('EDIT'));
    items[i].appendChild(editButton);
}
//submit event
form.addEventListener('submit' , addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event 
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items1 = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items1).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let descriptionText = item.childNodes[1].textContent;
        
        console.log(descriptionText);
        console.log(itemName);
        
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';

        }
        if(descriptionText.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

}

function addItem(e){
    e.preventDefault();
    
    //get input value
    let newItem = document.getElementById('item').value;
    let descrption = document.getElementById('description').value;

    // CReate a new li element

    let li = document.createElement('li');
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem + " "));
    li.appendChild(document.createTextNode(descrption));
    
    //create a delete button

    let deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node 
    deleteButton.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteButton);
    //append li to list 
    //itemList.appendChild(li); 

    //create edit button
    let editButton = document.createElement('button');
    editButton.id = 'edit';
    editButton.className = 'btn btn-sm float-right editBtn';
    editButton.appendChild(document.createTextNode('EDIT'));
    //append 
    li.appendChild(editButton);
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

 //filter items 

    

    
    
}