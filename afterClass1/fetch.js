const getNameFetch = (idPost) => {

try {
    fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res=>{
        return res.json()
    })                            
.then (post=>{
    console.log(post)
    fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    .then(res=>{
        return res.json() 
    })                           
    .then(user=>{
        console.log(`la persona que escribio el post ${post.id} es ${user.name} y vive en ${user.address.city} `);
    })
})
    
} catch (error) {

    console.log(error)  
}
}
getNameFetch(28)
