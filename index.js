var a=document.getElementById("header-title");
a.style.borderBottom='solid 2px black';
var b=document.getElementsByClassName('title');
console.log(b);
b[0].style.fontWeight='bold';
b[0].style.color='green';
var c=document.getElementsByClassName('list-group-item');
c[2].style.backgroundColor='green';
for(var i=0;i<c.length;i++)
c[i].style.fontWeight='bold';
 var li=document.getElementsByTagName('li');
li[2].style.color='red';
var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';
 var k=document.querySelector('li');
k.style.color='red';
 var m=document.querySelector('li:last-child');
m.style.color='red';
//first -child
//nth child
var m=document.querySelector('li:nth-child(2)');
m.style.color='red';
//getqueryselctor give result for tag,id and class
// ex.for tag it is 'li' for id (#) and for(.) for class 
//even if there are multiple element it give result just for 1st elemt to acces remaining one use 
//(.clasname:nth-child(n)) or (#id:last-child)
//in case to get all the element of the query selctor without nth child use queryselectorall
//in QSA it give array 
//okay so getClass and get Tagname give multiple elements  i.e array and to acces it we use index []
var qsa=document.querySelectorAll('li');
qsa[2].style.color='green';
for(var i=0;i<qsa.length;i+=2){
    qsa[i].style.backgroundColor='green';
}