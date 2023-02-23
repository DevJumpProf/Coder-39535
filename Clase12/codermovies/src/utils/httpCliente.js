const API = "https://api.themoviedb.org/3";

export const get = (path)=>{
    return fetch (API+path,{
        headers:{
            Authorization:
            "Bearer TU API KEY",
            "Content-Type":"application/json;charset=utf-8",

        }
    }).then((results) => results.json())

}