import React, { useEffect, useState } from "react"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SearchHeader = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [isFocus, setIsFocus] = useState(false);

  const navigate = useNavigate()

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false)
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    search(event.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  const search = (query) => {
    axios.get(`http://localhost:3001/products/search/${query}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchSlice = searchResults.slice(-5)



  return (

    <div className="search">
      <form onSubmit={handleSubmit}>
      <input autoComplete="off" placeholder="Buscar producto..." type={"search"} name={"search"} className="search-bar" onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}></input>
      <button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
      <div className="results">
        {isFocus ? (
          <ul>
            {searchSlice.map((result) => (
              <Link key={result._id} onClick={() => setIsFocus(true)} to={`/products/detail/${result._id}`} style={{ textDecoration: 'none' }}>
                <li key={result._id} >
                  <img src={result.imgUrl} className="results-img" />
                  {result.nombre}
                </li>
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default SearchHeader