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
var items=document.getElementsByClassName('list-group-item');
console.log(items)
items[2].style.background='green'
items[0].style.fontWeight='700'
items[2].style.fontWeight='700'
items[3].style.fontWeight='700'
items[1].style.fontWeight='700'
//var title=document.getElementsByClassName('.title');

//var titles=document.querySelectorAll('.title')
//console.log(titles)
//titles[0].style.color='green'
var li= document.getElementsByTagName('li')
console.log(li)
console.log(li[1]);
li[1].textContent= 'hello 2'
li[1].fontWeight='bold';
li[4].style.background='yellow'

