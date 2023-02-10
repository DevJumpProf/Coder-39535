const getNobreAxios =async (idPost)=>{

    try {

        const resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      /*   console.log(resPost.data) */

        const resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser)
 console.log(`la persona que escribio el post ${idPost} es ${resUser.data.name} y vive en ${resUser.data.address.city}`)
    } catch (error) {
console.log(error)
  
    }

}

getNobreAxios(54)