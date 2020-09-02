import React from "react";
import Quotes from "./component/QuotesDatabase";

import "./App.css";

function App() {
  const [quote,setQuotes]=useState(Quotes[0].quote);
  const [author,setAuthor]=useState(Quotes[0].author)
    )
  const handleClick=() => {
    console.log("button click")
    const rand=Math.floor(Math.random()*Quotes.length())
    console.log('Random Number is', rand)
    setQuote(Quotes[rand].quote)
    setAuthor(Quotes[rand].author)
  }
  return (
    
        <div className='container'>
          hello

          <div className='wrappers w3-animate-top'>
          <p className='quote'>{quote}</p>
          {author ? <p className='author'> -{author}</p> : <p> -Unknown</p> }  
          </div>
    
          <button className='button-main' onClick={handleClick}>Generate Quote</button>
        </div>
       
}

export default App;
