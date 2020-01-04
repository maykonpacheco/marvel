import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { useSelector } from "react-redux";

import { HeaderComics } from "./HeaderComics";
import { BodyComics } from "./BodyComics";

import { axiosInstanceComics, axiosInstanceCharacters, axiosInstanceCreators } from '../../services/endpoints';
export default function Comics() {
  const [comicsPopularMarvel, setComicsPopularMarvel] = useState([]);
  const [charactersMarvel, setCharactersMarvel] = useState([]);
  const [creatorsMarvel, setCreatorsMarvel] = useState([]);


  useEffect(() => {
    async function comicsGet() {
      const response =  await axiosInstanceComics.get('');
      const comicsResults = response.data.data.results;
      setComicsPopularMarvel(comicsResults)
  
    }
    comicsGet();

  }, [])
  
  useEffect(() => {
    async function charactersGet() {
      const response =  await axiosInstanceCharacters.get('');
      const charactersResults = response.data.data.results;
      setCharactersMarvel(charactersResults)
    }
    charactersGet();

  })
  
  useEffect(() => {
    async function creatorsGet() {
      const response =  await axiosInstanceCreators.get('');
      const creatorsResults = response.data.data.results;
      setCreatorsMarvel(creatorsResults)
    }
    creatorsGet();

  })

  return (
    <Container>
      <HeaderComics />
      <BodyComics comicsPopularMarvel={comicsPopularMarvel} charactersMarvel={charactersMarvel} creatorsMarvel={creatorsMarvel}  />
    </Container>
  );
}
