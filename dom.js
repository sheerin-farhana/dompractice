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

console.log("images collections"+document.images);

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

let items = document.getElementsByClassName('list-group-item');
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
items[3].style.backgroundColor = 'blue';

