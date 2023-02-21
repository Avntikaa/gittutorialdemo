let val = document.getElementById('btm');
var i=0;
val.addEventListener('click', fun1);
var newh3 = document.createElement('ul');
newh3.id = 'ulele';
function fun1(e) {
   e.preventDefault();
   var names = document.getElementById("fnames").value;
   var emailadd = document.getElementById("femail").value;
   var phone = document.getElementById("ftel").value;
   var time = document.getElementById("ftime").value;
   var date = document.getElementById("fdate").value;
   let obj = { name: names, email: emailadd, phone: phone, time: time, date: date };
   var newobj = JSON.stringify(obj);//tonconvert object into string as localstorage contain string
   localStorage.setItem(emailadd, newobj);
   var parseval = JSON.parse(localStorage.getItem(emailadd));//to convert string intonobject
   //create new div
var li = document.createElement('li');
   li.className = "list-group-item";
   
 let l1=showvalue(parseval.name,li);
  let l2=  showvalue(parseval.email,li);
  let l3=showvalue(parseval.phone);
 let l4= showvalue(parseval.time);
 let l5= showvalue(parseval.date);
li.appendChild(l1);
li.appendChild(l2);
li.appendChild(l3);
li.appendChild(l4);
li.appendChild(l5);
   // adding a delete button

var newdeltebtn = document.createElement('button');
   newdeltebtn.className = 'btn btn-danger btn-sm float-right delete';
   newdeltebtn.appendChild(document.createTextNode('X'));
   li.appendChild(newdeltebtn);
   //adding a edit button
   var neweditbtn=document.createElement('button');
   neweditbtn.className='edit btn';
      neweditbtn.appendChild(document.createTextNode('Edit'));
   li.appendChild(neweditbtn);
   newh3.appendChild(li);
   var newdiv = document.querySelector('#last');
   newdiv.appendChild(newh3);
}

function showvalue(val){
var h5 = document.createElement('div');
   h5.className = "listh";
   h5.appendChild(document.createTextNode(val));
   return h5;
}

//delete item

var ul = document.querySelector('#last');
ul.addEventListener('click', removeitem);

function removeitem(e) {
   e.preventDefault();
   var lielement = ul.children[1];
   if (e.target.classList.contains('delete')) {
      let li = e.target.parentElement;
      lielement.removeChild(li);
      localStorage.removeItem(li.children[1].textContent);
   }
}

//edit item
ul.addEventListener('click',edititem);
function edititem(e){
 e.preventDefault();
   var lielement = ul.children[1];
   if (e.target.classList.contains('edit')) {
document.getElementById("fnames").value=e.target.parentElement.children[0].textContent;  
document.getElementById("femail").value=e.target.parentElement.children[1].textContent;  
document.getElementById("ftel").value=e.target.parentElement.children[2].textContent;  
document.getElementById("ftime").value=e.target.parentElement.children[3].textContent;  
document.getElementById("fdate").value=e.target.parentElement.children[4].textContent;  

 
val.addEventListener('click',function(){
   fun4(lielement,e);
});
   }
}
fun4=(lielement,e)=>{ 
   lielement.removeChild(e.target.parentElement);
      localStorage.removeItem(e.target.parentElement.children[1].textContent);

}