import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase/config';
/* import { pedirProductos } from "../../helpers/pedirProductos" */
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
        .then ((doc) =>{
            setItem({
               id: doc.id,
                ...doc.data() 
            })
        })
        .finally(()=>{
            setLoading(false)
        })

/*         pedirProductos()
            .then(res => {

                setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            }) */

    }, [itemId, setLoading])


    return (
        <section>
            {
                loading ? <h2> Loading...</h2>
                : <ItemDetail {...item}/>

            }
            
        </section>
    )
}

export default ItemDetailContainer
