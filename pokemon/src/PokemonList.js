import React from 'react'

//simple component declaration for the pokemon list component 
//which accepts the an array of pkmn from { pokemon }
export default function PokemonList({ pokemon }) {
    
    return (
        //fragment start
        <div>
            //from pokemon map(which means print to page) from pointer p
            {pokemon.map(p => (
                //use p which is the name as key since they will be unique in this case
                //may have to use a random id in other instances uuidv4
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
