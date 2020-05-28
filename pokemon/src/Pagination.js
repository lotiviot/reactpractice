import React from 'react'

//function for component pagination which accepts functions gotoNextPage and gotoPrevPage
//these are declared and found in App.js
export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            /*this is a simple ifstatement that checks is both are true which will give 
            functionality and presence to the button else, they are false, and do neither*/
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
             {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
