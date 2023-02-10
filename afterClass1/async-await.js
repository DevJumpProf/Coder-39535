
const getNameAsync = async (idPost) =>{

    try {
const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
/* ("https://jsonplaceholder.typicode.com/posts/"+idPost) */
/* console.log(resPost); */
const post = await resPost.json()
/* console.log(post) */

const resUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
const user = await resUser.json()
console.log(user)

console.log(`la persona que escribio el post ${post.id} es ${user.name} y vive en ${user.address.city} `);
    } catch (error) {
        console.log(error);
    }
}



getNameAsync(2)