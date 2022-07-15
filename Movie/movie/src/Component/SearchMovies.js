import React from 'react'

const SearchMovies = () => {
  return (
    <div>
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchMovies
