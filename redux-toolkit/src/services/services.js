import axios from 'axios';

export let fetchproduct = async ()=>{
    let responce = await axios.get('https://fakestoreapi.com/products')
    return responce.data
}