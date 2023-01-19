//console.log(document.domain)
///console.log(document.URL)

//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.all)
//document.all[10].textContent='hell0'
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title')
//var header=document.getElementById('main-header')
//console.log(headerTitle)
//headerTitle.innerHTML='<h3>hello</h>'
//headerTitle.style.borderBottom='solid 3px black'
//header.style.borderBottom='solid 3px black'
//var items=document.getElementsByClassName('list-group-item');
//console.log(items)
//items[2].style.background='green'
//items[0].style.fontWeight='700'
//items[2].style.fontWeight='700'
//items[3].style.fontWeight='700'
//items[1].style.fontWeight='700'
//var title=document.getElementsByClassName('.title');

//var titles=document.querySelectorAll('.title')
//console.log(titles)
//titles[0].style.color='green'
//var li= document.getElementsByTagName('li')
//console.log(li)
//console.log(li[1]);
//li[1].textContent= 'hello 2'
//li[1].fontWeight='bold';
//li[4].style.background='yellow'
 
//QUERYSELECTOR
/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc'
var input=document.querySelector('input')
input.value='HELLO WORLD'
 var submit =document.querySelector('input[type="submit"]');
 submit.value="Send";
 var item=document.querySelector('.list-group-item');
 item.style.color='red';
 var lastItem=document.querySelector
 ('.list-group-item:last-child');
 lastItem.style.color='blue'
 var secondItem=document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.background='green'
 var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
 thirdItem.style.background='white'
 thirdItem.style.display='none'*/
  // QUERYSELECTORALL
   /*var titles=document.querySelectorAll('.title')
   console.log(titles)
   titles[0].textContent='Hello'
   var odd= document.querySelectorAll('li:nth-child(odd)');
   var even= document.querySelectorAll('li:nth-child(even)');
   for(var i=0;i<odd.length;i++){
   odd[i].style.backgroundColor='green'
   even[i].style.backgroundColor='#ccc';
   }*/
   //TRAVERSE THE DOM
   
//var itemList=document.querySelector('#items')
//parentNode
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
//console.log(itemList.parentElement)
//itemList.parentElement.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
//console.log(itemList.childNodes)
//console.log(itemList.children)
//console.log(itemList.children[1])
//itemList.children[1].style.backgroundColor='yellow'
 
//Firstchild

//console.log(itemList.firstChild)
//firstElementChild
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='hello 1'

//lastchild 

//console.log(itemList.lastChild)
//lastElementChild
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='hello 4'

//nextsibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling)

//previousSibling
//console.log(itemList.previousSibling)
//previousSibling
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.color='green'
  //const para=document.createElement("class")
  
// Get the title element
var titles = document.querySelector('.container');

// Create a new text node with the text "Hello"
var text = document.createTextNode("Hello ");

// Insert the text node before the title element
titles.insertBefore(text,titles.firstChild);

//Get the title element
var item = document.querySelector('.list-group');

// Create a new text node with the text "Hello"
var text = document.createTextNode("Hello ");

// Insert the text node before the title element
item.insertBefore(text,item.firstChild);
