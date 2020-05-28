import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setnextPageUrl] = useState()
  const [previousPageUrl, setpreviousPageUrl] = useState()
  const [loading, setLoading]= useState(true)



  useEffect(() => {
    setLoading(true)

    let cancel

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res => {
      setLoading(false)
      setnextPageUrl(res.data.next)
      setpreviousPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setcurrentPageUrl(previousPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination 
    gotoNextPage={nextPageUrl ? gotoNextPage : null}
    gotoPrevPage={previousPageUrl ? gotoPrevPage: null} />
    </>
  );
}

export default App;
