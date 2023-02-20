const val=document.getElementById('btm');

     var names=document.getElementById("fnames").value;
          var email=document.getElementById("femail").value;
     var phone=document.getElementById("ftel").value;
     var time=document.getElementById("ftime").value;
          var date=document.getElementById("fdate").value;

val.addEventListener('click',fun1);

function fun1(e){
e.preventDefault();
// localStorage.setItem('name',names); 
             var names=document.getElementById("fnames").value;
          var email=document.getElementById("femail").value;
     var phone=document.getElementById("ftel").value;
     var time=document.getElementById("ftime").value;
          var date=document.getElementById("fdate").value;
            localStorage.setItem('names',names);
                        localStorage.setItem('email',email);
            localStorage.setItem('phone',phone);
            localStorage.setItem('time',time);
            localStorage.setItem('date',date);


        }