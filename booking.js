const val=document.getElementById('btm');

val.addEventListener('click',fun1);

function fun1(e){
e.preventDefault();
// localStorage.setItem('name',names); 
             var names=document.getElementById("fnames").value;
          var email=document.getElementById("femail").value;
     var phone=document.getElementById("ftel").value;
     var time=document.getElementById("ftime").value;
          var date=document.getElementById("fdate").value;
          let obj={name:names,emails:email,phone:phone,time:time,date:date};
          var newobj=JSON.stringify(obj);//tonconvert object into string as localstorage contain string
           localStorage.setItem('objects',newobj);
          var parseobj=JSON.parse(localStorage.getItem("objects"));//to convert string intonobject
        }
        