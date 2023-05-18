//EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = "Hello";
console.log(document.forms[0]); 
console.log(document.links);*/

//console.log("images collections"+document.images);

// Selectors 
//1. get element by id 

//console.log(document.getElementById("header-title"));

let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';


//the above both are same except - one of them pays attention to the styling aspect 
// innertext pays attention to styling , eg : if i sat style = display:none ; it wont show me the text value as it is not displaying the value in the dom 
//but textContent will show the value inspite of it not displaying in the dom ;

//headerTitle.innerHTML = '<h3>Hello</h3>';
//let header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';



let header1 = document.getElementById('add-items');

header1.style.color = 'green';
header1.style.fontWeight='bold';

// GETELEMENTSBYCLASSNAME //

/*let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//items[1].textContent ='Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor='yellow';

//items.style.backgroundColor = '#f4f4f4'; - gives error, you need to loop through items elements to solve this 

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

//items[1].textContent ='changed'; - this overrides the above texContent property setting
items[2].style.backgroundColor = 'green';
items[0].style.backgroundColor = 'red';
items[3].style.backgroundColor = 'blue';*/

//getelementsbytagname

/*let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
//items[1].textContent ='Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor='yellow';

//items.style.backgroundColor = '#f4f4f4'; - gives error, you need to loop through items elements to solve this 

for(let i=0;i<items.length;i++){
    li[i].style.fontWeight='bold';
}
 
//items[1].textContent ='changed'; - this overrides the above texContent property setting
li[2].style.backgroundColor = 'green';
li[0].style.backgroundColor = 'red';
li[3].style.backgroundColor = 'blue';*/


//query selector //

/*let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'hello world';

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let item = document.querySelector('.list-group-item');
item.style.color = 'red';
item.style.fontWeight= 'bold';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
lastItem.style.fontWeight= 'bold';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color ='yellow';
secondItem.style.fontWeight= 'bold';
secondItem.style.backgroundColor = 'green';


let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'blue';
thirdItem.style.fontWeight='bold';
thirdItem.style.display ='none';

//query selector all //

let titles = document.querySelectorAll('.title');*/

/*console.log(titles);
//titles[0].textContent = 'Hello';
titles[1].textContent = 'List of Items';
titles[1].style.fontWeight = 'bold';
*/




/*let list = document.querySelectorAll('li');
console.log(list);
list[1].style.color = 'green';*/

/*let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}*/






//creating nodes and modifyind Dom deliverables

//Traversing the Dom //

let itemList = document.querySelector('#items');
//parentNode property
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4"
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);*/

//parentElement 
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#ccc"
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);*/

//childNodes
//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = 'yellow'*/

//FirstChild 
/*console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='Hello 1';*/

//LastChild 
console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent ='Hello 4';


//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

// previousSibling
//console.log(itemList.previousSibling);
//previouElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'red';

//Creating Dom Elements 

//createElement
//create a div

let newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';

//add div
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title','hello div');

//Create a text node 

let newDivText = document.createTextNode('HelloWorld');


//add text to div

newDiv.appendChild(newDivText);

console.log(newDiv);

//inserting the node to dom

let containetr = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';

containetr.insertBefore(newDiv ,  h1);

let newDiv1 = document.createElement('div');
newDiv1.className = 'item';
newDiv1.id = 'item1';
newDiv1.setAttribute('title','hello list item');
let newDiv1Text = document.createTextNode('Hello World');
newDiv1.appendChild(newDiv1Text);
console.log(newDiv1);
let h2 = document.querySelector('#items');
let items =document.querySelector('.list-group-item');

h2.insertBefore(newDiv1 ,  items);



