
import React, { useState } from "react";
const Movie = () =>{
    const [search, setSearch] = useState('');
    const [data, setdata] = useState([]);
    const submit = e =>{
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=d38e5245`).then(
            response => response.json()
        ).then(value => setdata(value.Search));
    }
    return(
        <div>
            <h2>Search a movie</h2>
            <form onSubmit={submit}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
            <div className="row">
            {
                data.map(
                    (value)=>
                    <div className="col-md-4">
                        <div className="card" Style="width: 20rem">
                            <img src={value.Poster} className="card=img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{value.Title}</h5>
                                <p className="card-text">{value.Year}</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>

                        </div>
                    </div>
    
                )
            }
            </div>
        </div>
    )
}
export default Movie;