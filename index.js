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