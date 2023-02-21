const val=document.getElementById('btm');

val.addEventListener('click',fun1);

function fun1(e){
e.preventDefault();
// localStorage.setItem('name',names); 
             var names=document.getElementById("fnames").value;
          var emailadd=document.getElementById("femail").value;
     var phone=document.getElementById("ftel").value;
     var time=document.getElementById("ftime").value;
          var date=document.getElementById("fdate").value;
          let obj={name:names,email:emailadd,phone:phone,time:time,date:date};
          var newobj=JSON.stringify(obj);//tonconvert object into string as localstorage contain string
          localStorage.setItem(emailadd,newobj);
   var parseval=JSON.parse(localStorage.getItem(emailadd));//to convert string intonobject
   //create new div
   var newh3=document.createElement('ul');
   var li=document.createElement('li');
   li.className="list-group-item";
   li.appendChild(document.createTextNode(parseval.name));
      li.appendChild(document.createTextNode(parseval.email));
            li.appendChild(document.createTextNode(parseval.phone));
   li.appendChild(document.createTextNode(parseval.date));
   li.appendChild(document.createTextNode(parseval.time));
newh3.appendChild(li);
   var newdiv=document.querySelector('#start');
   newdiv.appendChild(newh3);
     }
        