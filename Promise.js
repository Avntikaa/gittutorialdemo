const posts={title:"dc",createdAt:'13th of jan'};

function userlastactivity(){
    return new Promise((res,rej)=>{
setTimeout(()=>{
res(posts.createdAt=new Date().getTime());
},3000)
    })
}

function createPost(){
    return new Promise((res,rej)=>{
         setTimeout( () => {
            
            res(posts.title='cijai');
        }, 1000)
    })
       
}

// function showPost(){
//       posts.forEach((post) => {
//         console.log(post.title);
//     console.log(post.createdAt);
//     })
// }


Promise.all([createPost(), userlastactivity()]).then((x,y)=>{
    console.log(x);
    console.log(y);
})

Promise.all([createPost(), userlastactivity()]).then((x,y)=>{
    console.log(x);
    console.log(y);
})

