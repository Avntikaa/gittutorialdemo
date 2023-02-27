const promisewifeticket=new Promise((res,rej)=>{
setTimeout(()=>{
    res('titket get');
},000)
})

function getfood(){
    return new Promise((res,rej)=>{
setTimeout(()=>{
    res('get food');
},3000)})
}

function getbutter(){
return new Promise((res,rej)=>{
setTimeout(()=>{
    res('get buuter');
},3000)})
}

function getcandy(){
return new Promise((res,rej)=>{
setTimeout(()=>{
    res('get candy');
},3000)})
}

function getcolddrinks(){
return new Promise((res,rej)=>{
setTimeout(()=>{
    res('getcold drinks');
},000)})
}
// promisewifeticket.then((msg)=>{
//     console.log(msg);
//     getfood().then((msg)=>{
//         console.log(msg);
//         getbutter();
//     })
// });

//async wayy
// async function h1(){
//     let p1=await promisewifeticket;
//     console.log(p1);
// let p2=await getfood();
// console.log(p2);
// let p3=await getbutter();
// console.log(p3);
// let p4=await getcandy();
// console.log(p4);
// }

// h1();

//if we have function which can be executed at the same time 
//Ex. in this case candy ,butter need to bring at the same time
//we use promises.all

async function h1(){
    let p1=await promisewifeticket;
    console.log(p1);
let p2=await getfood();
console.log(p2);
let p3=await getbutter();
let p4=await getcandy();
let [x,y]=await Promise.all([p3,p4]);
console.log(`${x},${y}`);
let p5=await getcolddrinks();
console.log(p5);
}

h1();
