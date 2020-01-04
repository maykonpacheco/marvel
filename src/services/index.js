import { baseURL } from './endpoints';
 

const apikey = '?ts=thesoer&apikey=7173767880dfa45ee0343944e2f5911b&hash=ad1a04a6273c1a2b56d0d5c709c17a04';

export const comics = () => {
    return fetch (`${baseURL}`, {
        method: "GET"
    }).then(res => res.json());
};

