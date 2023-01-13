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
//var title=document.getElementsByClassName('.title');

var titles=document.querySelectorAll('.title')
console.log(titles)
titles[0].style.color='green'
titles[0].style.fontweight='bold'
