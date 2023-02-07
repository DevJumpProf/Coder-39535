import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)


const Show = ()=>{
// 1 configurar los hooks
const [products,setProducts]= useState([])
// 2 referenciamos la db de firestore
const productsCollection = collection(db,"dctoys")
//3 funcion para mostrar todos los docs
const getProducts= async () =>{
    const data = await getDocs (productsCollection)
console.log (data.docs)
setProducts(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)
/*  console.log (products)  */
}
// 4 funcion para eliminar un doc
const deleteProduct= async(id)=>{
const productDoc= doc(db,"dctoys",id)
await deleteDoc (productDoc)
getProducts()
}
//5 funcion para la confirmacion de swwet alert
const confirmDelete=(id)=>{
    Swal.fire({
        title: 'Estas Seguro/a',
        text: "No podes revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo Borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id) //llamamos a la funcion eliminar
          Swal.fire(
            'Borrado!',
            'Has eliminado el Documento.',
            'success'
          )
        }
      })


}
//6 use useEffect
useEffect(()=>{
    getProducts()
},[])
//7 devolvemos la vista de nuestro componente
return(
 // fragment
 <> 
<div className="container">
<div className="row">
    <div className="col">
        <div className="d-grid gap-2">
<Link to="/create" className="btn btn-secondary mt-2 mb-2">CREAR</Link>
        </div>
<table className="table table-dark table-hover">
<thead>
    <tr>
        <th>Description</th>
        <th>Stock</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
{products.map((product)=>(
<tr key={product.id}>
    <td>{product.description}</td>
    <td>{product.stock}</td>
    <td>
        <Link to={`/edit/${product.id}`} className="btn btn-light" ><i className="fa-solid fa-pencil"></i></Link>
    <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
    </td>
</tr>


))}

</tbody>


</table>
    </div>  

</div>


</div>

</>
)

}

export default Show


