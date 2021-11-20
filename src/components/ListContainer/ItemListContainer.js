import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
/* import { pedirProductos } from "../../helpers/pedirProductos" */
import { ItemList } from "./ItemList"
import NavProd from "./NavProd"



export const ItemListContainer = () => {

    const [items,setItems] = useState([])
    const {loading, setLoading} = useContext(UIContext)

    const {categoriaId} = useParams()

    useEffect(()=>{

        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')



        if (categoriaId){
            const filtrado = productos.where('categoria', '==', categoriaId)

            filtrado.get()
            .then((response) => {
                const newItems = response.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()}
                })
               
                setItems(newItems)
                setLoading(false)
            })
        } else {

            productos.get()
        .then((response) => {
            const newItems = response.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
           
            setItems(newItems)
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)}
            )
        }
       




/*         setLoading(true)

        pedirProductos()
            .then((res) => {
                
                if (categoriaId){
                    setItems(res.filter(prod => prod.categoria === categoriaId))
                    
                }
               else{
                    setItems(res)
                }
                
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            }) */

    }, [categoriaId, setLoading])


    return (
        <section  >
           <NavProd/>
            {
                loading 
                    ? <h2>cargando productos...</h2>
                    :
                    <ItemList productos={items}/>
            }
            
        </section>
    )
}