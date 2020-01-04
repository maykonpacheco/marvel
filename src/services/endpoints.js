import axios from 'axios';

export const axiosInstanceComics = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics?ts=thesoer&apikey=7173767880dfa45ee0343944e2f5911b&hash=ad1a04a6273c1a2b56d0d5c709c17a04'
})

export const axiosInstanceCharacters = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=7173767880dfa45ee0343944e2f5911b&hash=ad1a04a6273c1a2b56d0d5c709c17a04'
})

export const axiosInstanceCreators = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/creators?ts=thesoer&apikey=7173767880dfa45ee0343944e2f5911b&hash=ad1a04a6273c1a2b56d0d5c709c17a04'
})




//export const baseURL = 'http://gateway.marvel.com/v1/public/?ts=thesoer&apikey=7173767880dfa45ee0343944e2f5911b&hash=ad1a04a6273c1a2b56d0d5c709c17a04';



