import {ref as dataRef, get, set, push, remove} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {productItem} from './templates/productItem'

async function pageInit(){
    const productRef = dataRef(db, 'products/');
    const productSnapShot = await get(productRef)
    const data = productSnapShot.val();

    Object.values(data).map(product=>{
        console.log(product)
        const card = productItem(product)
        document.querySelector('main').append(card)
    })
}

pageInit()