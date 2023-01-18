console.log(document.domain)
console.log(document.URL)

console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.all)
//document.all[10].textContent='hell0'
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title')
//var header=document.getElementById('main-header')
//console.log(headerTitle)
//headerTitle.innerHTML='<h3>hello</h>'
headerTitle.style.borderBottom='solid 3px black'
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
   var titles=document.querySelectorAll('.title')
   console.log(titles)
   titles[0].textContent='Hello'
   var odd= document.querySelectorAll('li:nth-child(odd)');
   var even= document.querySelectorAll('li:nth-child(even)');
   for(var i=0;i<odd.length;i++){
   odd[i].style.backgroundColor='green'
   even[i].style.backgroundColor='#ccc';
   }
