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
}//parent nde
var node=document.querySelector('#items');
console.log('start node');
console.log(node.parentNode);
console.log(node.parentElement);
console.log(node.children);
//we can have index children[1]
console.log(node.firstChild);
console.log(node.firstElementChild.style.color='blue');
console.log(node.lastChild);
console.log(node.lastElementChild);
console.log(node.lastElementChild);
console.log(node.previousElementSibling);
console.log(node.nextElementSibling);

//now we will create element
var newdiv=document.createElement('h4');
newdiv.className='hjkf';
newdiv.setAttribute('title','jkvhj');
var text=document.createTextNode('HELLO');
//append child is used when to append text in div ,h1 ,list 
newdiv.appendChild(text);
//insrt 
var az=document.querySelector('div #items');
var h1=document.querySelector('div .list-group-item');
az.insertBefore(newdiv, h1);
//2nd quetson
var newdivs=document.createElement('li');
newdivs.className='hjkf';
newdivs.setAttribute('title','jkvhj');
var texts=document.createTextNode('item1');
//append child is used when to append text in div ,h1 ,list 
newdivs.appendChild(texts);
//insrt 
// var ar=document.querySelector('header .conatiner');
// var h2=document.querySelector('header h1');
// ar.insertBefore(ar, h2);

//create button
var newbtn=document.querySelector('.btn btn-danger btn-sm float-right delete');
var btn1=document.querySelector('li button');
console.log(btn1);
console.log(node);
node.addEventListener('click',deletefun);
function deletefun(e){
    console.log(e.target);
    node.removeChild(e.target.parentElement);
}

var filter=document.querySelector('#filter');
filter.addEventListener('keyup',filteritem);
function filteritem(e){
    var val=e.target.value;
var tottalitem=node.getElementsByTagName('li');
var arr=Array.from(tottalitem);
// forEach(function(i){
//     var itemname=i.firstElementChild;

//     // console.log(itemname);
// });
arr.forEach(function(item){
var itemname=item.firstChild.textContent;
if(itemname.toLowerCase().indexOf(val)!=-1){
    item.style.display='block';
}
else{
        item.style.display='none';

}   
}
)
}


