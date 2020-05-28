//imports necessary for the program to work

//the hooks inside are what allow for functionality with state changes and effect loading to occur
import React, { useState, useEffect } from 'react';

//custom local imports for component js files
import PokemonList from './PokemonList'
import Pagination from './Pagination'

//axios library which allows simple api access in the application
import axios from 'axios'

function App() {

  //variable that loads the pokemon list
  const [pokemon, setPokemon] = useState([])

  //variable that holds the pokemon api
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  //variable that accesses the next page url for the list
  const [nextPageUrl, setnextPageUrl] = useState()

  //variable that accesses the previous page url for the list
  const [previousPageUrl, setpreviousPageUrl] = useState()

  //variable that holds loading message
  const [loading, setLoading]= useState(true)


  //the effect that is called when a new page is loaded
  useEffect(() => {
    //while effect is in use print loading message
    setLoading(true)
    
    //cancels old request
    let cancel

    //axiios grab effect which fetches from pokemon api
    axios.get(currentPageUrl, {

      //cancels previous call in let cancel
      cancelToken: new axios.CancelToken(c=>cancel=c)
    }).then(res => {

      //removing loading page
      setLoading(false)

      //loads next page url button
      setnextPageUrl(res.data.next)

      //loads previous page url button
      setpreviousPageUrl(res.data.previous)

      //loads list from res.data.results onto page
      setPokemon(res.data.results.map(p => p.name))
    })
    
    //more boilerplate cancel code
    return () => cancel()
  }, [currentPageUrl])
  

  //function set used in pagination to give functionality to buttons
  function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl)
  }
  
  function gotoPrevPage() {
    setcurrentPageUrl(previousPageUrl)
  }

  //call for loading print
  if (loading) return "Loading..."
  
  //return code
  return (
    //single fragment to allow for code to function
    <>

    //pkmn list
    <PokemonList pokemon={pokemon} />

    //pagination component which creates buttons 
    <Pagination 

    //if nextpageurl isn't null print the button else don't print the button is the syntax here
    gotoNextPage={nextPageUrl ? gotoNextPage : null}
    gotoPrevPage={previousPageUrl ? gotoPrevPage: null} />
    </>
  );
}

export default App;
