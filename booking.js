
let val = document.getElementById('btm');
var i=0;
val.addEventListener('click', addData);
var newh3 = document.createElement('ul');
newh3.id = 'ulele';
window.onload=()=>{
   axios.get("https://crudcrud.com/api/5a0f1dc983ac4b848d68c84e7b196e30/Bookingapp")
   .then((response)=>{
      console.log(response.data);
      for(var i=0;i<response.data.length;i++)
      DisplayData(response.data[i]);
   })
.catch(err=>console.log(err));
   }

// function fun1(e) {
//    e.preventDefault();
//    var names = document.getElementById("fnames").value;
//    var emailadd = document.getElementById("femail").value;
//    var phone = document.getElementById("ftel").value;
//    var time = document.getElementById("ftime").value;
//    var date = document.getElementById("fdate").value;
//    let obj = { name: names, email: emailadd, phone: phone, time: time, date: date };
//    var newobj = JSON.stringify(obj);//tonconvert object into string as localstorage contain string
//    localStorage.setItem(emailadd, newobj);
//    var parseval = JSON.parse(localStorage.getItem(emailadd));//to convert string intonobject
//    //create new div
//    DisplayData(parseval);
// }
function addData(e){
   e.preventDefault();
   var names = document.getElementById("fnames").value;
   var emailadd = document.getElementById("femail").value;
   var phone = document.getElementById("ftel").value;
   var time = document.getElementById("ftime").value;
   var date = document.getElementById("fdate").value;
   let obj = { name: names, email: emailadd, phone: phone, time: time, date: date };
axios.post("https://crudcrud.com/api/5a0f1dc983ac4b848d68c84e7b196e30/Bookingapp",obj)
.then(res=>{
   console.log(res.data);
   DisplayData(res.data);
})//adding promise
  .catch(err=>console.log(err));}

function DisplayData(parseval){
var li = document.createElement('li');
   li.className = "list-group-item";
   let l0=showvalue(parseval._id,li)
 let l1=showvalue(parseval.name,li);
  let l2=  showvalue(parseval.email,li);
  let l3=showvalue(parseval.phone);
 let l4= showvalue(parseval.time);
 let l5= showvalue(parseval.date);
 li.appendChild(l0);
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
   let id=e.target.parentElement.children[0].textContent
   axios.delete(`https://crudcrud.com/api/5a0f1dc983ac4b848d68c84e7b196e30/Bookingapp/${id}`)
.then(res=>{
   console.log(res);   
})
  .catch(err=>console.log(err));}
}

//edit item
ul.addEventListener('click',edititem);

function edititem(e){
 e.preventDefault();
   if (e.target.classList.contains('edit')) {
document.getElementById("fnames").value=e.target.parentElement.children[1].textContent;  
document.getElementById("femail").value=e.target.parentElement.children[2].textContent;  
document.getElementById("ftel").value=e.target.parentElement.children[3].textContent;  
document.getElementById("ftime").value=e.target.parentElement.children[4].textContent;  
document.getElementById("fdate").value=e.target.parentElement.children[5].textContent; 
let btn=document.getElementById('btm');
btn.addEventListener('click',function(){
    var lielement = ul.children[1];
      let li = e.target.parentElement;
      lielement.removeChild(li);
   let id=e.target.parentElement.children[0].textContent
   axios.delete(`https://crudcrud.com/api/5a0f1dc983ac4b848d68c84e7b196e30/Bookingapp/${id}`)
.then(res=>{
   console.log(res);   
})
  .catch(err=>console.log(err));
})
}

}
