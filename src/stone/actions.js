import { ROOT_URL } from '../services';

export const dataMain = (data) => {
    return fetch (`${ROOT_URL}/data`, {
        method: 'POST', 
        body: JSON.stringify({
            
        })      
    })
    console.log(dataMain)
}