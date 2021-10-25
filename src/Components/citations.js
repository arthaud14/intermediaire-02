import React, { useState, useEffect } from "react";
import axios from "axios";

const Citations = () => {
  const [data, setData] = useState([]);
  function getQuotes() {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((res) => setData(res.data));
  }
  useEffect(() => {
    getQuotes()
    }, []);
 
  return (
    <div className="citations">
        <ul className="citations-list">
            {data.map((citation) => (
              <li>
              {citation.quote}
              {citation.character}
              <img src={citation.image} alt="img"/>
              {citation.characterDirection}
              </li>
              ))}
            </ul>
            <button onClick = {getQuotes}>Rafraichir</button>
       </div>
  );
};

export default Citations;