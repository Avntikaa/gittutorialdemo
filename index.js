// var a = document.getElementById("header-title");
// a.style.borderBottom = 'solid 2px black';
// var b = document.getElementsByClassName('title');
// console.log(b);
// b[0].style.fontWeight = 'bold';
// b[0].style.color = 'green';
// var c = document.getElementsByClassName('list-group-item');
// c[2].style.backgroundColor = 'green';
// for (var i = 0; i < c.length; i++)
//     c[i].style.fontWeight = 'bold';
// var li = document.getElementsByTagName('li');
// li[2].style.color = 'red';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// var k = document.querySelector('li');
// k.style.color = 'red';
// var m = document.querySelector('li:last-child');
// m.style.color = 'red';
//first -child
//nth child
// var m = document.querySelector('li:nth-child(2)');
// m.style.color = 'red';
//getqueryselctor give result for tag,id and class
// ex.for tag it is 'li' for id (#) and for(.) for class 
//even if there are multiple element it give result just for 1st elemt to acces remaining one use 
//(.clasname:nth-child(n)) or (#id:last-child)
//in case to get all the element of the query selctor without nth child use queryselectorall
//in QSA it give array 
//okay so getClass and get Tagname give multiple elements  i.e array and to acces it we use index []
// var qsa = document.querySelectorAll('li');
// qsa[2].style.color = 'green';
// for (var i = 0; i < qsa.length; i += 2) {
//     qsa[i].style.backgroundColor = 'green';
// }//parent nde
// var node = document.querySelector('#items');
// console.log('start node');
// console.log(node.parentNode);
// console.log(node.parentElement);
// console.log(node.children);
// //we can have index children[1]
// console.log(node.firstChild);
// console.log(node.firstElementChild.style.color = 'blue');
// console.log(node.lastChild);
// console.log(node.lastElementChild);
// console.log(node.lastElementChild);
// console.log(node.previousElementSibling);
// console.log(node.nextElementSibling);

//now we will create element
// var newdiv=document.createElement('h4');
// newdiv.className='hjkf';
// newdiv.setAttribute('title','jkvhj');
// var text=document.createTextNode('HELLO');
// //append child is used when to append text in div ,h1 ,list 
// newdiv.appendChild(text);
//insrt 
// var az=document.querySelector('div #items');
// var h1=document.querySelector('div .list-group-item');
// az.insertBefore(newdiv, h1);
//2nd quetson
var newdivs = document.createElement('li');
newdivs.className = 'hjkf';
newdivs.setAttribute('title', 'jkvhj');
var texts = document.createTextNode('item1');
//append child is used when to append text in div ,h1 ,list 
newdivs.appendChild(texts);

//delete item
var node = document.querySelector('#items');
node.addEventListener('click', deletefun);
function deletefun(e) {
    if (e.target.classList.contains('delete')) {
        node.removeChild(e.target.parentElement);
    }
}

//add item
var btn2 = document.getElementById('addForm');
btn2.addEventListener('submit', addfun);
var itemListul = document.getElementById('items');

function addfun(e) {
    e.preventDefault();
    var inputval = document.getElementById("filter");
    var descval = document.getElementById('descr');
    var newelement = document.createElement('li');
    newelement.className = 'list-group-item';
    newelement.appendChild(document.createTextNode(inputval.value));
    itemListul.appendChild(newelement);
    //creating edit and delete button for item
    var newdeltebtn = document.createElement('button');
    newdeltebtn.className = 'btn btn-danger btn-sm float-right delete';
    newdeltebtn.appendChild(document.createTextNode('X'));
    newelement.appendChild(newdeltebtn);

    //edit button
    var neweditbtn = document.createElement('button');
    neweditbtn.appendChild(document.createTextNode('Edit'));
    newelement.appendChild(neweditbtn);

    //description
    var newDivp = document.createElement('p');
    newDivp.appendChild(document.createTextNode(descval.value));
    newelement.appendChild(newDivp);
}


//search functionality
var inputval = document.getElementById("search");
inputval.addEventListener('keyup', searchfun);

function searchfun(e) {
    e.preventDefault();
    var searchval = inputval.value;
    var listitem = document.querySelectorAll('li');

    for (var i = 0; i < listitem.length; i++) {
        var text = listitem[i].firstChild.textContent;
        var description=listitem[i].children[2].textContent;
        if (text.indexOf(searchval)!=-1 || description.indexOf(searchval)!=-1)
        {
            listitem[i].style.display='block';
        }
        else{
            listitem[i].style.display='none';
        }
    }
}