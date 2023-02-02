import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = ()=>{

//1 configurar los hooks

const [products,setProducts] = useState([])

//2 referenciar a la db de firestore

const productsColletion = collection (db,"dctoys")

//3 funcion para mostrar todos los documentos
const getProducts = async ()=>{
const data = await getDocs (productsColletion)
//console.log(data.docs)
setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}


//4 funcion para eliminar un documento


const deleteProduct  = async(id)=>{
const ProductDoc = doc(db,"dctoys",id) 
await deleteDoc (ProductDoc)
getProducts()
}


//5funcion para la confirmacion de sweet alert
const confirmDelete=(id)=>{

    Swal.fire({
        title: 'Estas Segurola?',
        text: "Esto no se revierte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Quiero eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id)  //llamamos a la funcion eliminar
          Swal.fire(
            'Borrado!',
            'tu producto fue borrado.',
            'success'
          )
        }
      })

}


//6 use useEffect

useEffect(()=>{
    getProducts()
},[])


// devolver la vista



    
    return(


<div>
    <h1>hola</h1>
</div>


    )


}

export default Show