import React from 'react'

export default function SearchBox({ setSearchField }) {
    return (
        <div>
           <input type="search" placeholder="search monsters..." className="mb-5 form-control col-sm-6 mx-auto" onChange={e => setSearchField(e.target.value) } /> 
        </div>
    )
}
