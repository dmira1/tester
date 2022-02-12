import {ref as dataRef, get, set, push, remove} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {productItem} from './templates/productItem'

async function pageInit(){
    const productRef = dataRef(db, 'products/');
    const productSnapShot = await get(productRef)
    const data = productSnapShot.val();
    
    // ES Modules For The Render Function
    // JS Client  Arrays[{},{},{},{},{}]
    // Firebase Object of ojbects  {{},{},{},{}}
    // Creating An Array from Objects
    // Object.keys() Object.entries() Object.values() return array
    // Object propert  Obj.prop   or  Obj['key']

    // Render Function   component + data =====> DOM Content.

    Object.values(data).map(product=>{
        const card = productItem(product)
        document.querySelector('.card-container').append(card)
    })
}

pageInit()